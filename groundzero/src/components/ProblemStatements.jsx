import React from "react";
import styles from "../style";
import StatementCard from "./problem-statement-components/StatementCard";

const ProblemStatements = () => {
  return (
    <div className="problem-statements" id="problems">
      <div className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className="w-full text-center justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h1 className={styles.heading2}>Problem Statements</h1>
        </div>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
          <div className="problem-statement-cards">
            {generateCards()}
          </div>
        </div>
      </div>
    </div>
  );
};

const generateCards = () => {
  let content = [];
  for(let i = 0; i < 3; i++) {
    content.push(
      <div>
        <StatementCard id={i} type="problem"/>
      </div>
    );
  }
  return content;
}

export default ProblemStatements;
