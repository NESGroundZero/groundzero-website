import React from 'react';
import { bokeh2, bokeh3, bokeh4 } from "../../assets";

const BokehBackground = () => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none"> {/* removed fixed positioning */}
            <img
                src={bokeh4}
                alt=""
                className="absolute bottom-[35%] left-[70%] h-[70%] md:h-[70%] xl:h-[100%] opacity-30"
            />
            <img
                src={bokeh2}
                alt=""
                className="absolute bottom-[10%] md:bottom-[-10%] left-[70%] w-[60%] md:w-[70%] xl:w-[60%] xl:opacity-20 opacity-40"
            />
            <img
                src={bokeh3}
                alt=""
                className="absolute top-[10%] left-[-5%] md:left-[0%] -translate-x-1/2 h-[80%] sm:h-[70%] xl:h-[90%] opacity-40"
            />
        </div>
    );
};

export default BokehBackground;