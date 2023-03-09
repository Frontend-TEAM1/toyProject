import { useRef } from 'react';
import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';
import { DateGap, days, today } from 'utils/dateParse';

function CardTitle({ post }) {
  const parse = useRef(DateGap(today.getDate(), post.createdAt.getDate()));

  return (
    <S.Wrapper>
      <div>
        <img src={post.User.profile_img} width={80} height={80} />
        <div>{post.User.nick_name}</div>
      </div>
      <S.DateWrapper>
        {parse.current ? (
          <div>{DateGap(today.getDate(), post.createdAt.getDate())}. </div>
        ) : (
          <>
            <div>{post.createdAt.getFullYear()}. </div>
            <div>{post.createdAt.getMonth() + 1}. </div>
            <div>{post.createdAt.getDate()}. </div>
            <div>{days[post.createdAt.getDay()]}. </div>
          </>
        )}
      </S.DateWrapper>
    </S.Wrapper>
  );
}

export default CardTitle;

const Wrapper = styled.div`
  ${flexAlignCenter}
  justify-content: space-between;
  padding: 20px;
  border-bottom: 5px solid black;
  margin: 10px 20px;

  & > div:first-child {
    ${flexAlignCenter}
  }

  & > div:first-child > * {
    margin: 0 10px;
  }

  & > div:first-child > img {
    border-radius: 50%;
  }
`;

const DateWrapper = styled.div`
  ${flexAlignCenter}
`;

const S = {
  Wrapper,
  DateWrapper,
};
