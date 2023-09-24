import React, { useState, useEffect } from 'react';
import Sticker from './Sticker';
import Image from 'next/image';
import styles from '../styles/front-page-card.css';
import MovieCard from './MovieCard';
import Hilights from './Hilights'

const FrontPageCard = (props) => {

    return (
        <div>
            <Image width={270} height={400} quality={70} className="movie" src={props.result.image} alt="" />
            <Hilights result={props.result} />
        </div>
    );
};

export default FrontPageCard;
