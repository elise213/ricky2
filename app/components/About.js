import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="ricky-about-div">
        <Image
          className="ricky-img"
          src="/img/IMG_5260.jpg"
          alt="Ricky's Image"
          width={180}
          height={200}
        />
        <p className="ricky-about">
          Ricky has earned degrees from the University of Pennsylvania (BA),
          Duke University (Law), and New York University (MBA). He has been
          actively involved as an operator, lawyer, investor, and advisor to
          early stage tech and media companies. In addition to working with
          Karim Amer ’01 on the recently released HBO documentary series, The
          Vow, they worked together on a Virtual Reality project titled
          Persuasion Machines, featuring will.i.am, which premiered at the
          Sundance Film Festival.
        </p>
      </div>
      <div className="projects">
        <Image
          className="project"
          src="/img/vow1.png"
          width={180}
          height={250}
        />
        <Image
          className="project"
          src="/img/vow2.png"
          width={180}
          height={250}
        />
        <Image
          className="project"
          src="/img/flightrisk.png"
          width={180}
          height={250}
        />
        <Image
          className="project"
          src="/img/Defiant.png"
          width={180}
          height={250}
        />
        <Image className="project" src="/img/LP.png" width={180} height={250} />
      </div>
    </>
  );
};

export default About;
