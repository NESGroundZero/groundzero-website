import React from "react";
import styles from "../style";
import "../index.css";
import { useMediaQuery } from 'react-responsive';

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { pastEvents, pastEventDescription } from "../constants";

const PastEvents = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 }); // Screens larger than 1024px
  const isSmallScreen = useMediaQuery({ maxWidth: 768 }); // Screens smaller than 768px

  // Adjust the number of slides per view based on screen size
  const noSlidesPerView = isLargeScreen ? 5 : isSmallScreen ? 2 : 3;

  return  (
  <section>
    <div className={`${styles.paddingX} flex-col relative`} id="about">
      <div className="grid place-items-center text-white xs:px-16 lg:px-80">
        <div className="heading py-5">
          About Us        
        </div>

          {/* <div className="pb-10"></div> */}
          {pastEventDescription.map((pastEvent) => (
            <div className="font-light lg:text-2xl md:text-xl text-[1rem] pb-4 text-centre">
              <p>{pastEvent.content}</p>
            </div>
          ))}
      </div>
    </div>

    <div className = "lg:pb-20"></div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
      effect={"coverflow"}
      spaceBetween={0}
      slidesPerView={ noSlidesPerView }
      loop
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      coverflowEffect={{
        rotate: 10,
        stretch: 2,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 0.85,
      }}
      centeredSlides={true}
    >
      {pastEvents.map((pastEvent) => (
        <SwiperSlide key={pastEvent.id} className="mb-10">
          <div class="past-event-container">
            <img src={pastEvent.content} className="past-event-image" />
            {/* <div class="past-event-image-title">{pastEvent.title}</div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);}

export default PastEvents;
