import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from 'store/post';
import styled from 'styled-components';
import DetailComment from './components/DetailComment/detailComment';
import DetailContent from './components/DetailContent/detailContent';
import DetailTitle from './components/DetailTitle/detailTItle';

function TodoPage() {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((post) => (post.id = id));

  const dispatch = useDispatch();

  const addComment = (id, comment) => {
    dispatch(ADD_COMMENT({ id, comment }));
  };

  const updateComment = (id, commentId, editComment) => {
    dispatch(UPDATE_COMMENT({ id, commentId, editComment }));
  };

  const deleteComment = (id, commentId) => {
    dispatch(DELETE_COMMENT({ id, commentId }));
  };

  return (
    <>
      {post && (
        <>
          <S.Wrapper>
            <DetailTitle post={post} />
            <DetailContent post={post} />
          </S.Wrapper>
          <DetailComment
            post={post}
            id={id}
            addComment={addComment}
            updateComment={updateComment}
            deleteComment={deleteComment}
          />
        </>
      )}
    </>
  );
}

export default TodoPage;

const BigWrapper = styled.div``;

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;

  width: 50%;
  background-color: beige;
  padding: 10px 0;
  border-radius: 25px;
`;

const S = {
  Wrapper,
  BigWrapper,
};
