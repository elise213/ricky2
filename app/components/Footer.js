import React from 'react';
import Image from 'next/image';
import styles from '../styles/footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-centered larger-footer-div">
            <Image height={110} width={200} className="footer-logo" src="/img/CCEA2.png" alt="CCEA Logo" />
            <p className="foot">
                © 2023 CCEA, Inc., All Rights Reserved
            </p>
        </div>
        <div className='footer-centered'>
            <Image height={45} width={120} className="lotus-img" src="/img/lotus4.png" alt="CCEA Logo" />

        </div>
    </footer>
);

export default Footer;
