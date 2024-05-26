import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Headroom from "react-headroom";
import Logo from "./Logo";
import Button from "./Button";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  z-index: 1000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  &.scrolled {
    background-color: ${(props) => props.theme.navScrolledBackground};
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
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  list-style: none;
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

const scrollToId = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};

const Navigation = () => {
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
    <Headroom>
      <Section className={scrolled ? "scrolled" : ""} id="home">
        <Navbar>
          <Logo />
          <Menu>
            <MenuItem onClick={() => scrollToId("home")}>Home</MenuItem>
            <MenuItem onClick={() => scrollToId("about")}>About</MenuItem>
            <MenuItem onClick={() => scrollToId("roadmap")}>Roadmap</MenuItem>
            <MenuItem onClick={() => scrollToId("showcase")}>Showcase</MenuItem>
            <MenuItem onClick={() => scrollToId("team")}>Team</MenuItem>
            <MenuItem onClick={() => scrollToId("faq")}>Faq</MenuItem>
          </Menu>
          <Button text="Connect to wallet" />
        </Navbar>
      </Section>
    </Headroom>
  );
};

export default Navigation;
