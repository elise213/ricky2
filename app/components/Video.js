import React from "react";
import styles from '../styles/video.css';
import Image from 'next/image';

const Video = () => {
    return (
        <div className="w-100 h-25">
            <Image width={500} height={530} className="home-logo" src={"/img/NEWRELEASE.png"} alt=""></Image>
            <video autoPlay loop muted className="video">
                <source src="videos/smoke.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>


        </div>
    );
};

export default Video;
