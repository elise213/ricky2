"use client";
import React from "react";
import styles from './contact.css';
import Image from "next/image";

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="message-background">
                <div className="contact-form contact-form-2">
                    <form id="contact_form" name="contact_form" method="post">
                        <div className="mb-3 mt-2 row">
                            <div className="col">
                                <label className="label">Name</label>
                                <input
                                    type="text"
                                    required
                                    maxLength="50"
                                    className="form-control"
                                    id="first_name"
                                    name="first_name"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mb-3">
                                <label className="label" htmlFor="email_addr">Email address</label>
                                <input
                                    type="email"
                                    required
                                    maxLength="50"
                                    className="form-control"
                                    id="email_addr"
                                    name="email"
                                    placeholder=""
                                />
                            </div>
                            <div className="col">
                                <label className="label" htmlFor="phone_input">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    maxLength="50"
                                    className="form-control"
                                    id="phone_input"
                                    name="Phone"
                                    placeholder=""
                                />
                            </div>
                            <div className="col">
                                <label className="label" htmlFor="message">Message</label>
                                <textarea
                                    className="form-control message"
                                    id="message"
                                    name="message"
                                    rows="3"
                                ></textarea>
                            </div>
                            <button type="submit" className="send-button">
                                Send
                            </button>

                        </div>
                    </form>
                </div>
            </div>
            <div className="sticker-holder">

                <Image className="sticker" src="/../public/img/rewind.png" height={100} width={100} alt="" />
            </div>
        </div >
    );
};

export default Contact;
