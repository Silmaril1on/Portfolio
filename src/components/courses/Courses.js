import React from "react";
import "./courses.scss";
import CoursesList from "./CoursesList";
import Header from "../Header";
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

function Courses() {
  return (
    <div id="courses" className="courses-main-container">
      <motion.div variants={child} initial="hidden" whileInView="visible">
        <Header $variant="secondary" $size="md">
          COURSES
        </Header>
      </motion.div>
      <CoursesList />
    </div>
  );
}

export default Courses;
