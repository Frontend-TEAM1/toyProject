import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../styles/common";
import theme from "../../../styles/theme";

function BasicFooter() {
  return (
    <>
      <S.Container>
        <S.BottomMenu>
          <li>소개</li>
          <li>공지사항</li>
          <li>자주 묻는 질문</li>
          <li>문의/제안</li>
        </S.BottomMenu>
        <div>Copyright © 2022 - All right reserved by Classbinu</div>
      </S.Container>
    </>
  );
}

export default BasicFooter;

const Container = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  background-color: #EDD200;
  & > div {
    width: 100%;
    ${flexCenter}
    color: ${theme.PALETTE.black};
    list-style: none;
  }
`;

const BottomMenu = styled.div`
  width: 100%;
  margin-bottom: 50px;
  ${flexAlignCenter}
  & > li {
    margin-right: 15px;
  }
`;

const S = {
  Container,
  BottomMenu,
};