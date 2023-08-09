import React from "react";
import "./App.css";
import { FlexColumn, Dark } from "./components/GlobalStyles";
import Video from "./components/Video";
import Navigation from "./components/Navigation";
import Socials from "./components/Socials";
import Time from "../src/components/Time";
import Info from "./components/info/Info";
import Projects from "./components/projects/Projects";
import Courses from "./components/courses/Courses";

function App() {
  return (
    <FlexColumn>
      <Video />
      <Dark>
        <Info />
        <Projects />
        <Courses />
        <Time />
        <Navigation />
        <Socials />
      </Dark>
    </FlexColumn>
  );
}

export default App;
