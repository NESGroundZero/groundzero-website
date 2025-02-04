import React from 'react';
import { bokeh1, bokeh2, bokeh3 } from "../../assets";

const BokehBackground = () => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none"> {/* removed fixed positioning */}
            <img
                src={bokeh1}
                alt=""
                className="absolute bottom-[45%] right-[-10rem] h-[70%] md:h-[70%] xl:h-[100%] opacity-40"
            />
            <img
                src={bokeh2}
                alt=""
                className="absolute bottom-[10%] md:bottom-[-10%] left-[70%] w-[60%] md:w-[70%] xl:w-[60%] opacity-30 lg:hidden"
            />
            <img
                src={bokeh3}
                alt=""
                className="absolute top-[10%] left-[-5%] md:left-[0%] -translate-x-1/2 h-[80%] sm:h-[70%] xl:h-[90%] opacity-50"
            />
        </div>
    );
};

export default BokehBackground;