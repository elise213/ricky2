'use client'
import React, { useState } from "react";
import styles from "./services.css";
import Link from 'next/link';

const Services = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const API_KEY = "8d5bbe4bdd4dd79888b6856f5b0f8868";
        const baseUrl = "https://api.themoviedb.org/3/discover/movie";
        // const baseUrl = "http://api.themoviedb.org/3/discover/movie";
        const releaseDateFrom = "2023-06-01";
        const releaseDateTo = "2023-06-03";
        const sortOption = "primary_release_date.asc";
        const totalPages = 141;
        const moviesPerPage = 20;
        const fetchedMovies = [];

        try {
            for (let page = 1; page <= totalPages; page++) {
                const url = `${baseUrl}?api_key=${API_KEY}&sort_by=${sortOption}&primary_release_date.gte=${releaseDateFrom}&primary_release_date.lte=${releaseDateTo}&page=${page}`;
                const response = await fetch(url);
                const data = await response.json();
                fetchedMovies.push(...data.results);
            }

            setMovies(fetchedMovies);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };


    const handleFetchClick = () => {
        if (movies.length === 0) {
            fetchMovies();
        }
    };

    return (
        <div className="services-container">
            <h2>New Release Movies</h2>
            <button onClick={handleFetchClick}>Fetch Movies</button>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <div>
                            <p className="title">{movie.title}</p>
                            <p>Overview: {movie.overview}</p>
                            {/* <p>Poster: {movie.poster_path}</p> */}
                            <p>Release date: {movie.release_date}</p>
                            {/* <p>Backdrop: {movie.backdrop_path}</p> */}
                            {/* <p>Genre Ids: {movie.genre_ids}</p> */}
                            <break></break>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;