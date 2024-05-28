import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Banner from "./Banner";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import LinkInd from "../Icons/LinkedIn";
const Footers = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 75%;
  margin: 1rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};
  @media (max-width: 884px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
  & > * {
    padding-right: 0.5rem;
    transform: all 0.2 ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 884px) {
    margin: 1em 0;
  }
  @media (max-width: 768px) {
    margin: 1em 0;
  }
`;
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  place-items: center;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;
const Bottom = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 640px) {
    margin: 0 auto;
    margin-bottom: 1rem;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 1rem;
  }
  a {
    text-decoration: underline;
    font-weight: 600;
  }
`;
const Footer = () => {
  return (
    <Footers>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="#" target="_blank" rel="noopener">
              <Facebook />
            </a>
            <a href="#" target="_blank" rel="noopener">
              <Instagram />
            </a>
            <a href="#" target="_blank" rel="noopener">
              <Twitter />
            </a>
            <a href="#" target="_blank" rel="noopener">
              <LinkInd />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Roadmap</Item>
          <Item>Showcase</Item>
          <Item>Team</Item>
          <Item>Faq</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Renft Club. All Rights Reserved.
        </span>
        <span>
          Made with &#10084; by{" "}
          <a href="https://rendev-ten.vercel.app/">Rendev</a>
        </span>
      </Bottom>
    </Footers>
  );
};

export default Footer;
