import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { flexCenter } from '../../styles/common';
import { MockPost } from '../../__mocks__/post';
import Card from './components/Card/Card';

function HomePage() {
  // const Posts = MockPost(20);
  const diaries = useSelector((state) => state.diaryReducer);
  console.log(diaries);

  // let observer = new IntersectionObserver(() => {}, options)
  return (
    <Container>
      {diaries
        .sort((a, b) => {
          return b.createdAt.getTime() - a.createdAt.getTime();
        })
        .map((diary) => {
          return <Card diary={diary} />;
        })}
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  /* margin: 0 100px; */
  padding: 100px;
  /* ${flexCenter} */
  display: flex;
  /* justify-content: space-between; */
  border: 1px solid red;
  flex-wrap: wrap;
  background-color: '#F3F3F3';
`;

/*
(1). 게시글 목록은 페이지네이션 혹은 무한 스크롤링으로 10개씩 랜더링 된다.
(2). 댓글을 작성하면 가장 최상단에 댓글이 추가된다.(
(3). 각 게시글에는 이미지가 있으며 이미지는 2개 이상이면 Carousel 혹은 swipe slider로 보여진다.
(4). 게시글에는 프로필 이미지 및 작성자 정보가 존재한다.
(5). 게시글에는 작성 시간이 있으며 아래와 같이 파싱되어야한다.
    - 만약 당일이라면 3시간 전으로 파싱되어야한다.
    - 당일이 아니라면 3일 전 까지는 1일 전, 2일 전, 3일 전으로 파싱되어야한다.
    - 그 이후는 2023.01.31과 같이 월과 일 단위로 파싱되어야한다.   
(6). 게시글 컨텐츠의 글자 수가 100글자 이상이라면 ...으로 표시하고 더보기 버튼을 누르면 모든 게시물의 정보를 확인한다
(7). 본인이 작성한 댓글,게시글은 본인이 삭제 및 수정할 수 있다
*/
