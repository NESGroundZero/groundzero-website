import React, { useState, useEffect } from "react";
import styles from "../../style";
import { prizes } from "../../assets";
import MediaQuery from "react-responsive";
import { useInView } from "react-intersection-observer";
import SectionDivider from "../Utility/SectionDivider";

const PrizeBox = ({ place, amount, height }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [showPlace, setShowPlace] = useState(false);
  const [showAmount, setShowAmount] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      setTimeout(() => setShowPlace(true), 1000); // Show place after height animation
      setTimeout(() => setShowAmount(true), 1200); // Show amount after place
    }
  }, [inView]);

  let fontSizeClass = "";

  // Assigning font sizes based on the place
  if (place === "1st") {
    fontSizeClass = "text-4xl";
  } else if (place === "2nd") {
    fontSizeClass = "text-3xl";
  } else if (place === "3rd") {
    fontSizeClass = "text-2xl";
  }

  let placeFontSize = "";

  // Assigning font sizes based on the place
  if (place === "1st") {
    placeFontSize = "text-3xl";
  } else if (place === "2nd") {
    placeFontSize = "text-2xl";
  } else if (place === "3rd") {
    placeFontSize = "text-2xl";
  }

  return (
    <div
      ref={ref}
      className="relative text-center p-4 w-64 transition-transform duration-[1500ms] ease-out transform origin-bottom"
      style={{
        height: height,
        transform: isVisible ? "scaleY(1)" : "scaleY(0)",
        background:
          "linear-gradient(to right, rgba(32,27,71,255), rgba(46,100,240,0.8), rgba(0,42,98,255))",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className={`absolute inset-x-0 top-0 transform -translate-y-1/2 transition-opacity duration-500
        ${showPlace ? 'opacity-100' : 'opacity-0'}`}>
        <div
          className={`mx-auto h-16 w-36 bg-blue-200 rounded-3xl text-sm font-light flex items-center justify-center shadow-lg ${placeFontSize}`}
          style={{
            background:
              "linear-gradient(to right, rgba(92,136,250,255), rgba(82,73,248,255), rgba(97,76,244,255))",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <span className="text-white text-2xl">{place}</span>
        </div>
      </div>
      <div className={`mt-6 transition-opacity duration-500
        ${showAmount ? 'opacity-100' : 'opacity-0'}`}>
        <span className={`text-white font-light ${fontSizeClass}`}>{amount}</span>
      </div>
    </div>
  );
};

const useCountUp = (startAnimation, end, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Reset count if startAnimation is false
    if (!startAnimation) {
      setCount(0);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [startAnimation, end, duration]);

  return count;
};

const PrizeTotal = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // 2) Always call useCountUp. Let it know whether to animate
  const count = useCountUp(isVisible, 10000, 1700);

  return (
    <p className="text-5xl my-14" ref={ref}>
      ${count.toLocaleString()}
    </p>
  );
};


const PrizeComponent = () => {
  return (
    <div id="prizes">
      <MediaQuery minWidth={769}>
        <div className={`bg-purple w-full overflow-hidden pt-40 ${styles.paddingY}`}>
          <div className={`bg-primary ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth} flex-col relative`} id="about">
              <div className="grid place-items-center text-white xs:px-16 lg:px-40">
                <div className="text-center text-white">
                  <h2 className={styles.heading7 + " relative"}>PRIZES</h2>
                  <p className="text-2xl my-14">Prove your winning idea and compete for a prize pool of</p>
                  <PrizeTotal/>
                  <div className="flex justify-center items-end mt-14">
                    <div className="h-48"> {/* Reserve space */}
                      <PrizeBox place="2nd" amount="$3,000" height="12rem" />
                    </div>
                    <div className="h-72"> {/* Reserve space */}
                      <PrizeBox place="1st" amount="$4,000" height="18rem" />
                    </div>
                    <div className="h-48"> {/* Reserve space */}
                      <PrizeBox place="3rd" amount="$2,000" height="12rem" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>


      <MediaQuery maxWidth={768}>
        <div id="prizes" className={`flex flex-col items-center justify-center bg-dark-blue text-white relative font-poppins font-thin font-light ${styles.paddingY}`}>
          <h2 className={styles.heading7 + " mb-14 z-10"}>PRIZES</h2>
          <p className="text-xl text-center">Prove your winning idea and compete for a prize pool of</p>
          <p className="text-3xl my-14">$10,000</p>
          <div className="prizes-image-container">
            <img src={prizes} className="prizes-image" alt="Prizes" style={{ marginBottom: 0 }} />
            <br>
            </br>
            <br>
            </br>
          </div>
        </div>

      </MediaQuery>
      <SectionDivider spacing={1}/>
    </div>
  );
};

export default PrizeComponent;