import React from "react";
import '../styles/video.css';
import Image from 'next/image';

const Video = () => {
    return (
        <div className="video-container">
            <div style={{ position: "relative", width: "100%", height: "540px" }}>
                <Image
                    layout="fill"
                    className="home-logo"
                    objectFit="fill"
                    src={"/img/NEWRELEASE3.png"}
                    alt=""
                />
                <iframe
                    className="iframe-video"
                    width={500}
                    height={530}
                    src="https://www.youtube.com/embed/CTw1VFeYnHM?autoplay=1&loop=1&mute=1&controls=0&playlist=CTw1VFeYnHM&showinfo=0&rel=0&enablejsapi=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Video;
