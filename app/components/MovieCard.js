import React from 'react';
import Image from 'next/image';
import styles from '../styles/movie-card.css';
import Link from 'next/link';

const MovieCard = (props) => {

    console.log("PROPS MODAl", props)
    return (
        <div>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xxsl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="modal-title" id="exampleModalLabel">{props.result.title}</span>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex">

                            <div className="poster-div">
                                <Image
                                    width={300}
                                    height={450}
                                    className="movie"
                                    src={props.result.image}
                                    alt=""

                                />
                                <div className='streaming-container'>
                                    <div className='streaming-logo-price-container'>
                                        <Link href="https://www.Netflix.com/">
                                            <div className='streaming-logo-price-container'>
                                                {/* <Image width={90} height={60} className="streaming-logo" src={"https://drive.google.com/file/d/1tTpAt1iF9Bb3W6Osn9evQfJxAXSCpJRO"} alt="" /> */}
                                                <Image className="streaming-logo" src={"/streaming/netflix.jpg"} width="90" height="60"></Image>
                                                <p>$8.99</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='streaming-logo-price-container'>
                                        <Link href="https://www.peacocktv.com/">
                                            <div className='streaming-logo-price-container '>
                                                <Image width={90} height={60} className="streaming-logo" src={"/streaming/apple.jpg"} alt="" />
                                            </div>
                                            <p>$8.99</p>
                                        </Link>
                                    </div>
                                    <div className='streaming-logo-price-container'>
                                        <Link href="https://www.hulu.com/">
                                            <div className='streaming-logo-price-container '>
                                                <Image width={90} height={60} className="streaming-logo" src={"/streaming/hulu.jpg"} alt="" />
                                                <p>$8.99</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='streaming-logo-price-container'>
                                        <Link href="https://www.peacocktv.com/">
                                            <div className='streaming-logo-price-container '>
                                                <Image width={90} height={60} className="streaming-logo" src={"/streaming/peacock.jpg"} alt="" />
                                                <p>$8.99</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='review-div'>
                                <span className='review'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                                <span className='review'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                                <div className="trailer-container">
                                    <iframe
                                        style={{ height: 300, width: 500 }}
                                        className="iframe"
                                        src="https://www.youtube.com/embed/ep518FVHKIU?&loop=1&mute=1&&playlist=ep518FVHKIU&showinfo=0&rel=0&enablejsapi=1"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                                        allowFullScreen
                                    >
                                    </iframe>
                                </div>
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
