import React from "react";
import { FlexCol, FlexColRow } from "../GlobalStyles";
import Header from "../Header";
import Paragraph from "../Paragraph";
import Contact from "./Contact";
import { motion } from "framer-motion";
import Avatar from "./Avatar";

const parent = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0,
    },
  },
};
const child = {
  hidden: {
    rotateX: 90,
  },
  visible: {
    rotateX: 0,

    transition: {
      duration: 2,
      delay: 0.5,
    },
  },
};

const childVar = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

function Info() {
  return (
    <FlexColRow
      id="info"
      as={motion.div}
      variants={parent}
      initial="hidden"
      animate="visible"
    >
      <FlexCol>
        <Header $variant="primary" $size="sm">
          GREETINGS, I am
        </Header>
        <motion.div variants={child}>
          <Header $variant="secondary" $size="md">
            LEVAN CHIKOVANI
          </Header>
        </motion.div>
        <motion.div variants={childVar}>
          <Paragraph $color="primary">
            I am a self-tough REACT web-developer. The road goes to programming,
            alongside with UX & Design. I like motion graphics and cool stuff of
            animations. Love the process as much as outcome.
          </Paragraph>
        </motion.div>
        <Contact />
      </FlexCol>
      <FlexCol>
        <Avatar />
      </FlexCol>
    </FlexColRow>
  );
}

export default Info;
