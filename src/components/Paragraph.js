import React from "react";
import styled from "styled-components";

function Paragraph({ children, $color }) {
  return <Text $color={$color}>{children}</Text>;
}

const Text = styled.p`
  color: ${({ $color }) =>
    $color === "primary"
      ? "#ccc"
      : $color === "secondary"
      ? "rgba(78, 134, 197, 1.74)"
      : "white"};
  font-size: 0.8rem;
  font-family: semplicitapro;
  letter-spacing: 1px;
  width: 300px;
  @media (min-width: 1000px) {
    font: normal 1.2rem semplicitapro;
    padding: 5px;
    width: 600px;
  }
`;

export default Paragraph;
