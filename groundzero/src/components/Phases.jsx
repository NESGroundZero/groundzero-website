import React from "react";
import groundZeroImage from "../assets/groundZeroPhases.png";
import phaseZeroImage from "../assets/phaseZero.png";
import beyondZeroImage from "../assets/beyondZero.png";
import styles from "../style";

const Phase = ({ image, description }) => {
  return (
    <div className={`flex flex-col items-center py-10 md:w-1/3 xs:px-16`}>
      <img src={image} alt="Phase" className="mb-2 py-10 px-4" />
      <p className="text-gray-300 text-lg font-poppins">{description}</p>
    </div>
  );
};

const Phases = () => {
  const phaseInfo = [
    {
      image: phaseZeroImage,
      description: "Gain insights and hone your skills in exclusive masterclasses led by industry experts, meet potential team members, and set the stage for success!",
    },
    {
      image: groundZeroImage,
      description: "Pitch your ideas for a share of the $10,000 prize pool. Forge valuable relationships and gain personal mentorships from experienced players in the field!",
    },
    {
      image: beyondZeroImage,
      description: "In collaboration with Atlas Incubators, receive support for your winning idea and make it into a reality!",
    },
  ];

  return (
    <div className={`${styles.paddingY} ${styles.paddingX} text-center py-12`}>
      <h2 className={styles.heading7 + " py-14 mt-15"}>PHASES</h2>
      <h2 className="text-white font-poppins font-lighter md:text-2xl text-xl xs:px-16 lg:px-40 z-10">Expanding our trajectory beyond the conventional Starthaton, we introduce our unique extensions to Ground Zero: Phase Zero and Beyond Zero. </h2>
      <div className="flex flex-wrap justify-center">
        {phaseInfo.map((phase, index) => (
          <Phase key={index} image={phase.image} description={phase.description} />
        ))}
      </div>
    </div>
  );
};

export default Phases;