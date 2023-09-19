import React from 'react'
import Image from 'next/image';
import styles from './screenings.css'

const Screenings = () => {
    return (
        <div className='screenings-container'>
            <Image height={600} width={600} className="screenings-image" src={"/img/sample5.png"} alt=""></Image>
            <div className='about'>
                <span>
                    Under the night sky, CCEA brings you an array of rare experimental and 16mm films in the heart of Austin, Texas.  We aim to be where the spirit of creativity meets the warmth of community.
                </span>
            </div>
        </div>
    )
}
export default Screenings
