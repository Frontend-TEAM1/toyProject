import React from "react";
import CommentList from "./CommentList";

// let arr = [1, 2, 3];

function CommentBoard({comList}) {
  console.log("CommentBoard", comList);
//   let array = comList;
//   console.log(array)
//   props.comList.map((item) => {
//     return console.log(item);
//   })
// arr.map((item) => console.log(item));
return (
    <div>
      <h3>댓글리스트</h3>
      {comList && comList.map((item) => {
        return <CommentList item={item}/>
      })}
    </div>
  );
}

export default CommentBoard;