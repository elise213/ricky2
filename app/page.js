
'use client'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Video from "../app/components/Video";
import styles from './globals.css';
import { Context } from './context/appContext'

import Image from 'next/image';

const Home = () => {

  const { store, actions } = useContext(Context)

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const movies = [
    <Image width={400} height={600} className="movie" src={"/img/the-taking-of-pelham-one-two-three-1974.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/apocalypse-now-1979.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/the-evil-dead-1981.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/being-there-1979.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/carrie-1976.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/chinatown-1974.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/close-encounters-of-the-third-kind-1977.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/coffy-1973.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/deliverance-1972.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/enter-the-dragon-1973.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/frenzy-1972.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/moonraker-1979.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/network-1976.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/the-elephant-man-1980.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/the-french-connection-1971.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/the-long-goodbye-1973.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/the-outlaw-josey-wales-1976.jpeg"} alt=""></Image>,
    <Image width={400} height={600} className="movie" src={"/img/the-texas-chain-saw-massacre-1974.jpeg"} alt=""></Image>,

  ];

  return (
    <main className={styles.main}>
      <div className="home-body">
        <div className="welcome">
          <Video />
        </div>
        <div className="scroll-search-results">
          <ul style={{ listStyleType: "none" }}>
            {movies.map((result, i) => {
              return (
                <li key={i}>
                  <span>{result}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='category'>
          <span className='category-title'>COMEDY</span>
        </div>
        <div className="scroll-search-results">
          <ul style={{ listStyleType: "none" }}>
            {movies.map((result, i) => {
              return (
                <li key={i}>
                  <span>{result}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='category'>
          <span className='category-title'>HORROR</span>
        </div>
        <div className="scroll-search-results">
          <ul style={{ listStyleType: "none" }}>
            {store.movies.map((result, i) => {

              return (
                <li key={i}>
                  <Image width={400} height={600} className="movie" src={result} alt=""></Image>,
                </li>

              );
            })}
          </ul>
        </div>
      </div>
    </main >
  )
}

export default Home;