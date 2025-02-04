import React from "react";
import MediaQuery from "react-responsive";
import { useState } from "react";
import styles from "../style";

const Eligibility = () => {

  const [teamsHovered, setTeamsHovered] = useState(false);
  const [studentsHovered, setStudentsHovered] = useState(false);

  const handleTeamsHover = () => {
    setTeamsHovered(!teamsHovered);
  };

  const handleStudentsHover = () => {
    setStudentsHovered(!studentsHovered);
  };

  return (
    <div>
      <MediaQuery minWidth={768}>
        <div className="p-20" id="eligibility" >
          <div
            className="flex flex-col items-center justify-center  bg-dark-blue text-white relative font-poppins font-thin"
          >
            <h2 className={styles.heading7 + " mb-14 relative"}>ELIGIBILITY CRITERIA</h2>
            <div className="before:absolute w-1/2 border-b-2 border-white transform -rotate-[135deg] translate-y-80 sm:translate-y-"></div>

            <div
              className={`flex flex-col items-center justify-center mt-8 z-10 relative translate-y-28 translate-x-36 sm:translate-y-35`}
              onMouseEnter={handleTeamsHover}
              onMouseLeave={handleTeamsHover}
            >
              <p className="text-4xl font-poppins font-thin text-orange">
                {teamsHovered ? "You can sign up as" : "TEAMS OF"}
              </p>
              <p className="text-4xl font-poppins font-thin text-orange">
                {teamsHovered ? "an individual too!" : "3-5"}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-8 mb-40 z-10 relative text-purple translate-y-56 -translate-x-36 sm:translate-y-70">
              <p className="text-5xl font-poppins font-thin">TERTIARY</p>
              <p className="text-5xl font-poppins font-thin">STUDENTS*</p>


            </div>
          </div>
          <div className="text-center text-sm text-gray-500 mt-40">
            *including Polytechnic, JC, ITE, NFS & alumni of up to 5 years
          </div>
        </div>

      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <div className="p-20" id="eligibility">
          <div

            className="flex flex-col items-center justify-center bg-dark-blue text-white relative font-poppins font-thin"
          >
            <h2 className={styles.heading7 + " mb-14 relative"}>ELIGIBILITY CRITERIA</h2>
            <div className="flex flex-col items-center">
              <h2 className="text-lg text-center z-10 relative">You can sign up as an individual too!</h2>
              <div>        <div className="before:absolute w-[130%] border-b-2 border-white transform -rotate-[135deg] translate-y-32 sm:translate-y-35"></div>
                <div className="flex flex-col items-center justify-center mt-8 z-10 relative text-orange translate-y-50 translate-x-20 sm:translate-y-70">
                  <p className="text-2xl font-poppins font-thin">TEAMS OF</p>
                  <p className="text-2xl font-poppins font-thin">3-5</p>
                </div>
                <div className="flex flex-col items-center justify-center mt-8 z-10 relative text-purple translate-y-50 -translate-x-20 sm:translate-y-70">
                  <p className="text-2xl font-poppins font-thin">TERTIARY</p>
                  <p className="text-2xl font-poppins font-thin">STUDENTS*</p>
                </div>
              </div>
            </div>
            <div className="text-center -translate-x-55 text-sm text-gray-500 mt-10 mb-40">
              *including Polytechnic, JC, ITE, NFS & alumni of up to 5 years
            </div>
          </div>
        </div>
      </MediaQuery>

    </div>
  );
};

export default Eligibility;
