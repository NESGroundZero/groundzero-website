/* 
This file contains styling customization for sizes, paddings, layouts, etc.
*/

const styles = {
    boxWidth: "xl:max-w-[1600px] w-full",
  
    // Is this part even used?
    heading2: "font-lexendDeca font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    heading3: "font-lexendDeca font-semibold xs:text-[40px] text-[32px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    heading4: "font-poppins font-light xs:text-[32px] text-[24px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    heading5: "font-lexendDeca font-bold xs:text-[24px] text-[16px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center",
    heading6: "font-lexendDeca font-bold xs:text-[18px] text-[16px] text-white xs:leading-[59.8px] leading-[49.8px] w-full text-center",
    
    heading7: "md:text-6xl text-5xl font-poppins font-light text-white text-center",

    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

  
    paddingX: "sm:px-16 px-6",
    paddingY: "py-16 sm:py-20 lg:py-20 md:py-32 xl:py-36", // This is used for the padding of the sections - use THIS
    paddingY2: "py-16 sm:py-20 lg:py-20 md:py-24 xl:py-24", // This is used for the padding of the top-most section of the page

    paddingY_start_of_page: "py-20 lg:py-10",
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;