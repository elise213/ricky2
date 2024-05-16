import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/navbar.css";

const Navbar = ({}) => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <>
      <div className="nav-container">
        <nav className={`new-navbar ${isNavOpen ? "open" : ""}`}>
          <div className={`navbar-content ${isNavOpen ? "open" : ""}`}>
            <span className="nav-item" onClick={() => setIsNavOpen(false)}>
              <Link href="/" passHref className="nav-item">
                HOME
              </Link>
            </span>
            <span className="nav-item" onClick={() => setIsNavOpen(false)}>
              <Link href="/fiscal" passHref className="nav-item">
                ABOUT
              </Link>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
