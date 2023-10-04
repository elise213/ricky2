import React from "react";
import Image from "next/image";
import styles from "../styles/footer.css";
import EmailList from "./EmailList";

const Footer = () => (
  <footer className="footer">
    <div className="footer-centered larger-footer-div">
      <EmailList />
      {/* <Image height={110} width={200} className="footer-logo" src="/img/CCEA2.png" alt="CCEA Logo" /> */}
      <p className="foot">© 2023 CCEA, Inc., All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
