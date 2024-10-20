import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { rightArrow } from "../assets";

const DisplayButton = ({ isExternal, link, text, arrow = null, variant = "secondary" }) => {
  const ArrowLeft = arrow === "left" && (
    <div className="display-button-left-arrow">
      <img src={rightArrow} alt="Left Arrow" />
    </div>
  );

  const ArrowRight = arrow === "right" && (
    <div className="display-button-right-arrow">
      <img src={rightArrow} alt="Right Arrow" />
    </div>
  );

  const buttonClass = variant === "primary" ? "display-button-primary" : "display-button-secondary";
  const textClass = variant === "primary" ? "text-white" : "text-white";

  const ButtonContent = (
    <div className={`display-button ${buttonClass}`}>
      {ArrowLeft}
      <div className={`${styles.heading6} ${textClass}`}>{text}</div>
      {ArrowRight}
    </div>
  );

  return isExternal ? (
    <a href={link} className="inline-block">
      {ButtonContent}
    </a>
  ) : (
    <Link to={link} className="inline-block">
      {ButtonContent}
    </Link>
  );
};

export default DisplayButton;
