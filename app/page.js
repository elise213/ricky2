'use client'
import React, { useContext, useEffect, useState } from 'react';
import Video from "../app/components/Video";
import styles from './globals.css';
import { Context } from './context/appContext';
import FrontPageCard from './components/FrontPageCard';
import Contact from './components/Contact';

const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <main className={styles.main}>
      <div className="home-body">
        <Video />
        <div id="contact-section" >
          <Contact />
        </div>
      </div>
    </main>
  )
}
export default Home;
