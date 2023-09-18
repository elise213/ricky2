import React, { Component } from "react";
import Image from 'next/image';
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa6";
import styles from '../styles/footer.css';

export const Footer = () => (
    <footer className="">

        <div className="footer">
            <div className="foot-logo">
                <div>
                    <Image height={110} width={200} className="footer-logo" src={"/img/CCEA2.png"} alt=""></Image>
                </div>
            </div>
            <div className="foot-details">
                {/* <div className="foot">
                    < FaPhone className="footer-icon" />
                    <p className="foot-info">
                        305-663-6633
                    </p>
                </div> */}
                {/* <div className="foot">
                    <FaRegEnvelope className="footer-icon" />
                    <p className="foot-info">
                        cinematicandexperimentalarts@gmail.com
                    </p>
                </div> */}
                {/* <div className="foot">
                    <FaMapPin className="footer-icon" />
                    <p className="foot-info">
                        4601 Ponce de Leon Blvd.<br />
                        Suite 300 <br />
                        Coral Gables, Florida 33146
                    </p>
                </div> */}
                <p className="foot">
                    © 2023 CCEA Inc. All Rights Reserved</p>
            </div>
        </div>
        {/* <p className="">
        Website by CodeLotus</p> */}
    </footer>
);
