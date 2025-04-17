import React from "react";

function VideoPlayer({ videoSrc }) {
  return (
    <>
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: "32%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          width: "15%",
          zIndex: 10,
          borderRadius: "12px",
          boxShadow: "0 0 10px black",
        }}
      />
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: "32%",
          right: "25%",
          transform: "translate(50%, -50%)",
          width: "15%",
          zIndex: 10,
          borderRadius: "12px",
          boxShadow: "0 0 10px black",
        }}
      />
    </>
  );
}

export default VideoPlayer;
