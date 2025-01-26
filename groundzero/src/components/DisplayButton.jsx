import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";

const DisplayButton = ({ isExternal, link, text, variant = "secondary" }) => {
  const buttonClass = variant === "primary" ? "display-button-primary" : "display-button-secondary";
  const textClass = variant === "primary" ? "text-white" : "text-white";

  const ButtonContent = (
    <div className={`display-button ${buttonClass}`}>
      <div className={`${styles.heading6} ${textClass}`}>{text}</div>
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