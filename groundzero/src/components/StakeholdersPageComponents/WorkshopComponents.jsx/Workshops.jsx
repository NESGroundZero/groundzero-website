import React, { lazy } from 'react';
import Slider from "react-slick"; // Import Slider
import { workshops } from '../../../constants';
import WorkshopCard from './WorkshopCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ScreenSizeIndicator from '../../Utility/ScreenSizeIndicator';
import ImageCollage from './ImageCollege';

// --- Arrow Components Definition (from Step 3) ---
const arrowBaseStyles = "absolute top-1/2 transform -translate-y-1/2 z-10 cursor-pointer";
const arrowIconStyles = "text-white hover:text-gray-300 transition-colors";

const NextArrow = (props) => {
  const { className, style, onClick, currentSlide, slideCount, ...restProps } = props;
  return (
    <div
      className={`${className?.includes('slick-disabled') ? 'opacity-50 cursor-default' : ''} ${arrowBaseStyles} right-[-15px] md:right-[-30px] lg:right-[-40px]`} // Adjust positioning
      style={{ ...style }}
      onClick={onClick}
      {...restProps} // Pass other props if any
    >
      <FaChevronRight size={30} className={arrowIconStyles} />
    </div>
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick, currentSlide, slideCount, ...restProps } = props;
  return (
    <div
      className={`${className?.includes('slick-disabled') ? 'opacity-50 cursor-default' : ''} ${arrowBaseStyles} left-[-15px] md:left-[-30px] lg:left-[-40px]`} // Adjust positioning
      style={{ ...style }}
      onClick={onClick}
      {...restProps} // Pass other props if any
    >
      <FaChevronLeft size={30} className={arrowIconStyles} />
    </div>
  );
}
// --- End Arrow Components ---


const Workshops = () => {

  const settings = {
    dots: true, // Show dots navigation
    appendDots: dots => (
      <div
        style={{
          position: "relative",
          padding: "10px",
        }}
      >
        <ul style={{}}> {dots} </ul>
      </div>
    ),
    lazyLoad: true, // Lazy load images for performance
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed in ms
    slidesToShow: 2, // Number of slides to show at once on larger screens
    slidesToScroll: 1, // Number of slides to scroll at once
    centerMode: true, // Enable center mode
    centerPadding: '0px', // Adjust padding - 0px means center touches edges, use '60px' etc to show more of sides
    autoplay: true, // Optional: Enable auto-play
    autoplaySpeed: 3000, // Optional: Delay between auto-play transitions
    pauseOnHover: true, // Optional: Pause auto-play on hover
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom prev arrow
    responsive: [ // Responsive settings
      {
        breakpoint: 1024, // Large screens (adjust as needed)
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: true, // Maybe hide arrows on very small screens
        }
      },
      {
        breakpoint: 600, // Small screens (phones)
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false, // Maybe hide arrows on very small screens
        }
      }
    ],
    // Custom class for easier CSS targeting if needed
    className: "center-carousel"
  };

  return (
    // Adjust container padding if needed, remove grid centering for items
    <div className="text-white w-full xs:px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40"> {/* Added overflow-hidden */}
      <h2 className="text-white font-poppins font-lighter text-center pb-12 md:pb-20 md:text-2xl text-md px-4 lg:px-12 xl:px-40 z-10">
        At Ground Zero 2025, we bring you exclusive masterclasses conducted by industry experts in Data Tech, Finance, Health & Wellness, and Sustainability.
      </h2>
      
      {/* Add a container div for slider padding if arrows are outside */}
      <div className="relative md:px-16 lg:px-20"> {/* Padding to make space for external arrows */}
        <Slider {...settings}>
          {workshops.map((workshop) => (
            // Add a wrapper div for slick-slide styling target
            <div key={workshop.name} className="px-2 md:px-4"> {/* Add horizontal padding between cards */}
              <WorkshopCard workshop={workshop} />
            </div>
          ))}
        </Slider>

        <br></br>
        <br></br>
        <ImageCollage className = "pt-10"/>

      </div>

    </div>
  );
}

export default Workshops;