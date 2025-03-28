import React from "react";
import {groundZeroImage, phaseZeroImage, beyondZeroImage} from "../../assets";
import { pastEvent12, pastEvent13, pastEvent14 } from "../../assets";
import styles from "../../style";
import ScreenSizeIndicator from "../Utility/ScreenSizeIndicator";
import SectionDivider from "../Utility/SectionDivider";


const Phase = ({ image, description, backgroundImage }) => {
  return (
    <div className="lg:w-1/3 relative group cursor-pointer z-10">
      <div className="absolute inset-0 opacity-100 bg-darkBlue z-5" />
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-20 group-hover:opacity-80"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div 
        className="absolute w-full h-2/3 translate-y-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{background: 'linear-gradient(to top, rgba(0, 119, 181, 0.9), rgba(0, 19, 42, 0))'}}
      />
      <div className="flex flex-col items-center py-10 relative z-10">
        <img 
          src={image} 
          alt="Phase" 
          className="mb-2 py-10 px-10 h-[11.875rem] object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
        />
        <p className="text-gray-300 text-sm xs:text-lg md:text-lg px-4 font-poppins">{description}</p>
      </div>
    </div>
  );
};

const Phases = () => {
  const phaseInfo = [
    {
      image: phaseZeroImage,
      backgroundImage: pastEvent12,
      description: "Gain insights and hone your skills in exclusive masterclasses led by industry experts, meet potential team members, and set the stage for success!",
    },
    {
      image: groundZeroImage,
      backgroundImage: pastEvent13,
      description: "Pitch your ideas for a share of the $10,000 prize pool. Forge valuable relationships and gain personal mentorships from experienced players in the field!",
    },
    {
      image: beyondZeroImage,
      backgroundImage: pastEvent14,
      description: "In collaboration with The Hanger, Ground Zero can provide support for your winning idea and make it into a reality!",
    },
  ];

  return (
    <div id="phases" className="w-full relative">
    <div className={`${styles.paddingX} ${styles.paddingY} text-center justify-center flex flex-col items-center`}>
      <h2 className={styles.heading7 + " pb-14"}>PHASES</h2>
      <h2 className="text-white font-poppins font-lighter md:text-2xl text-xl xs:px-16 lg:px-40 z-10">
        Expanding our trajectory beyond the conventional Starthaton, we introduce our unique extensions to Ground Zero: Phase Zero and Beyond Zero.
      </h2>
      <br></br><br></br><br></br>
      <div className="flex flex-wrap justify-center">
        {phaseInfo.map((phase, index) => (
          <Phase 
            key={index} 
            image={phase.image} 
            description={phase.description}
            backgroundImage={phase.backgroundImage}
          />
        ))}
      </div>
    </div>
    <SectionDivider spacing={1.5} />
    </div>
  );
};

export default Phases;