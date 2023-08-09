import React from "react";
import styled from "styled-components";
import { GiWorld } from "react-icons/gi";
import { motion } from "framer-motion";

const style = {
  margin: 5,
  color: "#ddd",
};

const slide = {
  hidden: {
    x: -200,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

function Time() {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Wrapper
      as={motion.div}
      variants={slide}
      initial="hidden"
      animate="visible"
    >
      <GiWorld style={style} />
      <span>{time}</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  color: #ddd;
  flex-direction: row;
  font: bold 0.8rem semplicitapro;
  justify-content: space-between;
  left: 0;
  position: fixed;
  padding: 0 15px;
  top: 5px;
  width: 115px;
`;

export default Time;
