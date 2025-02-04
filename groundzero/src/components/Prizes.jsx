import React from "react";
import styles from "../style";
import { prizes } from "../assets"; 
import MediaQuery from "react-responsive";


const PrizeBox = ({ place, amount, height }) => {
  // You might want to ensure that the height value is set correctly, for example, `h-32`
  // or use inline styles if needed: style={{ height }}
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
    placeFontSize = "text-2xl"; 
  } else if (place === "2nd") {
    placeFontSize = "text-xl"; 
  } else if (place === "3rd") {
    placeFontSize = "text-xl"; 
  }

  return (
    <div
      className={`relative text-center p-4 w-64 ${height}`}
      style={{
        background:
          "linear-gradient(to right, rgba(32,27,71,255), rgba(70,50,90,255), rgba(0,42,98,255))",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="absolute inset-x-0 top-0 transform -translate-y-1/2">
        <div
          className={`mx-auto h-16 w-36 bg-blue-200 rounded-3xl text-sm font-light flex items-center justify-center shadow-lg ${placeFontSize}`}
          style={{
            background:
              "linear-gradient(to right, rgba(92,136,250,255), rgba(82,73,248,255), rgba(97,76,244,255))",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <span className="text-white">{place}</span>
        </div>
      </div>
      <div className="mt-6">
        <span className={`text-white font-light ${fontSizeClass}`}>{amount}</span>
      </div>
    </div>
  );
};

const PrizeComponent = () => {
  return (
    <div id = "prizes">
    <MediaQuery minWidth={769}>
    <div className="bg-purple w-full overflow-hidden pt-40">
      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} ${styles.paddingY} flex-col relative`} id="about">
          <div className="grid place-items-center text-white xs:px-16 lg:px-40">
            <div className="text-center text-white">
              <h2 className={styles.heading7 + " relative"}>PRIZES</h2>
              <p className="text-2xl my-14">Prove your winning idea and compete for a prize pool of</p>
              <p className="text-5xl my-14"> $10,000</p>
              <div className="flex justify-center items-end mt-14">
                <PrizeBox place="2nd" amount="$3,000" height="h-32" />
                <div className="relative">
                  <PrizeBox place="1st" amount="$4,000" height="h-40" />
                </div>
                <PrizeBox place="3rd" amount="$2,000" height="h-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </MediaQuery>


    <MediaQuery maxWidth={768}>
    <div id="prizes" className="flex flex-col items-center justify-center bg-dark-blue text-white relative font-poppins font-thin font-light ">
    <h2 className={styles.heading7 + " mb-10 z-10"}>PRIZES</h2>
    <p className="text-xl text-center">Prove your winning idea and compete for a prize pool of</p>
    <p className="text-3xl my-14">$10,000</p>
    <div className="prizes-image-container">
      <img src={prizes} className="prizes-image" alt="Prizes" style = {{marginBottom: 140}}/>
      <br>
</br>
<br>
</br> 
    </div>

</div>

    </MediaQuery>

    </div>
  );
};

export default PrizeComponent;