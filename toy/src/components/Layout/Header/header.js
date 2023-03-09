import styled from 'styled-components';

function BasicHeader() {
  return (
    <S.Wrapper>
      <div>오늘의 일기</div>
      <S.Join>
        <div>회원가입</div>
        <div>로그인</div>
      </S.Join>
    </S.Wrapper>
  );
}
export default BasicHeader;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #181830;
  padding: 30px;
  color: white;
  font-size: 1.5rem;
`;

const Join = styled.div`
  display: flex;

  & > div {
    margin: 0 15px;
  }
`;

const S = {
  Wrapper,
  Join,
};
