import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { motion } from "framer-motion";

const slide = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      delay: 1,
    },
  },
};

function Navigation() {
  return (
    <Nav as={motion.nav} variants={slide} initial="hidden" animate="visible">
      <a href="#info">
        <Button>info</Button>
      </a>
      <a href="#projects">
        <Button>projects</Button>
      </a>
      <a href="#courses">
        <Button>courses</Button>
      </a>
    </Nav>
  );
}

const Nav = styled.nav`
  height: auto;
  position: fixed;
  overflow: hidden;
  top: 200px;
  transform: rotate(90deg);
  right: -140px;
  width: auto;
`;

export default Navigation;
