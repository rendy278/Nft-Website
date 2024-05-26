import React from "react";
import styled from "styled-components";
import ConfettiComponent from "../Confetti";
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
import img11 from "../../assets/Renft/bighead.svg";
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
`;
const Container = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  backdrop-filter: blur(4px);
  &:hover {
    img {
      transform: translateY(-2rem) scale(1.1);
      transition: all 0.3s ease-in-out;
    }
  }
`;
const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-top: 1rem;
  color: ${(props) => props.theme.text};
`;
const Position = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  margin-top: 1rem;
  font-weight: 600;
  color: ${(props) => `rgba(${props.theme.textRgba},0.8)`};
`;
const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 20px;
`;
const MemberComponent = ({ img, name = "", position = "" }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};
const Team = () => {
  return (
    <Section id="team">
      <ConfettiComponent />
      <br />
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name="Prayoga" position="Founder" />
        <MemberComponent img={img2} name="Owen" position="Co-Founder" />
        <MemberComponent img={img3} name="Felisha" position="Director" />
        <MemberComponent img={img4} name="Speed" position="Artist" />
        <MemberComponent img={img5} name="Jay" position="Manager" />
        <MemberComponent
          img={img6}
          name="Mr Nam"
          position="Social Media Manager"
        />
        <MemberComponent
          img={img7}
          name="Vasco"
          position="Blockchain Specialist"
        />
        <MemberComponent img={img8} name="Yohan" position="Designer" />
        <MemberComponent img={img9} name="Yunxie" position="Graphic Designer" />
        <MemberComponent img={img10} name="Ken" position="Professor" />
        <MemberComponent img={img11} name="Lin" position="Administrator" />
      </Container>
    </Section>
  );
};

export default Team;
