import React from "react";
import Header from "../Header";
import styled from "styled-components";
import "./projects.scss";
import ProjectsList from "./ProjectsList";
import { motion } from "framer-motion";

const child = {
  hidden: {
    rotateX: 90,
  },
  visible: {
    rotateX: 0,

    transition: {
      duration: 2,
    },
  },
};

function Projects() {
  return (
    <FlexCol>
      <motion.div variants={child} initial="hidden" whileInView="visible">
        <Header $size="lg" $variant="secondary">
          PROJECTS{" "}
        </Header>
      </motion.div>
      <ProjectsList />
    </FlexCol>
  );
}

const FlexCol = styled.div`
  margin-top: 50px;
  padding: 10px;
  @media (min-width: 1200px) {
    margin-top: 20%;
    padding: 20px;
  }
`;

export default Projects;
