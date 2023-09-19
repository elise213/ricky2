import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(true);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const smoothScrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setIsNavOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <div className="menu-icon" onClick={toggleNav}>
                <div className="open-icon" onClick={() => setIsNavOpen(true)}>
                    <i className="fas fa-bars"></i>
                </div>
                {isNavOpen ? (
                    <div className="close-icon" onClick={() => setIsNavOpen(false)}>
                        <span className="navbar-toggler">X</span>
                    </div>
                ) : (""
                )}
            </div>

            <nav className={`new-navbar ${isNavOpen ? 'open' : ''}`}>

                <div className={`navbar-content ${isNavOpen ? 'open' : ''}`}>
                    <span className="nav-item" onClick={() => setIsNavOpen(false)}>
                        <Link href="/" passHref className="nav-item">HOME</Link>
                    </span>
                    <span className="nav-item" onClick={() => setIsNavOpen(false)}>
                        <Link href="/screenings" passHref className="nav-item">SCREENINGS</Link>
                    </span>
                    <span className="nav-item" onClick={() => setIsNavOpen(false)}>
                        <Link href="/workshops" passHref className="nav-item">WORKSHOPS & EVENTS</Link>
                    </span>
                    <span className="nav-item" onClick={() => setIsNavOpen(false)}>
                        <Link href="/resources" passHref className="nav-item">RESOURCES</Link>
                    </span>
                    <span className="nav-item" onClick={() => setIsNavOpen(false)}>
                        <Link href="/fiscal" passHref className="nav-item">FISCAL SPONSORSHIP</Link>
                    </span>
                    <span className="nav-item" onClick={() => { setIsNavOpen(false); smoothScrollToContact(); }}>
                        <Link href="/#contact-section" passHref className="nav-item">
                            CONTACT
                        </Link>
                    </span>
                </div>
            </nav>
        </div>
    );

};

export default Navbar;
