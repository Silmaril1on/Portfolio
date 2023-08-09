import React from "react";
import "./projects.scss";
import { Anchor } from "../GlobalStyles";
import first from "../../Assets/firstWork-min.jpg";
import second from "../../Assets/secondWork-min.jpg";
import third from "../../Assets/thirdWork-min.jpg";
import fourth from "../../Assets/fourthWork-min.jpg";
import { motion } from "framer-motion";
import { BiLogoGithub, BiLogoNetlify } from "react-icons/bi";
import Header from "../Header";

const parentVariant = {
  hidden: {
    x: -100,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const childVariant = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      delay: 1.5,
    },
  },
};

const myWork = [
  {
    image: first,
    name: "lord of the rings",
    link: "https://github.com/Silmaril1on/myFirstProject",
    link2: "https://first-practice-webpage.netlify.app/",
  },
  {
    image: second,
    name: "Gaming Practice",
    link: "https://github.com/Silmaril1on/Game-Rate-Webpage",
    link2: "https://game-rate-webpage.netlify.app/",
  },
  {
    image: third,
    name: "Dota 2 Webpage",
    link: "https://github.com/Silmaril1on/myFirstProject",
    link2: "https://first-practice-webpage.netlify.app/",
  },
  {
    image: fourth,
    name: "About Myself",
    link: "https://github.com/Silmaril1on/mySelft-Project",
    link2: "https://graphs-myself-project.netlify.app/",
  },
];

const netlify = {
  color: "#28bfbd",
};
const github = {
  color: "#ccc",
};

function ProjectsList() {
  return (
    <main className="project-list">
      {myWork.map((item, index) => {
        return (
          <motion.div
            variants={parentVariant}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false }}
            className="project-card"
            key={index}
          >
            <div className="card-image-div">
              <img src={item.image} alt="project" />
            </div>

            <motion.div variants={childVariant} className="project-content">
              <Header $size="sm">{item.name}</Header>
              <Anchor href={item.link} target="_blank">
                <BiLogoGithub style={github} /> view code on GITHUB
              </Anchor>
              <Anchor href={item.link2} target="_blank">
                <BiLogoNetlify style={netlify} />
                view site on NETLIFY
              </Anchor>
            </motion.div>
          </motion.div>
        );
      })}
    </main>
  );
}

export default ProjectsList;
