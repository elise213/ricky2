'use client'
import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Video from "../app/components/Video";
import styles from './globals.css';
import { Context } from './context/appContext';
import MovieCard from './components/MovieCard';
import Image from 'next/image';

const Home = () => {
  const { store, actions } = useContext(Context);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <main className={styles.main}>
      <div className="home-body">
        <div className="welcome">
          <Video />
        </div>
        <div className="scroll-search-results">
          <ul style={{ listStyleType: "none" }}>
            {store.movies.map((result, i) => (
              <li key={i}>
                <div>
                  <Image
                    width={400}
                    height={600}
                    className="movie"
                    src={result.image}
                    alt=""
                    onClick={() => openModal(result)}
                  />
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    className="btn learn-more"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => openModal(result)}
                  >
                    Learn More
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='category'>
          <span className='category-title'>SUSPENSE</span>
        </div>
        <div className="scroll-search-results">
          <ul style={{ listStyleType: "none" }}>
            {store.movies
              .filter((movie) => movie.category === "suspense")
              .map((result, i) => (
                <li key={i}>
                  <div>
                    <Image
                      width={400}
                      height={600}
                      className="movie"
                      src={result.image}
                      alt=""
                      onClick={() => openModal(result)}
                    />
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn learn-more"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => openModal(result)}
                    >
                      Learn More
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className='category'>
          <span className='category-title'>HORROR</span>
        </div>
        <div className="scroll-search-results">
          <ul style={{ listStyleType: "none" }}>
            {store.movies
              .filter((movie) => movie.category === "horror")
              .map((result, i) => (
                <li key={i}>
                  <div>
                    <Image
                      width={400}
                      height={600}
                      className="movie"
                      src={result.image}
                      alt=""
                      onClick={() => openModal(result)}
                    />
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn learn-more"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => openModal(result)}
                    >
                      Learn More
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className='category'>
          <span className='category-title'>COMEDY</span>
        </div>
        <div className="scroll-search-results">
          <ul style={{ listStyleType: "none" }}>
            {store.movies
              .filter((movie) => movie.category === "comedy")
              .map((result, i) => (
                <li key={i}>
                  <div className='scroll-image-div'>
                    <Image
                      width={400}
                      height={600}
                      className="movie"
                      src={result.image}
                      onClick={() => openModal(result)}
                    ></Image>

                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn learn-more"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => openModal(result)}
                    >
                      Learn More
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {selectedMovie && <MovieCard movie={selectedMovie} />}
    </main>
  )
}

export default Home;
