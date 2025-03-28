import React from "react";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import styles from "../../style";
import MediaQuery from "react-responsive";
import NavigationBar from "../Utility/NavigationBar";

const ContactUsTemp = () => {
  return (
    <div>
      <NavigationBar />
      <section
        id="contacts"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
      >
        <MediaQuery minWidth={768}>
          <div className="grid place-items-center">
            <div className="text-white xs:px-16 lg:px-10">
              <div className="heading">Contact Us</div>
              <div>
                <a href="https://www.linkedin.com/company/nesgroundzero/">
                  <div className="contact-button">
                    <AiFillLinkedin className="md:text-[50px] text-[30px]" />
                    <div className="font-Poppins font-semibold text-[22px] text-white break-all md:w-full scale-80">
                      linkedin.com/company/nesgroundzero
                    </div>
                  </div>
                </a>
                <a href="https://www.instagram.com/nesgroundzero">
                  <div className="contact-button">
                    <AiFillInstagram className="md:text-[50px] text-[30px]" />
                    <div className="font-Poppins font-semibold text-[22px] text-white w-full">
                      @nesgroundzero
                    </div>
                  </div>
                </a>
                <a href="mailto: nesgroundzero@gmail.com">
                  <div className="contact-button">
                    <MdEmail className="md:text-[50px] text-[30px]" />
                    <div className="font-Poppins font-semibold text-[22px] break-all text-white w-full">
                      nesgroundzero@gmail.com
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <div className="grid place-items-center">
            <div className="text-white xs:px-16 lg:px-10 w-full">
              <div className="heading">Contact Us</div>
              <div>
                <a href="https://www.linkedin.com/company/nesgroundzero/">
                  <div className="contact-button">
                    <AiFillLinkedin className="md:text-[50px] text-[30px]" />
                    <div className="font-Poppins font-semibold text-[18px] text-white break-all md:w-full scale-80">
                      Linkedin
                    </div>
                  </div>
                </a>
                <a href="https://www.instagram.com/nesgroundzero">
                  <div className="contact-button">
                    <AiFillInstagram className="md:text-[50px] text-[30px]" />
                    <div className="font-Poppins font-semibold text-[18px] text-white w-full">
                      Instagram
                    </div>
                  </div>
                </a>
                <a href="mailto: nesgroundzero@gmail.com">
                  <div className="contact-button">
                    <MdEmail className="md:text-[50px] text-[30px]" />
                    <div className="font-Poppins font-semibold text-[18px] break-all text-white w-full">
                      Email
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </MediaQuery>
      </section>
    </div>
  );
};

export default ContactUsTemp;
