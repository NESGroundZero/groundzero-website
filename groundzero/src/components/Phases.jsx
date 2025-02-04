import React from "react";
import groundZeroImage from "../assets/groundZeroPhases.png";
import phaseZeroImage from "../assets/phaseZero.png";
import beyondZeroImage from "../assets/beyondZero.png";
import { pastEvent12, pastEvent13, pastEvent14 } from "../assets";
import styles from "../style";

import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Check if the screen is 'xs' (max-width: 640px)
      const isXS = window.matchMedia('(max-width: 640px)').matches;
      if (isXS) {
        setIsIntersecting(entry.isIntersecting);
      } else {
        setIsIntersecting(false);
      }
    }, options);
  
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
  
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);
  
  return [elementRef, isIntersecting];
};

const Phase = ({ image, description, backgroundImage }) => {
  const [ref, isInCenter] = useIntersectionObserver({
    threshold: 0.95,
    rootMargin: '-20% 0px -20% 0px'
  });

  return (
    <div 
      ref={ref}
      className={`lg:w-1/3 relative group cursor-pointer ${isInCenter ? 'touch-auto' : ''}`}
    >
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300
          ${isInCenter ? 'opacity-80' : 'opacity-20 group-hover:opacity-80'}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div 
        className={`absolute w-full h-2/3 translate-y-1/2 transition-opacity duration-300
          ${isInCenter ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
        style={{background: 'linear-gradient(to top, rgba(0, 119, 181, 0.9), rgba(0, 19, 42, 0))'}}
      />
      <div className="flex flex-col items-center py-10 relative z-10">
        <img 
          src={image} 
          alt="Phase" 
          className={`mb-2 py-10 px-10 h-[11.875rem] object-contain transition-opacity duration-300
            ${isInCenter ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}
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
    <div className={`${styles.paddingY} ${styles.paddingX} text-center py-12 min-h-screen justify-center flex flex-col items-center`}>
      <h2 className={styles.heading7 + " py-14 mt-15"}>PHASES</h2>
      <h2 className="text-white font-poppins font-lighter md:text-2xl text-xl xs:px-16 lg:px-40 z-10">Expanding our trajectory beyond the conventional Starthaton, we introduce our unique extensions to Ground Zero: Phase Zero and Beyond Zero. </h2>
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
  );
};

export default Phases;