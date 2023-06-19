import React from 'react';
import Image from 'next/image';
import styles from '../styles/movie-card.css';
import Sticker from './Sticker';

import FrontPageCard from './FrontPageCard';
import Streaming from './Streaming';

const MovieCard = (props) => {

    const defaultTrailer = "https://www.youtube.com/embed/ep518FVHKIU?&loop=1&mute=1&&playlist=ep518FVHKIU&showinfo=0&rel=0&enablejsapi=1";
    const videoId = props.result.trailer && props.result.trailer !== "" ? props.result.trailer.split("https://youtu.be/")[1] : null;
    const trailerUrl = videoId ? `https://www.youtube.com/embed/${videoId}?&loop=1&mute=1&&playlist=${videoId}&showinfo=0&rel=0&enablejsapi=1` : defaultTrailer;


    return (
        <div>
            {/* Modal */}
            <div className="modal fade" id={"exampleModal" + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xxsl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="col-3" id="">{""}</div>
                            <div className='col-6 modal-title-div'>
                                <span className="modal-title" id="exampleModalLabel">{props.result.title}</span>
                            </div>
                            <div className='col-3 close-modal-div'>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className='poster-review-div'>

                                <div className="poster-div">
                                    <Sticker sticker={props} />
                                    <Image
                                        width={300}
                                        height={450}
                                        className="movie"
                                        src={props.result.image}
                                        alt=""
                                    />
                                </div>
                                <div className='review-div'>
                                    <p className='review'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    <p className='review'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                </div>
                            </div>
                            <div className="streaming-trailer-div">

                                <Streaming />
                                <div className="trailer-container">
                                    <iframe
                                        // style={{ height: 300, width: 500 }}
                                        className="iframe"
                                        src={trailerUrl}
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                                        allowFullScreen
                                    >
                                    </iframe>
                                </div>
                                {/* <FrontPageCard id="1" result={props} /> */}
                            </div>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MovieCard;
