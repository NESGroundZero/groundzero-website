import { judges } from "../../../constants";

import React from 'react';
import styles from "../../../style";
import JudgeCategory from './JudgeCategory';
import { getCategoryColor } from '../StakeholdersPageUtils';

const Judges = () => {
  // Get all categories from the judges data
  const categories = Object.keys(judges);

  return (
    <section className={`bg-primary xs:px-16 ss:px-8 sm:px-2 md:px-4 lg:px-8`}>
      <div className={`${styles.boxWidth} mx-auto`}>
          {/* Map through all categories */}
          {categories.map((category, index) => (
            <div className="flex justify-center" key={index}>
              <JudgeCategory
                areaOfFocus={category}
                judgesList={judges[category]}
                hoverColor={getCategoryColor(category)}
              />
            </div>
          ))}
        </div>
    </section>
  );
};

export default Judges;