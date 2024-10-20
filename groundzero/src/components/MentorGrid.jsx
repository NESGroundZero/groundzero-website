import styles from "../style";
import { linkedin } from "../assets";
import React, { useState } from 'react';
import MentorCard from './MentorCard';
import { mentors } from '../constants';

const MentorGrid = ({ list }) => {
    const [currMentor, setCurrMentor] = useState({});
    const [openCard, setOpenCard] = useState(false);

    const openMentorCard = () => { 
        setOpenCard(true);

        // Disables Background Scrolling whilst the Mentor Card is open
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

    return (
        <div className={`bg-primary xs:px-16 ss:px-8 sm:px-2 md:px-4 lg:px-8`}>
            <div className={`${styles.boxWidth}`}>
                <div className="grid gap-8 ss:grid-cols-2 ss:gap-4 sm:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-1">
                {list.map((mentor) => (
                <div className="relative w-80 h-80 ss:w-60 ss:h-60 sm:w-80 sm:h-80 md:w-64 md:h-64 lg:w-60 lg:h-60 bg-black grid place-items-center">
                    {/* Speaker Img */}
                    <img 
                    src={mentor.imgsrc}
                    className="object-fit w-80 h-80 ss:w-60 ss:h-60 sm:w-80 sm:h-80 md:w-64 md:h-64 lg:w-60 lg:h-60">
                    </img>

                    {/* Desc */}
                    <div className="w-full h-full md:opacity-0 md:hover:opacity-100 z-10 transition ease-in-out text-white">
                        <div className="bg-gradient-to-t w-full h-full from-black absolute text-left bottom-0 left-0">
                            <div className="absolute bottom-0 left-0 p-4 align-text-bottom">
                                <h2 className="text-xl font-bold">
                                    {mentor.title}
                                </h2>
                                <h2 className="text-[15px] font-semibold">
                                    {/* {mentor.subtitle[0]} */}
                                    {mentor.subtitle.join(", ")}
                                </h2>
                                <h2 className="text-sm font-light">
                                    {/* {mentor.info[0]} */}
                                    {mentor.info.join(", ")}
                                </h2>
                            </div>
                            <a href={mentor.personalLink} target="_blank" className="absolute p-4 top-0 right-0 hover:scale-110 transition ease-in-out delay-75">
                                <img src={linkedin} className="h-[25px]"/>
                            </a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            {
                openCard && 
                <MentorCard mentor={currMentor} setOpenCard={setOpenCard} setCurrMentor={setCurrMentor}/>
            }
            </div>
        </div>
    );
}

export default MentorGrid