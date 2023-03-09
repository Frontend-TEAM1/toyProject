import styled from 'styled-components';
import { flexCenter } from 'styles/common';
import Diary from './Diary/Diary';

function DiaryList({ posts }) {

  return (
    <S.Wrapper>
      {posts.map((post, index) => {
        return (
          <Diary key={index} post={post} />
        );
      })}
    </S.Wrapper>
  );
}
export default DiaryList;

const Wrapper = styled.div`
  ${flexCenter}
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
`;

const Card = styled.div`
  margin: 20px;
  width: 450px;
  height: 450px;
  border-radius: 20px;
  box-shadow: 8px 8px 15px #f8f5f9;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
  }
`;

const S = {
  Wrapper,
  Card,
};
