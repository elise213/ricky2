'use client'
import React, { useContext, useEffect, useState } from 'react';
import Video from "../app/components/Video";
import styles from './globals.css';
import { Context } from './context/appContext';
import MovieCard from './components/MovieCard';
import FrontPageCard from './components/FrontPageCard';
import Image from 'next/image';


const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <main className={styles.main}>
      <div className="home-body">
        <Video />
        <div className="scroll-search-results">
          <ul style={{ listStyleType: "none" }}>
            {store.movies.map((result, i) => (
              <li key={i} style={i === store.movies.length - 1 ? { paddingRight: "35px" } : {}}>
                <div>
                  <FrontPageCard id={i} result={result} />
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>


    </main>
  )
}
export default Home;
