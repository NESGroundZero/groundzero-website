import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { rightArrow } from "../assets";

const DisplayButton = (props) => {
  return (
    <>
      <Link to={props.link}>
        <div className={"display-button"}>
          <div className={"display-button-" + props.arrow}>
            {generateLeftArrow(props.arrow)}
            <div className={`${styles.heading5}`}>{props.text}</div>
            {generateRightArrow(props.arrow)}
          </div>
        </div>
      </Link>
    </>
  );
};

const generateLeftArrow = (arrow) => {
  if (arrow == "left") {
    return (
      <div className="display-button-left-arrow">
        <img src={rightArrow} />
      </div>
    );
  }
};

const generateRightArrow = (arrow) => {
  if (arrow == "right") {
    return (
      <div className="display-button-right-arrow">
        <img src={rightArrow} />
      </div>
    );
  }
};

export default DisplayButton;
