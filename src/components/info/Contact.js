import React from "react";
import "./info.scss";
import { HiOutlineMail, HiLocationMarker, HiCalendar } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";

const child = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
};

const data = [
  {
    image: <HiCalendar />,
    name: "19.09.1990",
  },
  {
    image: <HiOutlineMail />,
    name: "Graphlev1@gmail.com",
    link: "mailto:graphlev1@gmail.com",
  },
  {
    image: <BiPhoneCall />,
    name: "+995 555 16 56 12",
  },
  {
    image: <HiLocationMarker />,
    name: "1b Kerchi St, T'bilisi / 0107",
    link: "https://www.google.com/maps/place/1b+Kerchi+St,+T'bilisi/@41.788662,44.8019685,18.21z/data=!4m6!3m5!1s0x40446db556cfffff:0x632535354b753838!8m2!3d41.7899366!4d44.8049825!16s%2Fg%2F11sdnskgsx?entry=ttu",
  },
];

function Contact() {
  return (
    <div className="contact-container">
      {data.map((item, index) => {
        return (
          <motion.div
            variants={child}
            initial="hidden"
            animate="visible"
            className="info-links"
            key={index}
          >
            <span>{item.image}</span>
            <a href={item.link} target="_blank">
              {item.name}
            </a>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Contact;
