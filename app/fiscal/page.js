"use client";
import React from "react";
import Link from "next/link";
import styles from "./fiscal.css";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Fiscal = () => {
  return (
    <>
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
            CCEA is committed to helping talented independent artists make
            films. Our fiscal sponsorship program allows filmmakers to solicit
            and receive tax-deductible donations from individuals, and gifts
            from foundations, to make films. Please read our
            <Link href="/fiscalFAQ" passHref className="FAQ-link">
              {" "}
              Fiscal Sponsorship FAQ{" "}
            </Link>
            before applying to the program.
          </span>
          <br />
          <br />
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfOSXl0DE6kTpCli5zwu4TeSDA0yIQfSzTEx4uyrZSbR-8Q6Q/viewform?embedded=true"
            width="640"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  );
};

export default Fiscal;
