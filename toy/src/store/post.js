import { faker } from '@faker-js/faker';
import shortid from 'shortid';
import { createAction } from 'utils/createAction';

const { MockPost } = require('__mocks__/post');

const initialState = MockPost(6);

export const ADD_POST = createAction('ADD_POST');
export const ADD_COMMENT = createAction('ADD_COMMENT');
export const UPDATE_COMMENT = createAction('UPDATE_COMMENT');
export const DELETE_COMMENT = createAction('DELETE_COMMENT');

// dispatcher
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, ...action.payload];
    case 'ADD_COMMENT':
      const newAddState = [...state];
      const findPost = newAddState.find((post) => post.id === action.payload.id);
      const AddUser = {
        User: {
          id: shortid.generate(),
          nick_name: faker.name.firstName(),
          profile_img: faker.image.avatar(),
        },
        content: action.payload.comment,
        createdAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
        myComment: 'Y',
      };
      const newAddComment = findPost.Comments.push(AddUser);
      newAddState.Comments = newAddComment;
      return newAddState;
    case 'UPDATE_COMMENT':
      const newUpdateState = [...state];
      const findUpdatePost = newUpdateState.find((post) => post.id === action.payload.id);
      console.log(action.payload);
      const findUpdateComment = findUpdatePost.Comments.find(
        (comment) => comment.User.id === action.payload.commentId
      );
      findUpdateComment.content = action.payload.editComment;
      return newUpdateState;
    case 'DELETE_COMMENT':
      const newDeleteState = [...state];
      const findPostDelete = newDeleteState.find((post) => post.id === action.payload.id);
      const findDeleteComment = findPostDelete.Comments.filter(
        (comment) => comment.User.id !== action.payload.commentId
      );
      findPostDelete.Comments = findDeleteComment;
      return newDeleteState;
    default:
      return state;
  }
};

export default reducer;
