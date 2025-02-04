import React from 'react';
import styles from "../style";
import { groundzeroHome, homebackgroundearthvideo } from '../assets';
import { DisplayButton, CountdownTimer } from "./index";
import MediaQuery from "react-responsive";
import { groundZeroStartDate } from '../constants';
import NotificationBar from './NotificationBar';

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
            <div className={`${styles.paddingY} ${styles.flexCenter} flex-col relative min-h-screen z-20`}>                {/* Video Background */}
                <div
                    className="video-background-container"
                    style={{
                        width: '100vw',
                        height: 'max(100vh, 50rem)',
                        position: 'absolute',
                        overflow: 'hidden',
                        zIndex: 0,
                    }}
                >
                    <video
                        src={homebackgroundearthvideo}
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
                            objectPosition: '10% top',
                            zIndex: 0,
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 1,
                        }}
                    />

                </div>

                {/* Content Overlay */}
                <div className="grid place-items-center text-white relative" style={{ zIndex: 1 }}>
                    <br /><br />
                    <div className="font-light text-xl text-justify mt-16">
                        Sign up for May 2025 is open!
                    </div>
                    <img
                        src={groundzeroHome}
                        className={`${config.imageWidth} ${config.imageHeight} mt-7`}
                        alt="GroundZero Home"
                    />
                    <br />
                    <DisplayButton
                        isExternal={false}
                        link="/partners"
                        text="Become a Sponsor"
                    />
                    <br />
                    <DisplayButton
                        isExternal={true}
                        link="https://www.eventbrite.sg/e/ground-zero-2025-tickets-1126561468679?aff=oddtdtcreator"
                        text="Register Now"
                        variant="primary"
                    />
                    <div className={`text-white font-bold ${config.sloganFontSize} text-center pt-8 pb-3`}>
                        Loading From Zero,
                        <br />
                        a Groundbreaking Tomorrow.
                        <br />
                    </div>
                    <CountdownTimer eventDate={new Date(groundZeroStartDate).getTime()} eventName="Ground Zero 2025" />
                    <br />
                    {/* Scroll Down Button */}
                    <div className="justify-center items center">
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
