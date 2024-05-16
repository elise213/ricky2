import React, { useRef, useEffect } from "react";
import "../styles/video.css";

const Video2 = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <div
      className="video-container2"
      style={{
        minHeight: "350px",
      }}
    >
      <video autoPlay loop muted playsInline className="video2" ref={videoRef}>
        <source src="/img/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video2;
