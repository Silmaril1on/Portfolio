import React from "react";
import styled from "styled-components";
import backgroundVideo from "../Assets/smoke.mp4";

function Video() {
  return (
    <VideoContainer>
      <VideoDiv muted autoPlay={true} loop>
        <source src={backgroundVideo} type="video/mp4" />
      </VideoDiv>
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  border: 1px solid white;
  height: 1500px;
  object-fit: cover;
  position: fixed;
  width: 100%;
`;

const VideoDiv = styled.video`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export default Video;
