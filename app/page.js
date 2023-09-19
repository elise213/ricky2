'use client'
import React, { useContext, useEffect, useState } from 'react';
import Video from "../app/components/Video";
import styles from './globals.css';
import { Context } from './context/appContext';
import FrontPageCard from './components/FrontPageCard';
import Contact from './components/Contact';
import { Footer } from './components/Footer';

const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <main className={styles.main}>
      <div className="home-body">
        <Video />
        <div className='about'>
          <span >
            At The Center for Cinematic and Experimental Arts (CCEA), we host screenings and hands-on workshops, which reflect the rich diversity of our community of film enthusiasts.
            We have a variety of ways to support filmmakers including fiscal sponsorship, in-house legal consulting, support for analog film workflows, and more.
            We champion creativity over commercialism, and passion over hype. In doing so, we aim to facilitate unique cinematic experiences that enrich our psyches and communities.
          </span>
        </div>
        {/* <div className="scroll-search-results">
          <ul style={{ listStyleType: "none" }}>
            {store.movies.map((result, i) => (
              <li key={i} style={i === store.movies.length - 1 ? { paddingRight: "35px" } : {}}>
                <div>
                  <FrontPageCard id={i} result={result} />
                </div>
              </li>
            ))}
          </ul>
        </div> */}
        <div id="contact-section" >
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  )
}
export default Home;
