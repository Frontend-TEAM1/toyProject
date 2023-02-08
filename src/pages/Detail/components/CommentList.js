import styled from "styled-components";
import { flexCenter, flexAlignCenter } from "../../../styles/common";

function CommentList(props) {
  return <S.CommentItem>{props.item}</S.CommentItem>;
}

export default CommentList;

const CommentItem = styled.div`
  width: 700px;
  height: 50px;
  border: 1px solid lightblue;
  border-radius: 10px;
  background-color: white;
  border-bottom: 1px solid gray;
  ${flexAlignCenter}
  ${flexCenter}
`;

const S = {
  CommentItem,
};