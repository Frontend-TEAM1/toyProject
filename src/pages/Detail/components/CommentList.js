import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flexCenter, flexAlignCenter } from '../../../styles/common';
import moment from 'moment';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { deleteComment, editComment } from '../../../store/diary';

function CommentList({ comList, setComList, item, id }) {
  // item은 새 댓글 포함된 배열의 한개 한개(map의 결과)
  // commentList는 새 댓글 포함 전체 댓글들이 담긴 배열
  // https://jsikim1.tistory.com/196 dayjs 글
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(item.content);
  // const [original, setOriginal] = useState(inputValue);
  let original = inputValue;
  const dispatch = useDispatch();

  //댓글삭제
  const onDeleteCom = () => {
    if (isEdit) {
      // 취소버튼으로써 동작할 때
      console.log('취소버튼 눌림');
      setInputValue(original);
      return setIsEdit(false);
    }
    console.log('삭제버튼 눌림');
    return dispatch(deleteComment({ diaryId: id, commentId: item.id }));
    // 데이터는 바뀌었는데 왜 그려지지 않을까? state로만 바뀌면 될 것 같은데
  };

  // 삭제버튼을 누르면 일치하는 저장된 값을 비운다.
  // comList에 값을 하나씩 꺼내서 비교하고 일치하는 값을 잘라준다.
  // 새로운 배열도 넣어줬고..
  // 삭제 버튼을 클릭했을 때, onDeleteCom을 실행

  // Dayjs
  const created = dayjs(item.createdAt);
  const today = dayjs('2023-01-31 23:59', 'YYYY-MM-DD HH:mm');
  const dayDiff = today.diff(created, 'd');
  //true까지 넣으면 소수점단위로 초까지 비교 후 리턴

  // console.log(created.date)
  let DATE;
  if (dayDiff === 0 && created.get('d') === today.get('d')) DATE = '3시간 전';
  if (dayDiff >= 1) DATE = `${dayDiff}일 전`;
  if (dayDiff >= 4) DATE = created.format('YYYY-MM-DD');

  // 수정버튼 클릭 이벤트
  const handleEdit = () => {
    setIsEdit((prev) => !prev);
    console.log('수정버튼');
    if (isEdit) {
      dispatch(
        editComment({
          content: inputValue,
          diaryId: id,
          commentId: item.id,
        })
      );
      original = inputValue;
    }
  };

  //삼항연산자를 활용해서 isEdit === true일때 false일때 버튼,input의 역할지정
  return (
    <>
      <S.CommentItem>
        {/* 댓글 랜덤으로 불러오는 위치 */}
        <S.Wrapper>
          <S.RandomCom>
            <span style={{ width: '20%' }}>{item.User.nick_name}</span>
            <span>{DATE}</span>
            {item.myComment === 'Y' && (
              <S.Buttons>
                <button onClick={handleEdit}>{isEdit ? '저장' : '수정'}</button>
                <button onClick={onDeleteCom}>
                  {isEdit ? '취소' : '삭제'}
                </button>
              </S.Buttons>
            )}
          </S.RandomCom>
          <S.RandomCom>
            <img
              src={item.User.profile_img}
              alt='profile'
              style={{
                width: '100px',
                heigh: '100px',
                borderRadius: '50%',
              }}></img>
            {isEdit ? (
              <textarea
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                style={{ width: '100%' }}>
                {item.content}
              </textarea>
            ) : (
              <span style={{ width: '80%' }}>{inputValue}</span>
            )}
          </S.RandomCom>
        </S.Wrapper>
      </S.CommentItem>
    </>
  );
}

export default CommentList;

const CommentItem = styled.div`
  width: 100%;
  /* height: 70px; */
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  border-bottom: 1px solid gray;
  margin: 10px 0 50px 0;
  ${flexAlignCenter}
  ${flexCenter}
`;

const RandomCom = styled.div`
  padding: 10px 30px;
  width: 100%;
  ${flexCenter}
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 100%;
  ${flexCenter}
  flex-direction: column;
`;

const Buttons = styled.div`
  width: 15%;
  ${flexCenter}
  justify-content: space-between;
  right: 0;
  & button {
    padding: 3px 15px;
  }
`;

const S = {
  CommentItem,
  RandomCom,
  Wrapper,
  Buttons,
};
