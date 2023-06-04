'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/navbar.css';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light" id="navbar">
            <div className="container-fluid">
                <Link href={'/'} className="">
                    {/* <Image width={200} height={50} alt="" className="" navbar-logo src={} /> */}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <p className="navbar-toggler-icon"></p>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ flexGrow: '0' }}>
                    <div className="ml-auto nav-content"></div>
                    <span className="nav-item">
                        <Link href="/" className='nav-btn'>HOME</Link>
                    </span>
                    <span className="nav-item">
                        <Link href="/archive" className="nav-btn">ARCHIVE</Link>
                    </span>
                    <span className="nav-item">
                        <Link href="/services" className="nav-btn">HADRIAN</Link>
                    </span>
                    <span className="nav-item">
                        <Link href="/contact" className="nav-btn">CONTACT</Link>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
