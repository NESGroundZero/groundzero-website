import React from 'react'
import styles from "../style";
import { groundzero, homebg } from '../assets';

const HomePage = () => {
    return (
        <div
            className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
        >
            <div style={{
                backgroundImage: `url(${homebg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
            }} >
                <div className="grid place-items-center text-white">
                    <br /><br />
                    <img src={groundzero} className="w-[300px] h-[150px]"></img>
                    <br />
                    <div className="font-bold text-4xl pb-12 text-center">
                        Ground Zero 2023
                        <br /><br />
                        The Largest Student-led Startathon in the Region
                        <br />
                    </div>
                    <div className="font-light text-3xl pb-12 text-justify">
                        14-26 April 2023
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage