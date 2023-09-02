import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/movie-card.css';
import Sticker from './Sticker';
// import FrontPageCard from './FrontPageCard';
import Streaming from './Streaming';
// import Hilights from './Hilights';

const MovieCard = (props) => {
    const defaultTrailer =
        'https://www.youtube.com/embed/ep518FVHKIU?&loop=1&mute=1&&playlist=ep518FVHKIU&showinfo=0&rel=0&enablejsapi=1';
    const videoId =
        props.result.trailer && props.result.trailer !== ''
            ? props.result.trailer.split('https://youtu.be/')[1]
            : null;
    const trailerUrl = videoId
        ? `https://www.youtube.com/embed/${videoId}?&loop=1&mute=1&&playlist=${videoId}&showinfo=0&rel=0&enablejsapi=1`
        : defaultTrailer;

    useEffect(() => {
        const player = document.getElementById('movie_player');
        if (player) {
            // Find and hide the YouTube title element
            const titleElement = player.querySelector('.ytp-title');
            if (titleElement) {
                titleElement.style.display = 'none';
            }
        }
    }, []);

    return (
        <div>
            {props.modalIsOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="cmodal-title-div">
                                <span className="modal-title" id="exampleModalLabel">
                                    {props.result.title}
                                </span>
                            </div>
                            <div className="close-div">
                                <button
                                    type="button"
                                    className="close"
                                    onClick={props.toggleModal}
                                    aria-label="Close"
                                >
                                    X
                                </button>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="poster-review-div">
                                <div className="poster-div">
                                    {console.log("STICKER PROPS", props)}
                                    <div className='sticker-modal'>
                                        <Sticker sticker={props.result} />
                                    </div>
                                    <Image
                                        width={300}
                                        height={450}
                                        className="movie"
                                        src={props.result.image}
                                        alt=""
                                    />
                                </div>
                                <div className="review-div">
                                    <p className="review">
                                        Whether we write or speak or do but look
                                        We are ever unapparent. What we are
                                        Cannot be transfused into word or book.
                                        Our soul from us is infinitely far.
                                        However much we give our thoughts the will
                                        To be our soul and gesture it abroad,
                                        Our hearts are incommunicable still.
                                        In what we show ourselves we are ignored.
                                        The abyss from soul to soul cannot be bridged
                                        By any skill of thought or trick of seeming.
                                        Unto our very selves we are abridged
                                        When we would utter to our thought our being.
                                        We are our dreams of ourselves, souls by gleams,
                                        And each to each other dreams of others' dreams.
                                    </p>
                                </div>
                            </div>
                            <div className="streaming-trailer-div">
                                <Streaming />
                                <div className="trailer-container">
                                    <iframe
                                        className="iframe-2"
                                        src={trailerUrl}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                                        allowFullScreen
                                    ></iframe>

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieCard;
