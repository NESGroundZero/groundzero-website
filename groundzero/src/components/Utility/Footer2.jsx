import React from 'react';
import "../../index.css";
import { MdEmail } from "react-icons/md";

function Footer2() {
    return (
        <div className="footer bg-darkBlue text-white text-center p-4">
            <h1 className="text-xl">
                Partner with us?
                <a
                    href="mailto:nesgroundzero@gmail.com"
                    className="text-blue-200 ml-2 flex justify-center items-center"
                >
                    <MdEmail className="mr-2" /> nesgroundzero@gmail.com
                </a>
            </h1>
        </div>
    );
}

export default Footer2;
