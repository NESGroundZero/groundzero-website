import React from 'react';
import styles from "../../../style";
import PanelistsCategory from './PanelistsCategory';
import { panelists } from '../../../constants';
import { getCategoryColor } from '../StakeholdersPageUtils/index.jsx';

const Panelists = () => {
    const categories = Object.keys(panelists);

    return (
        <div className={`bg-primary xs:px-16 ss:px-8 sm:px-2 md:px-4 lg:px-8`}>
            <div className={`${styles.boxWidth}`}>
            {categories.map((category, index) => (
                <div className="flex justify-center" key={index}>
                <PanelistsCategory
                    areaOfFocus={category}
                    hoverColor={getCategoryColor(category)}
                    panelistsList={panelists[category]}
                />
                </div>
            ))}
            </div>
        </div>
    );
};

export default Panelists;