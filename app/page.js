"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import Link from "next/link";
import Video from "./components/Video";
import styles from "./globals.css";
import Contact from "./components/Contact";
import { Context } from "./context/appContext";
import About from "./components/About";
import Video2 from "./components/Video2";

const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <main className={styles.main}>
      <div className="home-body content">
        <Video />
        <Video2 />
        <About />
        <Contact />
      </div>
    </main>
  );
};
export default Home;
