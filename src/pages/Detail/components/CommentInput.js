import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
// import { mockData } from "__mocks__/post";
import { faker } from "@faker-js/faker";
import { flexCenter, flexAlignCenter } from "../../../styles/common";
import CommentBoard from "./CommentBoard";

function CommentInput({ commentList }) {
  const [inputValue, setInputValue] = useState(""); //input창 빈문자열로 시작
  const [comList, setCommentList] = useState(commentList);
  // console.log("comList", comList);

  // 새 댓글 입력 후 저장버튼 클릭 이벤트
  const addItem = () => {
    setCommentList([...comList, inputValue]); //기존유지+ 새로운 input value
    inputValue.value = '';
    console.log(comList);
  };


  const updateInput = (event) => {
    let value = event.target.value;
    return setInputValue({
      User: { nick_name: "글쓴이", profile_img: faker.image.avatar() },
      content: value,
      myComment: "Y",
    });
  };

  return (
    <>
      <S.list>
        <CommentBoard comList={comList} setCommentList={setCommentList} />
      </S.list>
      <S.ComWrapper>
        <input
          value={inputValue.value}
          // inputValue 가 object라서 키값 접근을 위해서 .value를 추가함. (그전에는 [object, Object]로 찍혔음)
          // 버튼을 클릭했을 때, input 의 value 값을 비운다.}
          type="text"
          placeholder="착한 댓글을 달아주세요"
          onChange={updateInput}
        />
        <S.btn onClick={addItem}>저장</S.btn>
      </S.ComWrapper>
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
    width: 800px;
    height: 9rem;
    border: 1px solid #f9d72f;
    border-radius: 10px;
    /* ${flexCenter} */
  }
`;

const btn = styled.div`
  width: 70px;
  max-width: 150px;
  height: 5rem;
  background-color: #f9d72f;
  color: black;
  border-radius: 15px;
  ${flexCenter}
  margin: 10px;
`;

const list = styled.div`
  width: 100%;
  box-sizing: border-box;
  ${flexAlignCenter};
`;

const S = {
  ComWrapper,
  btn,
  list,
};
