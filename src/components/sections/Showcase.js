import styled, { keyframes } from "styled-components";
import ETH from "../../assets/Ethereum.svg";
import img1 from "../../assets/Renft/bighead-1.svg";
import img2 from "../../assets/Renft/bighead-2.svg";
import img3 from "../../assets/Renft/bighead-3.svg";
import img4 from "../../assets/Renft/bighead-4.svg";
import img5 from "../../assets/Renft/bighead-5.svg";
import img6 from "../../assets/Renft/bighead-6.svg";
import img7 from "../../assets/Renft/bighead-7.svg";
import img8 from "../../assets/Renft/bighead-8.svg";
import img9 from "../../assets/Renft/bighead-9.svg";
import img10 from "../../assets/Renft/bighead-10.svg";
import { useRef } from "react";
const Section = styled.section`
  height: 100%;
  min-width: 100vw;
  background-color: ${(props) => props.theme.text};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  & > *:first-child {
    animation-duration: 20s;
  }
  & > *:last-child {
    animation-duration: 15s;
  }
`;

const Move = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 0 auto;
  display: flex;
  animation: ${Move} linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 2rem 1rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 20px;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.body};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  @media (max-width: 768px) {
    width: 9rem;
  }
  @media (max-width: 884px) {
    width: 10rem;
  }
  @media (max-width: 640px) {
    width: 8rem;
  }
  span {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
  }

  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
  }
`;
const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
  }
`;
const NftItem = ({ img, number = 0, price = 0, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };
  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };
  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="The Renft"></img>
      <Details>
        <div>
          <span>Reneft</span>
          <h1>#{number}</h1>
        </div>
        <div>
          <span>Price</span>
          <Price>
            <img src={ETH} alt="ETH-coin" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  );
};
const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} price={3.8} number={1} passRef={Row1Ref}></NftItem>
        <NftItem img={img2} price={4.8} number={2} passRef={Row1Ref}></NftItem>
        <NftItem img={img3} price={2.8} number={3} passRef={Row1Ref}></NftItem>
        <NftItem img={img4} price={8.8} number={4} passRef={Row1Ref}></NftItem>
        <NftItem img={img5} price={4.8} number={5} passRef={Row1Ref}></NftItem>
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img6} price={1.8} number={6} passRef={Row2Ref}></NftItem>
        <NftItem img={img7} price={9.8} number={7} passRef={Row2Ref}></NftItem>
        <NftItem img={img8} price={7.8} number={8} passRef={Row2Ref}></NftItem>
        <NftItem img={img9} price={6.8} number={9} passRef={Row2Ref}></NftItem>
        <NftItem
          img={img10}
          price={5.8}
          number={10}
          passRef={Row2Ref}
        ></NftItem>
      </Row>
    </Section>
  );
};

export default Showcase;
