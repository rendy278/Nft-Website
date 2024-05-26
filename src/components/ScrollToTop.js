import React, { useLayoutEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import styled from "styled-components";

const Up = styled.div`
  box-sizing: border-box;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};

  &:hover {
    transform: scale(1.1);
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { y } = useWindowScroll();

  useLayoutEffect(() => {
    if (y > 150) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [y]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Up onClick={handleScrollToTop} visible={visible}>
      &#x2191;
    </Up>
  );
};

export default ScrollToTop;
