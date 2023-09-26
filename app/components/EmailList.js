import React, { useRef } from "react";
import styles from "../styles/emailList.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const EmailList = () => {
  const form = useRef();
  const SERVICE_ID = "service_betnze8";
  const TEMPLATE_ID = "template_99iigjc";
  const PUBLIC_KEY = "bSrh0TD_khQU1Jash";

  const signUpForMailingList = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Successfully Signed Up!",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="email-list-container">
      <p>Sign Up For The CCEA Mailing List</p>

      <form
        ref={form}
        onSubmit={signUpForMailingList}
        className="email-list-form"
      >
        <div className="email-list-input-div">
          <input
            type="text"
            id="emailListInput"
            name="email"
            className="emailListInput"
            placeholder="Email"
            required
          />
        </div>
        {/* <div className="email-list-button-div"> */}
        <button className="send-button send-2" type="submit">
          Sign Up
        </button>
        {/* </div> */}
      </form>
    </div>
  );
};

export default EmailList;