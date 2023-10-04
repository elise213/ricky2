import React, { useState, useEffect } from "react";
import Sticker from "./Sticker";
import Image from "next/image";
import styles from "../styles/front-page-card.css";
import MovieCard from "./MovieCard";
import Highlights from "./Highlights";

const FrontPageCard = (props) => {
  return (
    <div>
      <Image
        width={220}
        height={320}
        quality={70}
        className="movie"
        src={props.result.image}
        alt=""
      />
      <Highlights result={props.result} />
    </div>
  );
};

export default FrontPageCard;
