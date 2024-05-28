import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/Renft/bighead-1.svg";
import img2 from "../assets/Renft/bighead-2.svg";
import img3 from "../assets/Renft/bighead-3.svg";
import img4 from "../assets/Renft/bighead-4.svg";
import img5 from "../assets/Renft/bighead-5.svg";
import img6 from "../assets/Renft/bighead-6.svg";
import img7 from "../assets/Renft/bighead-7.svg";
import img8 from "../assets/Renft/bighead-8.svg";
import img9 from "../assets/Renft/bighead-9.svg";
import img10 from "../assets/Renft/bighead-10.svg";
import Arrow from "../assets/Arrow.svg";
const Container = styled.div`
  width: 25vw;
  height: 70vh;
  @media (max-width: 340px) {
    min-height: 45vh;
    width: 40vw;
  }
  @media (max-width: 640px) {
    min-height: 40vh;
    min-width: 60vw;
  }
  @media (max-width: 768px) {
    height: 40vh;
    width: 35vw;
  }
  @media (max-width: 884px) {
    height: 40vh;
    width: 36vw;
  }
  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .swiper-slide {
    background-color: ${(props) => props.theme.body};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    top: 56%;
    width: 4rem;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    cursor: pointer;
    &:after {
      display: none;
    }
    @media (max-width: 640px) {
      width: 3.2rem;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: 0;
    width: 4rem;
    top: 56%;
    cursor: pointer;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    &:after {
      display: none;
    }
    @media (max-width: 640px) {
      width: 3.2rem;
    }
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={true}
        scrollbar={{
          draggable: true,
        }}
        pagination={{ type: "fraction" }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="Nft-card-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Nft-card-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Nft-card-3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Nft-card-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Nft-card-5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="Nft-card-6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="Nft-card-7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="Nft-card-8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="Nft-card-9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="Nft-card-10" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
