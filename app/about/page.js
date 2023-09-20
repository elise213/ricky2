import React from 'react'
import Link from 'next/link';
import styles from "../screenings/screenings.css"
import Image from 'next/image';

const About = () => {
    return (
        <div className='screenings-container'>
            <Image height={600} width={600} className="screenings-image" src={"/img/sample7.png"} alt=""></Image>
            <div className='about'>
                <span className=''>
                    At The Center for Cinematic and Experimental Arts (CCEA), we host screenings and hands-on workshops in Austin Texas and throughout the World.
                    We have a variety of ways to support filmmakers including fiscal sponsorship, in-house legal consulting, support for analog film workflows, and more.
                    We champion creativity over commercialism, and passion over hype. In doing so, we aim to facilitate unique cinematic experiences that enrich our psyches and communities.
                </span>
            </div>
        </div>
    )
}

export default About
