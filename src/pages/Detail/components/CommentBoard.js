import React from 'react';
import styled from 'styled-components';
import { flexAlignCenter } from '../../../styles/common';
import CommentList from './CommentList';

function CommentBoard({ commentList, id }) {
  // console.log("CommentInput으로부터 받은 comList", comList);

  console.log(commentList);
  return (
    <Wrapper>
      <div>
        <span>ALL COMMENTS</span>
        {commentList &&
          commentList
            .sort((a, b) => {
              return b.createdAt - a.createdAt;
            })
            .map((item) => {
              return (
                <CommentList item={item} commentList={commentList} id={id} />
              );
            })}
      </div>
    </Wrapper>
  );
}

export default CommentBoard;

const Wrapper = styled.div`
  width: 100%;
  ${flexAlignCenter}

  & > span {
    font-size: 20px;
    font-weight: bold;
  }
  & > div {
    width: 70%;
    margin: 0 auto;
  }
`;
