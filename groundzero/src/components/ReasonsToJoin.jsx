import React from "react";
import styles from "../style";
import StatementCard from "./problem-statement-components/StatementCard";

const ReasonsToJoin = () => {
  return (
    <div className="reasons-to-join">
      <div
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
      >
        <div className="w-full text-center justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h1 className={styles.heading2}>Why Ground Zero</h1>
        </div>
        <div className="grid place-items-center text-white xs:px-16 lg:px-40">
          <div className="pb-10"></div>

          <div className="font-light md:text-2xl text-[16px] pb-9 text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
              lacinia ex. Mauris dapibus magna ut dui porttitor, nec mollis
              metus iaculis. Nam tortor nibh, placerat quis leo non, suscipit
              scelerisque purus. Quisque porttitor viverra lorem eu porttitor.
              Duis lacinia magna non bibendum venenatis. Integer sagittis nisl
              ante, at tincidunt sapien faucibus ut. Praesent eleifend lectus
              nec elit congue, sed commodo justo molestie. Pellentesque
              fermentum dolor ut lectus cursus, imperdiet luctus ipsum volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const generateCards = () => {
  let content = [];
  for (let i = 0; i < 3; i++) {
    content.push(
      <div>
        <StatementCard id={i} type="reason" />
      </div>
    );
  }
  return content;
};

export default ReasonsToJoin;
