import React from 'react'
import Link from 'next/link';
// import styles from "../fiscal/fiscal.css"
import stypes from "../screenings/screenings.css"
import Image from 'next/image';

const Fiscal = () => {
    return (
        <div className='screenings-container'>
            <Image height={600} width={600} className="screenings-image" src={"/img/sample3.png"} alt=""></Image>
            <div className='about'>
                <span className=''>
                    At The Center for Cinematic and Experimental Arts (CCEA), we are committed to lessening the financial and logistical obstacles filmmakers face through a variety of services including our 501c3 fiscal sponsorship program.
                    We facilitate tax-deductible donations and grants, ensuring you and your sponsors have the necessary resources and support to actualize your goals.
                </span>
                <p className="">
                    <Link href="/fiscalFAQ" passHref className="nav-item">View the Fiscal Sponsorship FAQ</Link>
                </p>
                <div className="download-section nav-item">
                    <a href="/pdf/myfile.pdf" download>
                        Download the Application for Fiscal Sponsorship.
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Fiscal
