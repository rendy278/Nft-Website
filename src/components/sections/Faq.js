import styled from "styled-components";
import Accordion from "../Accordion";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  @media (max-width: 640px) {
    font-size: ${(props) => props.theme.fontxl};
    margin: 1rem auto;
  }
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;
`;

const Box = styled.div`
  width: 45%;
  @media (max-width: 640px) {
    width: 90%;
  }
`;

const Faq = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: "#faq",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <Section id="faq">
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
          <Accordion title="WHAT IS THE METAVERSE?">
            A metaverse is a network of 3D virtual worlds focused on social
            connection. In futurism and science fiction, it is often described
            as a hypothetical iteration of the Internet as a single, universal
            virtual world that is facilitated by the use of virtual and
            augmented reality headsets.
          </Accordion>
          <Accordion title="WHY DO WE NEED ROYALTIES?">
            The amount of royalties was fixed at 5% to finance the Weirdos
            Club's projects. We have the ambition to organize multiple events
            around the world in order to strengthen the community and build a
            network of entrepreneurs and investors with the same mindset and
            common interests.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="HOW CAN I USE MY NFT?">
            You will be able to use your NFT as an avatar in the Metaverse and
            our future video game. Holding also means that you are part of an
            exclusive network of investors and entrepreneurs.
          </Accordion>
          <Accordion title="WHAT ARE THE WEIRDOS?">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            deserunt consequatur quisquam maxime molestias dolores ipsum,
            exercitationem vel sint quidem aliquam modi quis impedit corporis
            unde inventore fugiat provident in.
          </Accordion>
          <Accordion title="WHAT IS THE FUSION PROCESS?">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            deserunt consequatur quisquam maxime molestias dolores ipsum,
            exercitationem vel sint quidem aliquam modi quis impedit corporis
            unde inventore fugiat provident in.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
