import React from "react";
import Image from "next/image";
import styles from "../styles/footer.css";
import EmailList from "./EmailList";

const Footer = (isLargeScreen) => (
  <footer className="footer">
    <div className="footer-centered larger-footer-div">
      {/* {isLargeScreen && ( */}
      <>
        {/* <img src="/img/logo2.png" alt="CCEA Logo" className="navbar-logo" /> */}
        {/* <EmailList /> */}
      </>
      {/* )} */}
      <p className="foot">© 2023 Center for Cinematic and Experimental Arts</p>
    </div>
  </footer>
);

export default Footer;
