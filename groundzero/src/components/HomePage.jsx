import React from 'react';
import styles from "../style";
import { groundzeroHome, homebackgroundastervoidvideoblue } from '../assets';
import { DisplayButton, CountdownTimer } from "./index";
import MediaQuery from "react-responsive";
import { groundZeroStartDate } from '../constants';

const HomePage = () => {
    // Scroll to the next section when the scroll-down div is clicked
    const scrollToNextSection = () => {
        const problemStatementsSection = document.getElementById('problem-statements'); // Target section
        if (problemStatementsSection) {
            problemStatementsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const renderContent = (config) => {
        return (
            <div className={`${styles.paddingY} ${styles.flexCenter} flex-col relative h-screen`}>
                {/* Video Background */}
                <div
                    className="video-background-container"
                    style={{
                        width: '100vw',
                        height: '100vh',
                        position: 'absolute',
                        overflow: 'hidden',
                        zIndex: 0,
                    }}
                >
                    <video
                        src={homebackgroundastervoidvideoblue}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="video-background"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 0,
                        }}
                    />
                </div>

                {/* Content Overlay */}
                <div className="grid place-items-center text-white relative" style={{ zIndex: 1 }}>
                    <br /><br />
                    <div className="font-light text-2xl text-justify mt-16">
                        {config.dateText}
                    </div>
                    <img
                        src={groundzeroHome}
                        className={`${config.imageWidth} ${config.imageHeight} mt-10`}
                        alt="GroundZero Home"
                    />
                    <br/>
                    <DisplayButton
                        isExternal={false}
                        link="/partners"
                        text="Become a Sponsor"
                        variant="primary"
                    />
                    <br/>
                    <DisplayButton
                        isExternal={true}
                        link="https://www.instagram.com/nesgroundzero"
                        text="Find Out More"
                    />
                    <div className={`text-white font-bold ${config.sloganFontSize} text-center mt-8`}>
                        Loading From Zero,
                        <br />
                        a Groundbreaking Tomorrow.
                        <br />
                    </div>
                    <CountdownTimer eventDate={ new Date(groundZeroStartDate).getTime() } eventName="Ground Zero 2025" />
                    <br />
                    {/* Scroll Down Button */}
                    <div className = "justify-center items center">
                        <div className="scroll-down" onClick={scrollToNextSection}></div>
                    </div>
                </div>
            </div>
        );
    };

    const configurations = [
        {
            minWidth: 769,
            dateText: 'Coming May 2025',
            imageWidth: 'w-[450px]',
            imageHeight: 'h-[150px]',
            sloganFontSize: 'text-2xl',
        },
        {
            minWidth: 401,
            maxWidth: 768,
            dateText: 'Coming May 2025',
            imageWidth: 'w-[370px]',
            // imageHeight: 'h-[120px]',
            sloganFontSize: 'text-lg',
        },
        {
            maxWidth: 400,
            dateText: 'Coming May 2025',
            imageWidth: 'w-3/5',
            // imageHeight: 'h-[110px]',
            sloganFontSize: 'text-lg',
        },
    ];

    return (
        <div>
            {configurations.map((config, index) => (
                <MediaQuery key={index} minWidth={config.minWidth} maxWidth={config.maxWidth}>
                    {renderContent(config)}
                </MediaQuery>
            ))}
        </div>
    );
};

export default HomePage;
