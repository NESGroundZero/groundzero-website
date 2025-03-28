import React from 'react';
import AreaOfFocusCard from './AreaOfFocusCard';
import { data_tech, sustainability, finance, health_and_wellness } from '../../assets';
import styles from '../../style';
import SectionDivider from '../Utility/SectionDivider';

const cardsData = [
  {
    details: [
      "From AI to big data, the tech frontier offers endless opportunities for exploration.",
      "Join Ground Zero to create tools and systems that transform the way we live and work!",
    ],
    area: "Data Tech",
    image: data_tech
  },
  {
    details: [
      "From the rise of fintech to the challenges of decentralised currencies, finance continues to shape the global economy.",
      "Get ready to change the way we earn, save, and invest at Ground Zero!"
    ],
    area: "Finance",
    image: finance
  },
  {
    details: [
      "Reimagining how we care for our minds and bodies is more critical than ever.",
      "Whether it is mental or physical health, Ground Zero is your platform to explore solutions for a healthier tomorrow!"
    ],
    area: "Health & Wellness",
    image: health_and_wellness
  },
  {
    details: [
      "Sustainability is more than just a buzzword. It defines our future.",
      "Ground Zero invites you to create sustainable solutions that balance growth with environmental responsibility."
    ],
    area: "Sustainability",
    image: sustainability
  }
];

const AreaOfFocus = () => {
  return (
    <div id="area-of-focus" className="w-full relative">
    <div className={`${styles.paddingY} px-30`}>
      <h2 className={`${styles.heading7} pb-14`}>AREAS OF FOCUS</h2>
      <h2 className="text-white font-poppins font-lighter text-center pb-20 md:text-2xl text-xl xs:px-16 lg:px-40 z-10">
        This year, Ground Zero 2025 spotlights four transformative focus areas shaping the future: Data Tech, Finance, Health & Wellness, and Sustainability.
      </h2>
      <div className="max-w-[100%] md:max-w-[50rem] xl:max-w-[100%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-8 md:gap- gap-6 py-8 px-4 md:px-4 place-items-center">
        {cardsData.map((card, index) => (
            <AreaOfFocusCard
              key={index}
              title={card.title}
              details={card.details}
              area={card.area}
              image={card.image}
            />
        ))}
      </div>
      </div>
    </div>
    <SectionDivider spacing={0} />
    </div>
  );
};


export default AreaOfFocus;