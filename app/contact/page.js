"use client";
import React from "react";
import styles from './contact.css';
import Image from "next/image";

const Contact = () => {
    return (
        <div className="contact-page">
            <form id="contact_form" name="contact_form" method="post" className="contact-form">
                <div className="form-row">
                    <div className="form-col">
                        <label className="label">Name</label>
                        <input type="text" required maxLength="50" className="form-control" id="first_name" name="first_name" />
                    </div>
                    <div className="form-col">
                        <label className="label" htmlFor="email_addr">Email address</label>
                        <input type="email" required maxLength="50" className="form-control" id="email_addr" name="email" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col-full">
                        <label className="label" htmlFor="message">Message</label>
                        <textarea className="form-control message" id="message" name="message" rows="3"></textarea>
                    </div>
                </div>
                <div className="form-row">
                    <button type="submit" className="send-button">Send</button>
                </div>
            </form>
            <Image className="contact-sticker" src="/../public/img/rewind.png" height={100} width={100} alt="" />
        </div >
    );
};

export default Contact;
