import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

function CardContent({ post }) {
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
          {post.Post_img.map((src, index) => {
            return (
              <SwiperSlide>
                <img key={index} src={src} alt="" width={250} height={200} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </S.SwiperWrapper>
      <div>{post.content}</div>
    </S.Wrapper>
  );
}

export default CardContent;

const Wrapper = styled.div`
  margin: 10px 20px;
  & > div {
    overflow: hidden;
  }
`;

const SwiperWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  border: 1px solid black;
  padding: 5px;
`;

export const S = {
  Wrapper,
  SwiperWrapper,
};
