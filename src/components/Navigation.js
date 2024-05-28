import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Headroom from "react-headroom";
import Logo from "./Logo";

const Section = styled.section`
  width: 100%;
  background-color: transparent;
  overflow-x: hidden;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  &.scrolled {
    background-color: ${(props) => props.theme.body};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  list-style: none;
  @media (max-width: 1024px) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    z-index: 50;
    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(100%)"};
    transition: all 0.3s ease;
  }
`;

const MenuItem = styled.li`
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-weight: 600;
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

const HamburgerMenu = styled.span`
  width: 1.5rem;
  height: 2px;
  background: ${(props) => props.theme.text};
  cursor: pointer;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};
  transition: all 0.3s ease;
  display: none;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
  }

  &::after,
  &::before {
    content: "";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-1px" : "0")};
    background: ${(props) => props.theme.text};
    position: absolute;
  }
  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;

const scrollToId = (id, setClick) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = 0;
    const yPosition =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });
    setClick(false);
  }
};

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Headroom style={{ zIndex: 100000 }}>
      <Section className={scrolled ? "scrolled" : ""}>
        <Navbar>
          <Logo />
          <Menu click={click}>
            <MenuItem onClick={() => scrollToId("home", setClick)}>
              Home
            </MenuItem>
            <MenuItem onClick={() => scrollToId("about", setClick)}>
              About
            </MenuItem>
            <MenuItem onClick={() => scrollToId("roadmap", setClick)}>
              Roadmap
            </MenuItem>
            <MenuItem onClick={() => scrollToId("showcase", setClick)}>
              Showcase
            </MenuItem>
            <MenuItem onClick={() => scrollToId("team", setClick)}>
              Team
            </MenuItem>
            <MenuItem onClick={() => scrollToId("faq", setClick)}>Faq</MenuItem>
          </Menu>
          <HamburgerMenu click={click} onClick={() => setClick(!click)}>
            &nbsp;
          </HamburgerMenu>
        </Navbar>
      </Section>
    </Headroom>
  );
};

export default Navigation;
