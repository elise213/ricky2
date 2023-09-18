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
            At the Center for Cinematic and Experimental Arts (CCEA), we host engaging hands-on workshops and screenings, reflecting the rich diversity of our community of artists, supporters, and educators. In addition to offering support for analog filmmaking, we provide fiscal sponsorship and legal consulting for documentary filmmakers. We prioritize authenticity over box office buzz, steadfastly championing creativity over commercialism. In doing so, we aim to facilitate unique cinematic experiences that enrich both our individual psyches and the wider community.
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
