import React, { useState } from "react";
import styled from "styled-components";
import { Anchor } from "./GlobalStyles";
import { motion } from "framer-motion";
import "./global.scss";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

const slide = {
  hidden: {
    y: 200,
  },
  visible: {
    y: 0,
    transition: {
      duration: 1.5,
      delay: 1,
    },
  },
};

const style = {
  color: "#ccc",
};

const socialData = [
  {
    name: "facebook",
    image: <FaFacebookF />,
    link: "https://www.facebook.com/graphchiqovani/",
  },
  {
    name: "linkedin",
    image: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/levani-chiqovani-b4a81aa0/",
  },
  {
    name: "Github",
    image: <FaGithub />,
    link: "https://github.com/Silmaril1on",
  },
  {
    name: "instagram",
    image: <FaInstagram />,
    link: "https://www.instagram.com/silmarill1on/",
  },
  {
    name: "youtube",
    image: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCKvPITtyom3LwQXuMV5xw-A/featured",
  },
];

function Socials() {
  const [hide, setHide] = useState(true);

  const handleClick = () => {
    setHide(!hide);
  };

  return (
    <section className={hide ? "fixed-icons" : "hide-icons"}>
      <Button onClick={handleClick}>
        {hide ? <FaAngleLeft style={style} /> : <FaAngleRight style={style} />}
      </Button>
      <Flexcont>
        {socialData.map((icon, index) => {
          return (
            <Flex
              as={motion.section}
              variants={slide}
              initial="hidden"
              animate="visible"
              key={index}
            >
              <Anchor href={icon.link} target="_blank">
                <span>{icon.image}</span>
              </Anchor>
            </Flex>
          );
        })}
      </Flexcont>
    </section>
  );
}

const Button = styled.button`
  background-color: rgba(128, 128, 128, 0.2);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  cursor: pointer;
  height: 50px;
  position: absolute;
  right: -15px;
  top: 80px;
  transition: 0.3s;
  width: 15px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Flexcont = styled.div`
  overflow: hidden;
`;

export default Socials;
