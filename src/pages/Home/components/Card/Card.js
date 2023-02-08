import styled from "styled-components";
import theme from "../../../../styles/theme";
import { flexAlignCenter, flexCenter } from "../../../../styles/common";

function Card({ diary }) {
    console.log(Object.values(diary)[5])
    return (
      <S.Wrapper>
        <S.Container>
          <div>
          {String(diary.createdAt)}
            <S.Date></S.Date>
            <S.UserName></S.UserName>
            <img src={diary.User.profile_img}/>
          </div>
          <S.Title>
            <p></p>
          </S.Title>
          <S.DetailContent></S.DetailContent>
        </S.Container>
      </S.Wrapper>
    );
  }
  export default Card;
  
  const Wrapper = styled.div`
    width: 30%;
    height: calc(100vh-50px);
    padding-top: 50px;
    padding-bottom: 50px;
  `;
  
  const Container = styled.div`
    width: 350px;
    height: 350px;
    padding: 10px;
    background-color: white;
    border-radius: 15px;
    ${flexCenter}
    ${flexAlignCenter}
    flex-direction: column;
    & > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    `;
  
  const Title = styled.div`
    width: fit-content;
    height: 50px;
    max-width: 350px;
    color: ${theme.PALETTE.black};
    font-size: ${theme.FONT_SIZE.medium};
    font-weight: ${theme.FONT_WEIGHT.bold};
    ${flexCenter}
    border-top: 2px solid black;
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
    height: 100%;
    `;
  
  const S = {
    Wrapper,
    Container,
    Title,
    Date,
    UserName,
    DetailContent,
  };

  