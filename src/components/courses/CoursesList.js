import React from "react";
import "./courses.scss";
import languages from "./coursesData";
import Header from "../Header";
import { motion } from "framer-motion";

const animate = {
  hidden: {
    y: 100,
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function CoursesList() {
  return (
    <div className="courses-lists">
      {languages.map((item, index) => {
        return (
          <motion.div
            variants={animate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="course-wrapper"
            key={index}
          >
            <div className="header-section">
              <Header> {item.name}</Header>
              <span>{item.image}</span>
            </div>
            {item.course.map((course, index) => {
              return (
                <div key={index} className="course-links">
                  <img src={course.logo} alt="course" />
                  <a href={course.link} target="_blank">
                    {course.name}
                  </a>
                </div>
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
}

export default CoursesList;
