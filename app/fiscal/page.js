import React from 'react'
import Link from 'next/link';

const Fiscal = () => {
    return (
        <div>
            <div className='about'>
                <p className=''>
                    At The Center for Cinematic and Experimental Arts (CCEA), we are committed to alleviating the financial and logistical obstacles filmmakers face through a variety of services including our 501c3 fiscal sponsorship program. By extending our non-profit status to budding filmmakers who are aligned with our mission, we facilitate tax-deductible donations and grants, ensuring you have the necessary resources and support to actualize your cinematic vision.
                </p>
                <span className="">
                    <Link href="/fiscalFAQ" passHref className="nav-item">Fiscal Sponsorship FAQ</Link>
                </span>
                <div className="download-section">
                    <a href="/pdf/myfile.pdf" download>
                        Click here to download the Application for Fiscal Sponsorship.
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Fiscal
