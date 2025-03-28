import React from 'react';
import { waves1, waves2 } from "../../assets";

const WavesBackground = () => {
    return (
        <div>
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <div className="relative w-full h-full">
                <img
                    src={waves1}
                    alt="" 
                    className="absolute w-[110%] opacity-60 left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 rotate-[8deg]"
                />                
                </div>
            </div>
        </div>
    );
};
export default WavesBackground;