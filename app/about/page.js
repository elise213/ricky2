import React from "react";
import Link from "next/link";
import styles from "../screenings/screenings.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="screenings-container">
      <Image
        height={600}
        width={600}
        className="screenings-image"
        src={"/img/sample7.png"}
        alt=""
      ></Image>
      <div className="about">
        <span className="">
          CCEA hosts screenings and hands-on workshops in Austin Texas and
          throughout the World. We have a variety of ways to support filmmakers
          including fiscal sponsorship, in-house legal consulting, support for
          analog film workflows, workshops, and more. We champion creativity
          over commercialism, and genuine excitement over hype. In doing so, we
          aim to facilitate unique cinematic experiences that enrich our psyches
          and communities.
        </span>
      </div>
    </div>
  );
};

export default About;
