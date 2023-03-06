import React from 'react';
import styled from 'styled-components';
import { flexAlignCenter } from '../../../styles/common';
import CommentList from './CommentList';

function CommentBoard({ comList, setComList, id }) {
  // console.log("CommentInput으로부터 받은 comList", comList);

  console.log('commentBoard에 comList', comList);
  return (
    <Wrapper>
      <div>
        <span>ALL COMMENTS</span>
        {comList &&
          comList
            .sort((a, b) => {
              return b.createdAt - a.createdAt;
            })
            .map((item) => {
              return (
                <CommentList
                  item={item}
                  comList={comList}
                  setComList={setComList}
                  id={id}
                />
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
