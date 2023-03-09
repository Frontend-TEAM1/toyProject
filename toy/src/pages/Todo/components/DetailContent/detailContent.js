import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DetailContent({ post }) {
  return (
    <S.Wrapper>
      <S.SwiperWrapper>
        <Swiper
          slidesPerView={1.1}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {post.Post_img.map((src) => {
            return (
              <SwiperSlide>
                <img src={src} alt="" width={250} height={200} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </S.SwiperWrapper>
      <S.Content>{post.content}</S.Content>
      <S.ContentFooter1>
        친구들과 주변 선생님들에게 &lt;오늘의 일기&gt;를 소개해 주세요!
        <br />
        이용자가 많아질수록 일기 주제가 풍부해집니다!
      </S.ContentFooter1>
      <S.ContentFooter2>
        <div>#1 자유주제</div>
        <div>이 주제로 일기쓰기</div>
        <div>
          <FontAwesomeIcon icon={faBriefcase} />
        </div>
        <div>신고하기</div>
      </S.ContentFooter2>
    </S.Wrapper>
  );
}

export default DetailContent;

const Wrapper = styled.div`
  width: 90%;
  margin: 50px auto;
  & > div {
    overflow: hidden;
  }
`;

const SwiperWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  border: 1px solid black;
  padding: 5px;
  border-radius: 25px;
`;

const Content = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 50px;
  line-height: 50px;
`;

const ContentFooter1 = styled.div`
  margin-top: 100px;
  background-color: #f9d72f;
  text-align: center;
  padding: 50px;
  line-height: 30px;
  border-radius: 25px;
`;

const ContentFooter2 = styled.div`
  text-align: right;
  margin: 50px 0;
  font-weight: bold;
  & > * {
    margin: 15px 0;
  }
`;

export const S = {
  Wrapper,
  SwiperWrapper,
  Content,
  ContentFooter1,
  ContentFooter2,
};
