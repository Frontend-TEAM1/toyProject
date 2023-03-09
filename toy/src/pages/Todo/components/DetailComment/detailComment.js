import { useRef } from 'react';
import styled from 'styled-components';
import Comments from './Comments/comments';

function DetailComment({ post, addComment, updateComment, deleteComment, id }) {
  const comment = useRef();

  const onClickAddComment = () => {
    if (!comment.current.value) return alert('글을  작성해주세요');
    addComment(id, comment.current.value);
  };

  return (
    <>
      <S.Wrapper>
        <textarea ref={comment} placeholder="댓글을 작성해주세요"></textarea>
        <button onClick={onClickAddComment}>작성</button>
      </S.Wrapper>
      {post.Comments.map((comment) => {
        return (
          <Comments
            comment={comment}
            addComment={addComment}
            updateComment={updateComment}
            deleteComment={deleteComment}
            id={id}
          />
        );
      })}
    </>
  );
}

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  /* border: 1px solid red; */
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;

  & > textarea {
    width: 90%;
    height: 15vh;
    background-color: #e9e9e9;
    font-size: 1.2rem;
    border-radius: 10px;
  }

  & > button {
    background-color: #f9d72f;
    height: 100%;
    padding: 20px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const S = {
  Wrapper,
};

export default DetailComment;
