import React from "react";
import { questions } from "../../constants/index";
import { Accordion } from "../Utility/Accordion";
import MediaQuery from "react-responsive";
import styles from "../../style";

const Faq = () => {
  return (
    <div>
       <MediaQuery minWidth={769}>
    <div id= "faq">
      <div className = {`${styles.paddingY}`}>
      <div className=" w-full overflow-hidden min-h-screen">
      <h1 className={styles.heading7 + " mb-20 relative"}>FAQ</h1>
      <div   style={{
              marginInlineStart: 150,
              marginInlineEnd:150,
              justifyContent: 'center'
            }}>
        {questions.map((section, index) => (
          <Accordion key = {section.id} id ={section.id} section={section} />
        ))}
        </div>
      </div>
    </div>
    </div>
    </MediaQuery>


    <MediaQuery maxWidth={768}>
    <div className = {`${styles.paddingY}`}>    
      <div id = "faq" className="w-full min-h-screen">
      <h1 className={styles.heading7 + " relative"}>FAQ</h1>

        {questions.map((section) => (
          <Accordion key = {section.id} id ={section.id} section={section} />
        ))}
        </div>
    
</div>
    </MediaQuery>
    </div>
  );
};

export default Faq;