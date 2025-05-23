import React from 'react';
import styles from "../../style";
import { groundzeroHome, homebackgroundearthvideo, homebackgroundearthvideo_poster } from '../../assets';
import { DisplayButton, CountdownTimer } from "../index";
import MediaQuery from "react-responsive";
import { groundZeroStartDate } from '../../constants';

const HomePageVideo = () => {
    // Scroll to the next section when the scroll-down div is clicked
    const scrollToNextSection = () => {
        const problemStatementsSection = document.getElementById('problem-statements'); // Target section
        if (problemStatementsSection) {
            problemStatementsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const renderContent = (config) => {
        return (
            <div className={`pt-12 ${styles.flexCenter} flex-col relative  min-h-screen z-20`}>                {/* Video Background */}
                <div
                    className="video-background-container"
                    style={{
                        width: '100vw',
                        height: 'max(100vh, 50rem)',
                        position: 'absolute',
                        zIndex: 0,
                    }}
                >
                    <video
                        src={homebackgroundearthvideo}
                        poster={homebackgroundearthvideo_poster}
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
                        Get Ready for Ground Zero!
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
                        link="https://www.canva.com/design/DAGmyjPk6Y0/ALhlWsTB2bA9eT2I0Yejcg/view?utm_content=DAGmyjPk6Y0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdfecb5a539"
                        text="View Programme"
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

export default HomePageVideo;
