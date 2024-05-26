import styled from "styled-components";
const LogoText = styled.h1`
  font-family: "akaya-telivigala", cursive;
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Logo = () => {
  return (
    <LogoText>
      <a href="/">Renft.</a>
    </LogoText>
  );
};

export default Logo;
