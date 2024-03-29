import React from 'react'
import styles from "../style";
import { groundzero, groundzeroHome, homepage } from '../assets';
import { DisplayButton } from "./index";
import MediaQuery from "react-responsive";

const HomePage = () => {
    return (
        <div>
            <MediaQuery minWidth={769}>
        <div
            className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
        >x  
            <div style={{
                backgroundImage: `url(${homepage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
            }} >
                <div className="grid place-items-center text-white">
                    <br /><br />
                    <br /><br />
                    <div className="font-light text-3xl text-justify">
                    May 11-17th 2024
                    </div>
                    <img src={groundzeroHome} className="w-[450px] h-[150px] mt-10"></img>
                    <DisplayButton isExternal={true} link="https://www.eventbrite.sg/e/ground-zero-2024-tickets-796070988757" text="Sign Up Now" arrow="right" />
                    <div className=" text-white font-bold text-4xl text-center">
                    loading the future, 
                    <br />
                    from the ground up.
                    <br />
                    <br/>
                    <div class="scroll-down"></div>
            </div>
            </div>
            </div></div>
</MediaQuery>

<MediaQuery maxWidth={768} minWidth={361}>
<div
            className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
        >x  
            <div style={{
                backgroundImage: `url(${homepage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
            }} >
                <div className="grid place-items-center text-white">
                    <br /><br />
                    <br /><br />
                    <div className="font-light text-3xl text-justify">
                    May 11-17th 2024
                    </div>
                    <img src={groundzeroHome} className="w-[380px] h-[120px] mt-10"></img>
                    <DisplayButton isExternal={true} link="https://www.eventbrite.sg/e/ground-zero-2024-tickets-796070988757" text="Sign Up Now" arrow="right" />
                    <div className=" text-white font-bold text-4xl text-center">
                    loading the future, 
                    <br />
                    from the ground up.
                    <br />
                    <br/>
                    <div class="scroll-down"></div>
            </div>
            </div>
            </div></div>

</MediaQuery>

<MediaQuery maxWidth={360}>
<div
            className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
        >x  
            <div style={{
                backgroundImage: `url(${homepage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
            }} >
                <div className="grid place-items-center text-white">
                    <br /><br />
                    <br /><br />
                    <div className="font-light text-3xl text-justify">
                    May 11-17th 2024
                    </div>
                    <img src={groundzeroHome} className="w-[310px] h-[110px] mt-10"></img>
                    <DisplayButton isExternal={true} link="https://www.eventbrite.sg/e/ground-zero-2024-tickets-796070988757" text="Sign Up Now" arrow="right" />
                    <div className=" text-white font-bold text-2xl text-center">
                    loading the future, 
                    <br />
                    from the ground up.
                    <br />
                    <br/>
                    <div class="scroll-down"></div>
            </div>
            </div>
            </div></div>

</MediaQuery>

            </div>
    )
}

export default HomePage