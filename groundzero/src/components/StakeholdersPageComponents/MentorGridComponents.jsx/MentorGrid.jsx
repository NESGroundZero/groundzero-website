import styles from "../../../style";
import React from 'react';
import MentorBox from "./MentorBox";

const MentorGrid = ({ list }) => {
    return (
        <div className={`bg-primary xs:px-16 ss:px-8 sm:px-2 md:px-4 lg:px-8`}>
            <div className={`${styles.boxWidth}`}>
                <div className="grid gap-8 grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
                {list.map((mentor, index) => (
                    <MentorBox 
                        key={index} 
                        stakeholder={mentor} 
                        hoverColor="#0077B5" // Using the hex value directly
                    />
                ))}
                </div>
            </div>
        </div>
    );
}

export default MentorGrid;