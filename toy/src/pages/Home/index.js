import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST } from 'store/post';
import styled from 'styled-components';
import { MockPost } from '__mocks__/post';
import DiaryList from './components/DiaryList/DiaryList';
import Today from './components/TodayDate/TodayDate';

function HomePage() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [ref, inView] = useInView();

  const fetchNextPage = () => {
    setTimeout(() => {
      const newMock = MockPost(6);
      dispatch(ADD_POST(newMock));
    }, 800);
  };

  useEffect(() => {
    if (!inView) {
      return;
    }
    fetchNextPage();
  }, [inView]);

  /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/

  return (
    <>
      <S.TodayDate>
        오늘의 날짜 : <Today />
      </S.TodayDate>
      <S.Title>공개 일기를 보여드려요</S.Title>
      <div>
        <DiaryList posts={posts} />
        <div ref={ref}></div>
      </div>
    </>
  );
}

export default HomePage;

const Title = styled.div`
  text-align: center;
  color: orange;
  font-size: 25px;
  font-weight: bold;
  margin: 30px 0;
`;

const TodayDate = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 30px 0;
`;

const S = {
  Title,
  TodayDate,
};
