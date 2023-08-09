import React from "react";
import styled from "styled-components";

function Header({ children, $variant, $size, $align }) {
  return (
    <Title $variant={$variant} $align={$align} $size={$size}>
      {children}
    </Title>
  );
}

const Title = styled.h1`
  color: ${({ $variant }) =>
    $variant === "primary"
      ? "#ccc"
      : $variant === "secondary"
      ? "rgba(78, 134, 197, 1.74)"
      : "white"};
  font-family: semplicitapro;
  font-size: ${({ $size }) =>
    $size === "xl"
      ? "4.5rem"
      : $size === "lg"
      ? "3rem"
      : $size === "md"
      ? "2.5rem"
      : $size === "sm"
      ? "1rem"
      : "0.8rem"};
  letter-spacing: 2px;
  text-transform: capitalize;
  text-align: ${({ $align }) =>
    $align === "center" ? "center" : $align === "right" ? "right" : "left"};
  @media (min-width: 1000px) {
    font-size: ${({ $size }) =>
      $size === "xl"
        ? "6rem"
        : $size === "lg"
        ? "4.5rem"
        : $size === "md"
        ? "3.5rem"
        : $size === "sm"
        ? "1rem"
        : ".8rem"};
  }
`;

export default Header;
