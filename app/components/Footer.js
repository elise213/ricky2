import React from 'react';
import Image from 'next/image';
import styles from '../styles/footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="foot-logo">
            <Image height={110} width={200} className="footer-logo" src="/img/CCEA2.png" alt="CCEA Logo" />
        </div>
        <div className="foot-details">
            <p className="foot">
                © 2023 Center for Cinematic and Experimental Arts, Inc., All Rights Reserved
            </p>
        </div>
    </footer>
);

export default Footer;
