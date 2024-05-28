import styled, { ThemeProvider } from "styled-components";
import Carousel from "../Carousel";
import Button from "../Button";
import { dark } from "../../styles/Themes";
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    margin: 1rem auto;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    & > *:last-child {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 884px) {
    width: 95%;
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  @media (max-width: 640px) {
    font-size: ${(props) => props.theme.fontmd};
    text-align: center;
    width: 90%;
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 884px) {
    font-size: ${(props) => props.theme.fontxl};
  }
  margin: 0 auto;
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  font-weight: 400;
  margin: 1rem auto;
  @media (max-width: 640px) {
    font-size: ${(props) => props.theme.fontsm};
    text-align: center;
    width: 90%;
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 884px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
  font-weight: 400;
  margin: 1rem auto;
  @media (max-width: 640px) {
    font-size: ${(props) => props.theme.fontsm};
    text-align: center;
    width: 90%;
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 884px) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const ButtonContainer = styled.div`
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>Welcome To The Weirdos Club.</Title>
          <SubText>
            The WEIRDOS CLUB is a private collection of NFTs—unique digital
            collectibles. The Weirdos are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight>
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button text="JOIN OUR DISCORD" link="#" />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
