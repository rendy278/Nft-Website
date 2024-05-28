import styled from "styled-components";
import DrawSvg from "../DrawSvg";
import gsap from "gsap";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section = styled.section`
  min-height: 100vh;
  overflow-x: hidden;
  min-width: 100vw;
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
  margin: 1rem auto;
  position: relative;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 640px) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  @media (max-width: 640px) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;

const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 640px) {
    font-size: ${(props) => props.theme.font};
    font-weight: 600;
  }
`;

const Container = styled.div`
  width: 75%;
  height: 200vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    width: 95%;
    height: 150vh;
  }
  @media (max-width: 884px) {
    width: 98%;
    height: 150vh;
  }
  @media (max-width: 640px) {
    width: 90%;
    height: 200vh;
  }
  @media (max-width: 340px) {
    width: 95%;
    height: 250vh;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    text-align: right;
    li {
      border-radius: 50px 0 50px 0;
    }
    div {
      border-radius: 40px 0 40px 0;
    }
    @media (max-width: 640px) {
      justify-content: center;
      text-align: left;
      div {
        border-radius: 0 50px 0 50px;
      }
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;
    text-align: left;

    li {
      border-radius: 0 50px 0 50px;
    }
    div {
      border-radius: 40px 0 40px 0;
    }
    @media (max-width: 640px) {
      justify-content: center;
      text-align: left;
      div {
        border-radius: 0 50px 0 50px;
      }
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 640px) {
    justify-content: flex-end !important;
  }
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};

  @media (max-width: 640px) {
    width: 75%;
  }
`;

const Box = styled.div`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        { y: "0" },
        {
          y: "-30%",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // Uncomment the next line for debugging purposes
            // markers: true,
          },
        }
      );
    });
  }, []);

  const RoadMapItem = ({ title, subtitle }) => {
    return (
      <Item ref={addToRefs}>
        <ItemContainer>
          <Box>
            <SubTitle>{title}</SubTitle>
            <Text>{subtitle}</Text>
          </Box>
        </ItemContainer>
      </Item>
    );
  };

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            title="Grand Opening"
            subtitle="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            title="Great Benefits"
            subtitle="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            title="Early Access"
            subtitle="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            title="New Merch"
            subtitle="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            title="Holders Ranking"
            subtitle="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
