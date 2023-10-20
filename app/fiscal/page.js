import React from "react";
import Link from "next/link";
import styles from "../styles/fiscal.css";
import Image from "next/image";

const Fiscal = () => {
  return (
    <div className="fiscal-container">
      {/* <Image
        height={600}
        width={600}
        className="screenings-image"
        src={"/img/sample3.png"}
        alt=""
      ></Image> */}
      <div className="about">
        <span className="">
          We are committed to lessening the financial and logistical obstacles
          filmmakers face, and part of that is our fiscal sponsorship program,
          which allows tax-deductible donations and grants to be used for making
          art.
        </span>
        <br />
        <br />
        <p className="">
          <Link href="/fiscalFAQ" passHref className="nav-item">
            View the Fiscal Sponsorship FAQ
          </Link>
        </p>
        <br />
        {/* <div className="download-section nav-item">
          <a href="/pdf/myfile.pdf" download>
            Download the Application for Fiscal Sponsorship.
          </a>
        </div> */}
        <br />
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfOSXl0DE6kTpCli5zwu4TeSDA0yIQfSzTEx4uyrZSbR-8Q6Q/viewform?embedded=true"
          width="640"
          height="4724"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Fiscal;
