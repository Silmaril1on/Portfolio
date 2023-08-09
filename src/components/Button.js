import React from "react";
import styled from "styled-components";

function Button({ children }) {
  return <MainButton>{children}</MainButton>;
}

const MainButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font: bold 1rem semplicitapro;
  height: auto;
  letter-spacing: 2px;
  margin: 0 15px;
  position: relative;
  text-transform: uppercase;
  transition: 0.3s ease-out;

  &::before {
    border-right: 2px solid #ccc;
    content: "";
    height: 100%;
    position: absolute;
    top: -25px;
    transition: 0.3s;
    right: -5px;
    width: 100%;
  }

  &:hover::before {
    border-right: 2px solid #ccc;
    top: 0;
  }

  &:hover {
    color: white;
  }
`;

export default Button;
