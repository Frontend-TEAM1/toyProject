import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexAlignCenter } from "../../../styles/common";
// import { flexAlignCenter, flexCenter } from "styles/common";
import CommentBoard from "./CommentBoard";

function CommentInput(props) {
  const [inputValue, setInputValue] = useState("");
  const [comList, setCommentList] = useState([]);
  const addItem = (e) => {
    // e.preventDefault();
    setCommentList([inputValue, ...comList]); //기존유지+ 새로운 input value
  };

  return (
    <>
      <S.ComWrapper>
        <input
          value={inputValue}
          type="text"
          placeholder="착한 댓글을 달아주세요"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <S.btn onClick={addItem}>저장</S.btn>
      </S.ComWrapper>
      <S.list>
        <CommentBoard comList={comList} />
      </S.list>
    </>
  );
}

export default CommentInput;

const ComWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  ${flexAlignCenter}
  ${flexCenter}
  & > input {
    width: 600px;
    height: 9rem;
    border: 1px solid yellow;
    border-radius: 10px;
    ${flexCenter}
  }
`;

const btn = styled.div`
  width: 70px;
  max-width: 150px;
  height: 5rem;
  background-color: yellow;
  color: black;
  border-radius: 15px;
  ${flexCenter}
  margin: 10px;
`;

const list = styled.div`
  /* width: 700px;
  max-width: 1000px;
  margin: 15px;
  ${flexCenter}; */
`;

const S = {
  ComWrapper,
  btn,
  list,
};