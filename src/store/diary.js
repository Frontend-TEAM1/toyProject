import { MockPost } from '../__mocks__/post';
import { createAction } from '../utils/createAction';
import { faker } from '@faker-js/faker';

const initialState = MockPost(20);

export const addComment = createAction('ADD_COMMENT');
export const editComment = createAction('EDIT_COMMENT');
export const deleteComment = createAction('DELETE_COMMENT');

const diaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      const newValue = {
        id: Math.floor(Math.random() * 1000000),
        User: { nick_name: '글쓴이', profile_img: faker.image.avatar() },
        content: action.payload.content,
        myComment: 'Y',
      };
      const addedState = [...state];
      const addedIdx = addedState.findIndex(
        (com) => com.id === action.payload.id
      );
      console.log(addedState[addedIdx].Comments);
      addedState[addedIdx].Comments.push(newValue);
      return addedState;

    case 'EDIT_COMMENT':
      const editState = [...state];
      console.log('수정');
      const editIdx = editState.findIndex(
        (com) => com.id === action.payload.diaryId
      );
      const updatedIdx = editState[editIdx].Comments.findIndex(
        (com) => com.id === action.payload.commentId
      );
      console.log(editState[editIdx].Comments[updatedIdx].content);
      editState[editIdx].Comments[updatedIdx].content = action.payload.content;
      console.log('editState', editState);
      return editState;

    case 'DELETE_COMMENT':
      const deletedState = [...state];
      const deletedIdx = deletedState.findIndex(
        (com) => com.id === action.payload.diaryId
      );
      console.log('1', deletedState[deletedIdx].Comments);
      deletedState[deletedIdx].Comments = deletedState[
        deletedIdx
      ].Comments.filter((item) => item.id !== action.payload.commentId);
      console.log('2', deletedState[deletedIdx].Comments);
      console.log('deletedState', deletedState);
      return deletedState;

    default:
      return state;
  }
};

export default diaryReducer;

/*
    전역관리해야하는 것.
        initialState => 기본 데이터 불러온 것들 mockPost가 되겠지

    dispatch로 전달할 기능
        우리 조는 댓글 관련 추가, 수정, 삭제
    
    외에 구현해야하는 기능
        image 스와이프, infinite scroll
*/
