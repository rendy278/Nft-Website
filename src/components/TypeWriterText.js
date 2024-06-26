import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  align-self: flex;
  @media (max-width: 350px) {
    font-size: ${(props) => props.theme.fontsm};
    width: 100%;
  }
  @media (max-width: 640px) {
    font-size: ${(props) => props.theme.fontmd};
    text-align: center;
    width: 80%;
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontxl};
  }

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivagala", cursive;
    @media (max-width: 640px) {
      font-size: ${(props) => props.theme.fontsm};
      text-align: center;
    }
  }
  .text-1 {
    color: #5ab2ff;
  }
  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;
  @media (max-width: 640px) {
    width: 100%;
    text-align: center;
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
const TypeWriterText = () => {
  return (
    <>
      <Title>
        Discover a new era off cool
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-1">NFTs.</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-2">Collectible Items</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-3">Ape Killers</span>')
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>Bored Of Apes? Try Something New.</SubTitle>
      <ButtonContainer>
        <Button text="Explore" link="#about" />
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
