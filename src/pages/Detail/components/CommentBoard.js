import React from "react";
import styled from "styled-components";
import { flexAlignCenter } from "../../../styles/common";
import CommentList from "./CommentList";

function CommentBoard({ comList, setCommentList }) {
  // console.log("CommentBoard", comList);

  return (
    <Wrapper>
      <div>
        <span>ALL COMMENTS</span>
        {comList &&
          comList.map((item) => {
            return <CommentList item={item} comList={comList} setCommentList={setCommentList} />
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
