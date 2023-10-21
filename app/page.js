"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import Video from "../app/components/Video";
import styles from "./globals.css";
import { Context } from "./context/appContext";
import EmailList from "./components/EmailList";
import FrontPageCard from "./components/FrontPageCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  const { store, actions } = useContext(Context);
  const scrollRef = useRef();
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const checkOverflow = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    console.log("scrollWidth:", container.scrollWidth);
    console.log("offsetWidth:", container.offsetWidth);

    const isOver = container.scrollWidth > container.offsetWidth;
    console.log("Is Overflowing:", isOver);

    setIsOverflowing(isOver);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      checkOverflow();
    };

    window.addEventListener("resize", handleResize);

    checkOverflow();
    console.log("ISOVER", isOverflowing);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [store.movies, windowWidth]);

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
          {/* <div
            className="scroll-search-results"
            style={{
              justifyContent: isOverflowing ? "space-around" : "center",
            }}
          >
            <ul ref={ulRef}>
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
          </div> */}
          <div
            ref={scrollRef}
            className="scroll-search-results"
            style={{
              justifyContent: isOverflowing ? "flex-start" : "center",
            }}
          >
            <ul>
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
