import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  // Memanggil useWindowSize sebagai fungsi
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
};

export default ConfettiComponent;
