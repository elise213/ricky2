import React, { useState } from "react";
import Link from "next/link";
import styles from "./fiscal.css";
import Image from "next/image";

const Fiscal = () => {
  return (
    <div className={`fiscal-container`}>
      {/* <Image
        height={600}
        width={600}
        className="screenings-image"
        src={"/img/sample3.png"}
        alt=""
      ></Image> */}
      <div className="fiscal-about">
        <span className="">
          CCEA is committed to helping talented independent artists make films.
          Our fiscal sponsorship allows you to solicit and receive
          tax-deductible donations from individuals and gifts from foundations
          in support of your projects. Please read
          <Link href="/fiscalFAQ" passHref className="FAQ-link">
            {" "}
            this FAQ{" "}
          </Link>
          before you apply to the program.
        </span>
        <br />
        <br />
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfOSXl0DE6kTpCli5zwu4TeSDA0yIQfSzTEx4uyrZSbR-8Q6Q/viewform?embedded=true"
          width="640"
          // height="4724"
          height="100%"
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
