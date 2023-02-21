import { useEffect, useState } from "react";
import styled from "styled-components";
import { flexCenter, flexAlignCenter } from "../../../styles/common";
import moment from "moment";
import dayjs from "dayjs";



function CommentList({ item, comList, setCommentList }) {
  /* item은 Home > mockpost를 Card > navigate 전달한걸 Detail index에서 state로 받음 > 
   받은 state 중 Comments만 CommentInput으로 넘김 > CommentInput에서 comList의 초기값으로 설정 >
   새 댓글 저장 버튼 입력시 입력 내용 추가한 comList로 바꾸고 > CommentBoard로 comList랑 setCommentList보내고 >
   Board에서 map 돌리는 인덱스를 item으로 넘김 */
  // 즉 item은 새 댓글 업데이트 된 댓글 배열
  // https://jsikim1.tistory.com/196 dayjs 글

  //댓글삭제
  const onDeleteCom = () => {
    const newComList = comList.filter((com) => {
      return com !== item;
    });
    setCommentList(newComList);
  };

  // 삭제버튼을 누르면 일치하는 저장된 값을 비운다.
  // comList에 값을 하나씩 꺼내서 비교하고 일치하는 값을 잘라준다.
  // 새로운 배열도 넣어줬고..
  // 삭제 버튼을 클릭했을 때, onDeleteCom을 실행

  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(item.content);
  const [original, setOriginal] = useState(item.content);



  // 날짜 파싱

  const myDate = moment(item.createdAt);
  //const myDate = String(diary.createdAt).split(' ').splice(0, 4).join(' ');

  const today = moment("2023-01-31 23:59:59", "YYYY-MM-DD hh:mm:ss");
  //today에는 오늘 날짜가 moment 객체로 저장

  const diff = today.diff(myDate, "days");
  //diff에는 오늘 날짜와 myDate의 차이가 일 단위로 저장됩니다.

  /*
    moment() : 날짜를 비교하고 원하는 포맷으로 변환할 수 있음.
    diff에는 오늘 날짜와 myDate의 차이가 일 단위로 저장됩니다.
*/
  let dateString;

  // diff===0 만 있으면 시간 차이가 얼마 안날때 23시55분이나 00시15분때도 같은 날로 인식. day()로 요일정보까지 비교후 같은지 확인.
  // console.log("===================> " + myDate);
  if (diff === 0 && myDate.day() === today.day()) {
    dateString = "3시간 전";
  } else if (diff > 2) {
    dateString = myDate.format("YYYY-MM-DD");
  } else if (diff > 0) {
    // console.log(diff);
    dateString = `${diff}일 전`;
  } else {
    dateString = myDate.format("YYYY-MM-DD");
  }

  // 수정버튼 클릭 이벤트
  const handleEdit = () => {
    setIsEdit((prev) => !prev);
    // if(!isEdit) {
    //   if(item.content === inputValue) return;
    // }
  };
 

  //삼항연산자를 활용해서 isEdit === true일때 false일때 버튼,input의 역할지정
  return (
    <>
      <S.CommentItem>
          {/* 댓글 랜덤으로 불러오는 위치 */}
          <S.Wrapper>
            <S.RandomCom>
              <span style={{ width: "20%" }}>{item.User.nick_name}</span>
              <span>{dateString}</span>
              {item.myComment === 'Y' && 
              <S.Buttons>
                <button onClick={handleEdit}>{isEdit ? "저장" : '수정'}</button>
                <button onClick={onDeleteCom}>{isEdit ? "취소" : '삭제'}</button>
              </S.Buttons>}
            </S.RandomCom>
            <S.RandomCom>
              <img
                src={item.User.profile_img}
                alt="profile"
                style={{ width: "100px", heigh: "100px", borderRadius: "50%" }}
              ></img>
              {isEdit ? <textarea
            // value={inputValue.value}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            style={{ width: "100%"}}>
          {inputValue}</textarea> : <span style={{ width: "80%" }}>{inputValue}</span>}
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
