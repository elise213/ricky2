import React from 'react';
import Image from 'next/image';
import styles from '../styles/sticker.css';

const Sticker = (props) => {

    console.log(props.sticker)
    let option = null;
    let new1 = "/img/New.png";
    let new2 = "/img/newrsticker.png";
    let staff = "/img/staff2.png";

    if (props.sticker && props.sticker.category2) {
        if (props.sticker.category2 === "new") {
            option = new1;
        } else if (props.sticker.category2 === "staff") {
            option = staff;
        } else if (props.sticker.category2 === "newtofree") {
            option = new2;
        }
    }

    console.log("STICKER", props.sticker);

    return (
        <div className='sticker-container'>
            {option && (
                <Image className="sticker" src={option} height={80} width={80} />
            )}
        </div>
    );
};

export default Sticker;
