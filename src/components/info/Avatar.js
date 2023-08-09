import React from "react";
import avatar from "../../Assets/qq.png";
import { motion } from "framer-motion";
import {
  BiLogoReact,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoGithub,
} from "react-icons/bi";

const parent = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const image = {
  hidden: {},
  visible: {
    scale: [0.9, 1, 0.9],
    transition: {
      repeat: Infinity,
      duration: 10,
    },
  },
};

const first = {
  hidden: {},
  visible: {
    x: [0, 20, 0, 20, 15, 0],
    y: [4, 24, 5, 23, 15, 4],
    rotate: 360,
    transition: {
      duration: 5,
      repeat: Infinity,
      delay: 2,
    },
  },
};
const second = {
  hidden: {},
  visible: {
    rotate: 360,
    x: [2, 15, 3, 11, 24, 2],
    y: [3, 16, 4, 19, 7, 3],
    transition: {
      duration: 7,
      repeat: Infinity,
      delay: 3,
    },
  },
};
const third = {
  hidden: {},
  visible: {
    rotate: 360,
    x: [5, 2, 7, 9, 13, 5],
    y: [1, 5, 9, 3, 7, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      delay: 1.5,
    },
  },
};
const fourth = {
  hidden: {},
  visible: {
    rotate: 360,
    x: [3, 9, 5, 7, 11, 3],
    y: [8, 3, 7, 5, 11, 8],
    transition: {
      duration: 5,
      repeat: Infinity,
      delay: 3.5,
    },
  },
};
const fifth = {
  hidden: {},
  visible: {
    rotate: 360,
    x: [3, 9, 5, 7, 11, 3],
    y: [8, 3, 7, 5, 11, 8],
    transition: {
      duration: 5,
      repeat: Infinity,
      delay: 3.5,
    },
  },
};

const text = "<h1>\nhello world\n</h1>";

function Avatar() {
  return (
    <motion.div
      className="image-section"
      variants={parent}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="image-div" variants={image}>
        <img src={avatar} alt="image" />
      </motion.div>
      <div className="animated-icons">
        <motion.div variants={first}>
          <BiLogoReact />
        </motion.div>
        <motion.div variants={second}>
          <BiLogoCss3 />
        </motion.div>
        <motion.div variants={third}>
          <BiLogoJavascript />
        </motion.div>
        <motion.div variants={fourth}>
          <BiLogoHtml5 />
        </motion.div>
        <motion.div variants={fifth}>
          <BiLogoGithub />
        </motion.div>
        <motion.h1 variants={parent}>{text}</motion.h1>
      </div>
    </motion.div>
  );
}

export default Avatar;
