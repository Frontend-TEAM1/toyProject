import styled from 'styled-components';

function BasicFooter() {
  return (
    <S.Wrapper>
      <div>
        <div>소개</div>
        <div>공지사항</div>
        <div>자주 묻는 질문</div>
        <div>문의/제안</div>
      </div>
      <div>Copyright © 2022 - All right reserved by Classbinu</div>
    </S.Wrapper>
  );
}
export default BasicFooter;

const Wrapper = styled.div`
  background-color: #f9d72f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  & > div {
    margin: 30px 0;
  }

  & > div:first-child {
    display: flex;
    & > div {
      margin: 0 10px;
    }
  }
`;

const S = {
  Wrapper,
};
