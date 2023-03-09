
import { useRef } from 'react';
import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';
import { DateGap, days, today } from 'utils/dateParse';

function DetailTitle({ post }) {
  const parse = useRef(DateGap(today.getDate(), post.createdAt.getDate()));
  return (
    <S.Wrapper>
      <div>모두 공개</div>
      <div>
        {post.User.nick_name}
        {post.User.nick_name}
        {post.User.nick_name}
      </div>
      <TitleDetail>
        <div>
          <img src={post.User.profile_img} />
          <div>{post.User.nick_name}</div>
        </div>
        {parse.current ? (
          <div>{DateGap(today.getDate(), post.createdAt.getDate())}. </div>
        ) : (
          <div>
            <div>{post.createdAt.getFullYear()}. </div>
            <div>{post.createdAt.getMonth() + 1}. </div>
            <div>{post.createdAt.getDate()}. </div>
            <div>{days[post.createdAt.getDay()]}. </div>
          </div>
        )}
      </TitleDetail>
    </S.Wrapper>
  );
}

export default DetailTitle;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  border-bottom: 3px solid black;

  & > div {
    margin: 80px 0;
  }
  & > div:first-child {
    background-color: #f9d72f;
    font-size: 1.2rem;
    font-weight: bold;
    width: 10%;
    text-align: center;
  }
  & > div:nth-child(2) {
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const TitleDetail = styled.div`
  ${flexAlignCenter}
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;

  & > div:first-child {
    ${flexAlignCenter}
    color: #f9d72f;
  }

  & > div:first-child > * {
    margin: 0px 10px;
  }

  & > div:first-child > img {
    border-radius: 50%;
  }

  & > div:last-child {
    ${flexAlignCenter}
  }
`;
const S = {
  Wrapper,
  TitleDetail,
};
