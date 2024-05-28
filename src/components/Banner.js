import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./Button";
import img1 from "../assets/Renft/bighead-1.svg";
import img2 from "../assets/Renft/bighead-2.svg";
import img3 from "../assets/Renft/bighead-3.svg";
import img4 from "../assets/Renft/bighead-4.svg";
import img5 from "../assets/Renft/bighead-5.svg";
import img6 from "../assets/Renft/bighead-6.svg";
import { dark } from "../styles/Themes";
const Section = styled.section`
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  @media (max-width: 640px) {
    height: 30rem;
    flex-direction: column;
    justify-content: center;
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    width: 14rem;
    height: auto;
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  display: flex;
  justify-content: center;
  @media (max-width: 640px) {
    width: 100%;
    font-size: ${(props) => props.theme.fontxl};
    text-align: center;
  }
`;
const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.theme.fontxl};
  @media (max-width: 640px) {
    font-size: ${(props) => props.theme.fontlg};
    width: 50%;
  }
`;
const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={img1} alt="img-nft1" />
        <img src={img2} alt="img-nft2" />
        <img src={img3} alt="img-nft3" />
        <img src={img4} alt="img-nft4" />
        <img src={img5} alt="img-nft5" />
        <img src={img6} alt="img-nft6" />
      </ImgContainer>
      <Title>
        Join The <br /> Renft Club
      </Title>
      <BtnContainer>
        <ThemeProvider theme={dark}>
          <Button text="Join Now" link="#" />
        </ThemeProvider>
      </BtnContainer>
    </Section>
  );
};

export default Banner;
