import styled from 'styled-components';
import theme from '../../../../styles/theme';
import { flexAlignCenter, flexCenter } from '../../../../styles/common';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import dayjs from 'dayjs';
// import { DateTime } from 'luxon';

function Card({ diary }) {
  // console.log(Object.values(diary)[5]);

  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/${diary.User.nick_name}`, {
      state: diary,
    });

    window.scrollTo(0, 0);
  };

  // 날짜 파싱
  // Dayjs
  const created = dayjs(diary.createdAt);
  const today = dayjs('2023-01-31 23:59', 'YYYY-MM-DD HH:mm');
  const dayDiff = today.diff(created, 'd');
  //true까지 넣으면 소수점단위로 초까지 비교 후 리턴

  // console.log(created.date);
  let DATE;
  if (dayDiff === 0 && created.get('d') === today.get('d')) DATE = '3시간 전';
  if (dayDiff >= 1) DATE = `${dayDiff}일 전`;
  if (dayDiff >= 4) DATE = created.format('YYYY-MM-DD');

  // console.log('DAY===============', dayDiff);

  /* momentJs
  const myDate = moment(diary.createdAt);
  //const myDate = String(diary.createdAt).split(' ').splice(0, 4).join(' ');

  const today = moment("2023-01-31 23:59:59", "YYYY-MM-DD hh:mm:ss");
  //today에는 오늘 날짜가 moment 객체로 저장

  const diff = today.diff(myDate, "days");
  //diff에는 오늘 날짜와 myDate의 차이가 일 단위로 저장됩니다.

  =======================================================
  moment() : 날짜를 비교하고 원하는 포맷으로 변환할 수 있음.
  diff에는 오늘 날짜와 myDate의 차이가 일 단위로 저장됩니다.

  let dateString;

  // diff===0 만 있으면 시간 차이가 얼마 안날때 23시55분이나 00시15분때도 같은 날로 인식. day()로 요일정보까지 비교후 같은지 확인.
  // console.log("===================> " + myDate);
  if (diff === 0 && myDate.day() === today.day()) {
    dateString = "3시간 전";
  } else if (diff > 2) {
    dateString = myDate.format("YYYY-MM-DD");
  } else if (diff > 0) {
    // console.log(diff);
    dateString = `${diff}일 전`;
  } else {
    dateString = myDate.format("YYYY-MM-DD");
  }
  */

  return (
    <S.Wrapper onClick={goDetail}>
      <S.Container>
        <div>
          <S.UserName>{diary.User.nick_name}</S.UserName>
          <img
            src={diary.User.profile_img}
            style={{ width: '70px', height: '70px', borderRadius: '50%' }}
          />
        </div>
        {/* <S.Date>{dateString}</S.Date> */}
        <S.Date>{DATE}</S.Date>
        <S.Title>
          <p>TITLE</p>
        </S.Title>
        <S.DetailContent>{diary.content}</S.DetailContent>
      </S.Container>
    </S.Wrapper>
  );
}
export default Card;

const Wrapper = styled.div`
  width: 200px;
  /* height: calc(100vh - 50px); */
  height: 300px;
  /* padding-top: 50px; */
  /* padding-bottom: 50px; */
  background-color: white;
  margin: 100px 20px 0 20px;
  border: 1px solid blue;
  border-radius: 20px;
  /* & :hover {
    box-shadow: 5px 5px 5px 5px rgb(245, 245, 245)
    stopPropagation()
  } */
`;

const Container = styled.div`
  /* width: 300px; */
  /* height: 350px; */
  /* padding: 10px; */

  border-radius: 15px;
  ${flexCenter}
  ${flexAlignCenter}
    flex-direction: column;
  padding: 20px;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const Title = styled.div`
  /* width: fit-content; */
  width: 300px;
  /* height: 50px; */
  /* max-width: 350px; */
  color: ${theme.PALETTE.black};
  font-size: ${theme.FONT_SIZE.medium};
  font-weight: ${theme.FONT_WEIGHT.bold};
  ${flexCenter}
  border-top: 2px solid black;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-top: 5px;
`;

const Date = styled.div`
  width: 100%;
  /* max-width: 100px; */
  font-size: ${theme.FONT_SIZE.small};
  margin-top: 10px;
`;

const UserName = styled.div`
  width: fit-content;
  max-width: 100px;
  font-size: ${theme.FONT_SIZE.large};
  font-weight: ${theme.FONT_WEIGHT.bold};
`;

const DetailContent = styled.div`
  width: 300px;
  height: 100px;
  /* display: block; */
  /* white-space: nowrap;  */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const S = {
  Wrapper,
  Container,
  Title,
  Date,
  UserName,
  DetailContent,
};
