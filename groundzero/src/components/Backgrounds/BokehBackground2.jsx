import React from 'react';
import { bokeh5, bokeh5b, bokeh6, bubble1 } from "../../assets";

const BokehBackground2 = () => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none"> {/* removed fixed positioning */}
            <img
                src={bokeh5}
                alt=""
                className="absolute rotate-[180deg] bottom-[20%] lg:bottom-[-55%] right-[35%] lg:right-[60%] h-[100%] lg:h-[200%] opacity-50"
            />
            <img
                src={bokeh5b}
                alt=""
                className="absolute bottom-[-20%] lg:bottom-[-55%] left-[35%] lg:left-[60%] h-[100%] lg:h-[200%] opacity-80"
            />
            <img
                src={bubble1}
                alt=""
                className="absolute bottom-[05%] left-[0%] sm:left-[0%] w-[20%] sm:w-[10%] opacity-30"
            />
            <img
                src={bubble1}
                alt=""
                className="absolute rorate-[140deg] top-[05%] sm:top-[0%] right-[0%] sm:right-[0%] w-[20%] sm:w-[10%] opacity-30"
            />

        </div>
    );
};

export default BokehBackground2;