import styled from "styled-components";
import theme from "../../../../styles/theme";
import { flexAlignCenter, flexCenter } from "../../../../styles/common";
import { Link } from "react-router-dom";

function Card({ diary }) {
  console.log(Object.values(diary)[5]);

  
  const goDetail = (e) => {
        <Link to='/detail' />
        // url에 /detail 붙게 하면 될듯..
  }

  return (
    <S.Wrapper>
      <S.Container onClick={goDetail}>
        <div>
          <S.UserName>{diary.User.nick_name}</S.UserName>
          <S.Date>{String(diary.createdAt)}</S.Date>
          {/* <img src={diary.User.profile_img}/> */}
        </div>
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
    e.stopPropagation()
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
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Date = styled.div`
  width: fit-content;
  max-width: 100px;
  font-size: ${theme.FONT_SIZE.small};
`;

const UserName = styled.div`
  width: fit-content;
  max-width: 100px;
  font-size: ${theme.FONT_SIZE.small};
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
