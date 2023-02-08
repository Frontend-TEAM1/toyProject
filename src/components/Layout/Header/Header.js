import styled from "styled-components";
import { flexCenter } from "../../../styles/common";
import theme from "../../../styles/theme";

function BasicHeader() {
  return (
    <>
      <S.Container>
        <div>오늘의 일기</div>
        <div>
          <li>내 일기장</li>
          <li>우리반 일기장</li>
          <li>모두의 일기장</li>
          <li>회원가입</li>
          <li>로그인</li>
        </div>
      </S.Container>
    </>
  );
}

export default BasicHeader;

const Container = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  background-color: black;
  & > div {
    width: 100%;
    ${flexCenter}
    color: ${theme.PALETTE.white};
    justify-content: space-between;
    list-style: none;
  }
`;

const S = {
  Container,
};