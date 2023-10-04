import React, { useState, useEffect } from "react";
import Sticker from "./Sticker";
import MovieCard from "./MovieCard";
import styles from "../styles/highlights.css";

const Highlights = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modalIsOpen]);

  return (
    <div>
      <div className="highlights">
        <div className="sticker-and-review">
          <Sticker className="sticker" sticker={props.result} />
        </div>
        <div className="center-column">
          {!props.modalIsOpen && (
            <>
              <p className="highlight-title">{props.result.title}</p>
              <p className="highlight">"bla bla bla bla bla bla bla bla bla"</p>
              <p className="highlight">First special thing</p>
              <p className="highlight">Second special thing</p>
              <p className="highlight">Third special thing</p>
              <div className="d-flex"></div>

              <div className="more-button">
                <button
                  type="button"
                  className="btn learn-more-2"
                  onClick={toggleModal}
                >
                  More
                </button>
              </div>
            </>
          )}
        </div>

        {modalIsOpen && (
          <div>
            <div className="modal-overlay"></div>
            <div className="modal-div">
              <MovieCard
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                toggleModal={toggleModal}
                result={props.result}
                id={props.result.id}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Highlights;
