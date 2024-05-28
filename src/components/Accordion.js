import { useState } from "react";
import styled from "styled-components";
import { Minus } from "../Icons/Minus";
import { Plus } from "../Icons/Plus";
const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
  margin: 0.5rem 0;
`;
const Title = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  text-transform: uppercase;
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => (props) => props.theme.body};
`;
const Reveal = styled.div`
  display: ${(props) => (props.clicked ? "block" : "none")};
  margin-top: 1rem;
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 400;
  line-height: 1.1rem;
`;
const Name = styled.div`
  display: flex;
  align-items: center;
`;
const Indicator = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
    height: auto;
    fill: ${(props) => props.theme.carouselColor};
  }
`;
const Accordion = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)}>
        <Name>
          <span>{title}</span>
        </Name>
        {collapse ? (
          <Indicator>
            <Minus />
          </Indicator>
        ) : (
          <Indicator>
            <Plus />
          </Indicator>
        )}
      </Title>
      <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;
