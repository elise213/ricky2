import React from "react";
import styles from "./services.css";
import Link from 'next/link';

const Services = () => {
    return (
        <div className="services-container">
            <h1>OUR SERVICES</h1>
            <p className="services">
                Diversified real estate company providing investment advisory,
                management, leasing, financing, sales and consulting services for
                quality commercial properties located throughout the United States. With
                over twenty-five nearly forty years of experience as owners, investors
                and managers of commercial real estate, founding partners Issac Fisher
                and Robert Berrin have developed an expert understanding on how to
                navigate through the most complex real estate challenges.
            </p>
            <hr className="new1" />
            <h1>BROAD BASED CONSULTING SERVICES </h1>{" "}
            <p className="services">
                The principals of Capital Realty Services are well aware of the
                difficulties that owners of commercial property face in determining how
                to maximize the value of their existing real estate holdings…whether to
                retain property ownership…redevelop and/or reposition a property…or
                dispose of same through a comprehensive marketing and sale program. We
                provide the necessary advice and consulting services to assist our
                clients in analyzing the various alternatives and in selecting the best
                third party providers to handle the process from beginning to end.
            </p>
            <hr className="new1" />
            <h1>ADDITIONAL SERVICES</h1>{" "}
            <p className="services">
                We provide our clients with a broad range of services to meet your real
                estate needs. Please select one of the following firm services for
                detailed information. Sales and Acquisitions Mortgage Financing
                Investment Tenant Representation & Site Selection Leasing &
                Property/Asset Management Consulting & Litigation Support
            </p>
            <hr className="new1" />
            <h1>SALES & ACQUISITIONS</h1>{" "}
            <p className="services">
                As your trusted adviser in commercial real estate investment sales and
                acquisitions, our focus is to find the best assets for your portfolio,
                determine capital solutions, assess long-term risks, and forecast future
                market values. Sales Capital Realty professionals are specialists at
                packaging, marketing and negotiating commercial real estate sales
                offerings that result in closed transactions at the most advantageous
                pricing for our seller. We have the connections and expertise to seek
                out and attract institutional and private investors, and our track
                record reflects disposition of single properties for the individual
                investor as well as portfolio sales in excess of $100 million for
                institutional owners. We are committed to guide the transaction from
                beginning to end, realizing our clients most aggressive sales
                expectations. We create and enhance the value of each transaction by
                providing clients with executable advice, closing expertise, and
                up-to-the-minute knowledge of the market. And each transaction is
                marketed to strengthen offer prices and create optimal buyer
                performance. Acquisitions Acquisitions for the firm’s clients focus on
                achieving their comprehensive yield goals in terms of both annual cash
                flow requirements and overall return upon the project’s disposition. We
                search continuously for commercial property that can be purchased at
                values reflective of strong investment potential for both clients and
                investors/partners. And, we leverage our extensive network of private
                and institutional investors and our in-house expertise to shepherd
                clients through complex acquisition or disposition processes.
            </p>{" "}
            <hr className="new1" />
            <h1>MORTGAGE FINANCING </h1>
            <p className="services">
                Our longevity and experience through a variety of real estate cycles
                gives us the capabilities and expertise to deliver a full menu of
                attractive financing alternatives. Our creative abilities and innovative
                solutions, together with our commitment to obtain the most favorable
                transactions, assures our clients exposure to a large variety of
                alternatives consistent with their desired goals. We have structured
                acquisition, development, and refinancing debt on all types of
                commercial properties, including office, retail, industrial, apartments,
                hotels, residential developments and net leased properties. We bring
                in-depth market knowledge, negotiating skills and dedication to every
                transaction.
            </p>{" "}
            <hr className="new1" />
            <h1>TENANT REPRESENTATION </h1>
            <p className="services">
                Drawing upon our years of experience and knowledge representing both
                tenants and landlords, together with our many years of experience as
                landlords, we provide tenant representation services for businesses
                looking to lease space in retail, office, and industrial properties. We
                can help you identify and select the best space for your business, limit
                your risk and liabilities and get you the best possible terms.
            </p>{" "}
            <hr className="new1" />
            <h1>SITE SELECTION </h1>
            <p className="services">
                Capital Realty Services provides our clients with site selection
                services throughout Florida.Whether it’s a new business or an expansion,
                we handle everything—from finding the right trade area, to site
                selection, competitive analysis, price requirements, and term
                negotiations.Our knowledge of the market, and our knowledge of our
                clients and their business needs ensures quality results. LEASING Our
                team has been responsible for project leasing of millions of square feet
                of commercial space on behalf of property owners, from retail to
                warehouse to Class A office space.
            </p>{" "}
            <hr className="new1" />
            <h1>PROPERTY/ASSESSMENT MANAGEMENT</h1>{" "}
            <p className="services">
                Our innovative and rigorous property management strategies help our
                clients enhance their bottom line and streamline operating costs—all
                while maintaining a superior environment for tenants. Our broad scope of
                high-level property and asset management services include coordinating
                renovation and expansion rojects, developing operating budgets, and
                handling all aspects of leasing. All of our integrated services are
                designed to improve the performance and value of our clients’ real
                estate holdings, managing your investment as if it were our own.{" "}
            </p>
            <hr className="new1" />
            <h1>CONSULTING & LITIGATION SUPPORT</h1>{" "}
            <p className="services">
                From expert testimony to forensic real estate analysis to receivership
                to navigating a complex litigation terrain, we provide expert support to
                resolve disputes of real estate clients. CapitalRealty’s two principals
                are attorneys with substantial transactional and litigation experience,
                coupled with more than 75 combined years of ownership and operation of
                commercial and residential properties. These professionals provide the
                wisdom, insight and analysis that only a real estate professional can to
                navigate through the most complicated real estate issues.
            </p>
            <hr className="new1" />
            <h1> INVESTMENTS </h1>{" "}
            <p className="services">
                As long-time owners and investors—throughout all market conditions and
                cycles—Capital Realty is a trusted and respected commercial real estate
                investor. Our focus is on opportunistic real estate acquisitions that
                deliver unprecedented value to our investors/partners.
            </p>
            <div>
                <Link href="/portfolio" className="btn bio-btn float">VIEW OUR PORTFOLIO</Link>
            </div>

        </div>
    );
};

export default Services;
