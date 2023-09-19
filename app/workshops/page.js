import React from 'react'
import Image from 'next/image';
// import stypes from "./workshops.css"
import stypes from "../screenings/screenings.css"

const page = () => {
    return (
        <div className='screenings-container'>
            <Image height={600} width={600} className="screenings-image" src={"/img/sample4.png"} alt=""></Image>
            <div className='about'>
                <span>
                    At CCEA, we are dedicated to nurturing a deeper appreciation for the time-honored art of 8mm and 16mm analog filmmaking. Our workshops offer a rich and educational hands-on experience, where participants are guided in the techniques of shooting and editing analog film using our  Bolex Reflex cameras.  Our  development sessions introduce participants to eco-friendly processing methods, utilizing coffee and other common household items to develop film in a manner that's both environmentally conscious, non-toxic, and ultra low-budget. Films made in the workshops will have the option to be shown at one of CCEA's public screenings.
                </span>
                <p className='upcoming'>
                    Upcoming Workshops:
                </p>
            </div>
        </div>
    )
}

export default page
