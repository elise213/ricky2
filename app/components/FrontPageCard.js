'use client'
import React, { useContext, useEffect, useState } from 'react';
import Sticker from './Sticker'
import Image from 'next/image'
import styles from '../styles/front-page-card.css';
import MovieCard from './MovieCard';

const FrontPageCard = (props) => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const openModal = (movie) => {
        setSelectedMovie(movie);
    };
    return (
        <div>
            <Image
                width={400}
                height={600}
                className="movie"
                src={props.result.image}
                alt=""
                onClick={() => openModal(props.result)}
            />
            <div className='hilights'>
                <div className="sticker-and-review">
                    <Sticker className="sticker" sticker={props.result} />
                    <div>
                        <p className='hilight-main text-center'>{props.result.title}</p>
                    </div>
                </div>
                <p className='hilight'>"bla bla bla bla bla bla bla bla bla"</p>
                <p className='hilight'>First special thing</p>
                <p className='hilight'>Second special thing</p>
                <p className='hilight'>Third special thing</p>
                <div className='d-flex'>
                </div>
                {/* Button trigger modal */}
                <div className="more-button">
                    <button
                        type="button"
                        className="btn learn-more"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => openModal(props.result)}
                    >
                        More
                    </button>
                </div>
            </div>
            {selectedMovie && <MovieCard movie={selectedMovie} />}
        </div>
    )
}

export default FrontPageCard