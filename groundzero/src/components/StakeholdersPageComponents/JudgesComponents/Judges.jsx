import { judges } from "../../../constants";
import JudgeCard from "./JudgeCard";
import React from 'react';
import styles from "../../../style";
import { getCategoryColor } from "../StakeholdersPageUtils";

const Judges = () => {
  return (
    <section className="bg-primary xs:px-16 ss:px-8 sm:px-2 md:px-4 lg:px-8">
      <div className={`${styles.boxWidth} mx-auto`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {judges.map((judge) => (
            <JudgeCard
              judge={judge}
              hoverColor={getCategoryColor(judge.AreaOfFocus)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Judges;