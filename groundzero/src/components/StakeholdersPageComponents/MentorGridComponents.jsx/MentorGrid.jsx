import styles from "../../../style";
import React from 'react';
import MentorBox from "./MentorBox";
import { getCategoryColor } from '../StakeholdersPageUtils';

const MentorGrid = ({ list, hoverColor }) => {
    return (
        <div className={`bg-primary max-w-[67rem] mx-auto xs:px-16 ss:px-8 sm:px-2 md:px-4 lg:px-8`}>
            <div className={`${styles.boxWidth}`}>
                <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
                {list.map((mentor, index) => (
                    <MentorBox 
                        key={index} 
                        stakeholder={mentor} 
                        hoverColor={hoverColor || getCategoryColor(mentor.AreaOfFocus)} 
                    />
                ))}
                </div>
            </div>
        </div>
    );
}

export default MentorGrid;