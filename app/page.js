"use client";
import React, { useContext, useEffect, useState } from "react";
import Video from "../app/components/Video";
import styles from "./globals.css";
import { Context } from "./context/appContext";
import EmailList from "./components/EmailList";
import FrontPageCard from "./components/FrontPageCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <main className={styles.main}>
      <div className="home-body content">
        <Video />
        <div className="about">
          <span className="">
            The Center for Cinematic and Experimental Arts (CCEA) is a 501(c)3
            nonprofit that promotes high-quality cinematic experiences through
            exhibitions, workshops, and artist support. We aim to help talented
            artists navigate the many obstacles inherent to independent
            filmmaking.
          </span>
        </div>
        <div className="screenings-div">
          <div className="movie-scroll-labels">
            <p>Upcoming Workshops and Events</p>
          </div>
          <div className="scroll-search-results">
            <ul style={{ listStyleType: "none" }}>
              {store.movies.map((result, i) => (
                <li
                  key={i}
                  style={
                    i === store.movies.length - 1
                      ? { paddingRight: "35px" }
                      : {}
                  }
                >
                  <div>
                    <FrontPageCard id={i} result={result} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default Home;
