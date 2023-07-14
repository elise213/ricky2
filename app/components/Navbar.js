import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar" id="navbar">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse" id="navbarSupportedContent">
                    <div className="nav-content ml-auto">
                        <Link href="/" passHref
                            className="nav-item nav-btn">HOME
                        </Link>
                        {/* <Link href="/archive" passHref
                            className="nav-item nav-btn">ARCHIVE
                        </Link> */}
                        <Link href="/services" passHref
                            className="nav-item nav-btn">RESEARCH
                        </Link>
                        <Link href="/contact" passHref
                            className="nav-item nav-btn">CONTACT
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
