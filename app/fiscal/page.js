import React from "react";
import Link from "next/link";
// import styles from "../fiscal/fiscal.css"
import stypes from "../screenings/screenings.css";
import Image from "next/image";

const Fiscal = () => {
  return (
    <div className="screenings-container">
      <Image
        height={600}
        width={600}
        className="screenings-image"
        src={"/img/sample3.png"}
        alt=""
      ></Image>
      <div className="about">
        <span className="">
          We are committed to lessening the financial and logistical obstacles
          filmmakers face, through our fiscal sponsorship program. We facilitate
          tax-deductible donations and grants, ensuring filmmakers and their
          sponsors have the necessary resources and support.
        </span>
        <br />
        <br />
        <p className="">
          <Link href="/fiscalFAQ" passHref className="nav-item">
            View the Fiscal Sponsorship FAQ
          </Link>
        </p>
        <br />
        <div className="download-section nav-item">
          <a href="/pdf/myfile.pdf" download>
            Download the Application for Fiscal Sponsorship.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fiscal;
