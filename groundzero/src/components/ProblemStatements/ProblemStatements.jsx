import React from "react";
import styles from "../../style";
import StatementCard from "./problem-statement-components/StatementCard";
import { blob } from "../../assets";
import { useState, useEffect } from "react";
import { problemStatements } from "../../constants/index";

const ProblemStatements = () => {
  const [probState, setProbState] = useState([]);
  return (
    <div className="problem-statements" id="problems">
      <div
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
      >
        <div className="text-white relative font-poppins font-thin w-full text-center justify-between items-center md:flex-row flex-col sm:mb-16 mb-4 relative z-[1]">
          <h2 className="text-5xl mb-20 z-10 relative">FOCUS AREAS</h2>
          <h2 className="text-xl mb-18 z-10 relative">
            Choose your world to load your future in! Participants can develop
            ideas within the following 4 areas of focus:
          </h2>
        </div>
        <div className="flex flex-col items-center w-full px-12 group">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12 mx-auto w-full">
            {generateCards(setProbState)}
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full text-center mt-4">
            <div className="text-white">
              <p>Problem Statements:</p>
              {probState.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

const generateCards = (setProbState) => {
  let content = [];
  for (let i = 0; i < problemStatements.length; i++) {
    content.push(
      <div
        key={problemStatements[i].id}
        onMouseEnter={() => setProbState(problemStatements[i].details)}
        onMouseLeave={() => setProbState([])}
      >
        <StatementCard id={problemStatements[i].id - 1} type="problem" />
      </div>
    );
  }
  return content;
};

export default ProblemStatements;
