import React from "react";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { gzwhite, nes } from "../assets";
import { MdEmail } from "react-icons/md";
import MediaQuery from "react-responsive";

const Footer = () => {
  return (
    <div className="footer">
      <MediaQuery minWidth={768}>
        <div className="footer-content">
          <div className="footer-left">
            <img
              src={gzwhite}
              alt="NES Ground Zero 2024"
              width="150"
              height="150"
              style={{marginRight: '25px'}}
            />
              <img
              src={nes}
              alt="NES Ground Zero 2024"
              width="80"
              height="70"
            />
          </div>
          <div className="footer-buttons">
            <a href="https://linkedin.com/company/nesgroundzero">
              <AiFillLinkedin className="footer-button" />
            </a>
            <a href="https://instagram.com/nesgroundzero">
              <AiFillInstagram className="footer-button" />
            </a>
            <a href="mailto: nesgroundzero@gmail.com">
              <MdEmail className="footer-button" />
            </a>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <div className="grid px-10 place-items-center">
          <div className="footer-content">
            <div className="footer-left">
              <img
                src={gzwhite}
                alt="NES Ground Zero 2024"
                width="150"
                height="150"
                style={{marginRight: '25px'}}
              />
               <img
              src={nes}
              alt="NES Ground Zero 2024"
              width="80"
              height="70"
            />
            </div>
          </div>
          <div className="grid grid-cols-3 w-[50%] mt-7 place-items-center">
            <a href="https://linkedin.com/company/nesgroundzero">
              <AiFillLinkedin className="footer-button" />
            </a>
            <a href="https://instagram.com/nesgroundzero">
              <AiFillInstagram className="footer-button" />
            </a>
            <a href="mailto: nesgroundzero@gmail.com">
              <MdEmail className="footer-button" />
            </a>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Footer;
