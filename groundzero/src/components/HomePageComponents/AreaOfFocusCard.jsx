import React, { useState } from 'react';

const AreaOfFocusCard = ({ details, area, image }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div
            className="relative w-64 md:w-80 h-[15rem] md:h-[22rem] xl:h-96 [perspective:1000px]"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className={`relative mx-auto w-full max-w-[210px] md:max-w-[290px] h-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                {/* Front */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg [backface-visibility:hidden]">
                    <div className="flex flex-col items-center justify-center h-full text-white">
                        <div className="text-center">
                            <div className={`${area === 'Health & Wellness' || 'Sustainability' ? 'text-lg md:text-3xl' : 'text-xl md:text-4xl'} font-bold mb-2 md:mb-4`}>
                                {area}
                            </div>              
                            {image && <img src={image} alt={area} className="w-16 h-16 md:w-32 md:h-32 object-contain mb-2 md:mb-4 mx-auto" />}
                            <button className="px-4 py-1.5 md:px-6 md:py-2 mt-1 md:mt-2 bg-white text-blue2 text-xs md:text-base rounded-full hover:bg-gray-100 transition-colors" onClick={handleFlip}>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Back */}
                <div className="absolute mx-auto inset-0 w-full max-w-[210px] md:max-w-[290px] h-full bg-white rounded-xl shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="pt-2 md:pt-4 text-center">
                        <h4 className="text-lg md:text-2xl font-bold mt-2 md:mt-4 text-blue2">{area}</h4>
                    </div>
                    <div className="px-3 md:px-2 py-2 md:py-4">
                        <ul className="space-y-0 md:space-y-1">
                            {details.map((detail, index) => (
                                <li key={index} className="text-gray-800 font-poppins font-light text-xs md:text-base px-2 md:px-4" style={{ textAlign: 'auto'}}>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AreaOfFocusCard;