import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/navbar.css";
import EmailList from "./EmailList";
import Contact from "./Contact";

const Navbar = ({ isLargeScreen }) => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleContactModal = () => {
    setShowContactModal(!showContactModal);
  };

  useEffect(() => {
    if (!isLargeScreen) {
      const handleClickOutside = (event) => {
        const nav = document.querySelector(".new-navbar");
        if (nav && !nav.contains(event.target) && isNavOpen) {
          setIsNavOpen(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isNavOpen, isLargeScreen]);

  useEffect(() => {
    if (isLargeScreen) {
      setIsNavOpen(true);
    }
  }, [isLargeScreen]);

  useEffect(() => {
    const body = document.body;
    if ((!isLargeScreen && isNavOpen) || showContactModal) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }, [isNavOpen, showContactModal, isLargeScreen]);

  return (
    <>
      <div className="nav-container">
        <nav className={`new-navbar ${isNavOpen ? "open" : ""}`}>
          {!isLargeScreen && (
            <div className="menu-icon" onClick={toggleNav}>
              <div
                className={`open-icon ${!isNavOpen ? "closed" : ""}`}
                onClick={() => setIsNavOpen(true)}
              >
                <i className="fas fa-bars"></i>
              </div>
              <div className={`close-icon ${isNavOpen ? "open" : ""}`}>
                <span className="navbar-toggler">
                  <i className="fa-solid fa-x"></i>
                </span>
              </div>
            </div>
          )}

          <div className={`navbar-content ${isNavOpen ? "open" : ""}`}>
            {!isLargeScreen && (
              <img
                src="/img/logo2.png"
                alt="CCEA Logo"
                className="navbar-logo"
              />
            )}
            <span className="nav-item" onClick={() => setIsNavOpen(false)}>
              <Link href="/" passHref className="nav-item">
                HOME
              </Link>
            </span>
            <span className="nav-item" onClick={() => setIsNavOpen(false)}>
              <Link href="/fiscal" passHref className="nav-item">
                FISCAL SPONSORSHIP
              </Link>
            </span>
            <span
              className="nav-item"
              onClick={() => {
                setIsNavOpen(false);
                toggleContactModal();
              }}
            >
              CONTACT
            </span>
            {/* <span className="nav-item" onClick={() => setIsNavOpen(false)}>
            <Link href="/about" passHref className="nav-item">
              ABOUT
            </Link>
          </span> */}
            {/* <span className="nav-item" onClick={() => setIsNavOpen(false)}>
                <Link href="/screenings" passHref className="nav-item">
                  SCREENINGS AND EVENTS
                </Link>
              </span> */}
            {/* <span className="nav-item" onClick={() => setIsNavOpen(false)}>
                <Link href="/workshops" passHref className="nav-item">
                  WORKSHOPS & CLASSES
                </Link>
              </span> */}
            {!isLargeScreen && <EmailList />}
          </div>
        </nav>

        {showContactModal && (
          <div className="modal-contact">
            <div className="modal-content-contact">
              <span className="close" onClick={toggleContactModal}>
                <i className="fa-solid fa-x"></i>
              </span>
              <Contact />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
