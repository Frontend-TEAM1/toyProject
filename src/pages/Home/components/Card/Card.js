import styled from "styled-components";
import theme from "../../../../styles/theme";
import { flexAlignCenter, flexCenter } from "../../../../styles/common";
import { Link, useNavigate } from "react-router-dom";

function Card({ diary }) {
  // console.log(Object.values(diary)[5]);

  const navigate = useNavigate();
  
  const goDetail = () => {
    navigate(`/${diary.User.nick_name}`,{
      state:diary
    });

    window.scrollTo(0,0);
  }

  const myDate = String(diary.createdAt).split(' ').splice(0, 4).join(' ');

  return (
    <S.Wrapper onClick={goDetail} >
      <S.Container>
        <div>
          <S.UserName>{diary.User.nick_name}</S.UserName>
          <img src={diary.User.profile_img} style={{width:"70px",height:"70px", borderRadius: "50%"}}/>
        </div>
          <S.Date>{myDate}</S.Date>
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
