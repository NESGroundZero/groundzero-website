import React from "react";

const DisplayIcon = ({ icon, link }) => (
  <div className="flex place-content-center justify-between flex-col px-5  rounded-[20px] max-w-[370px] mr-0 my-5 contactus-card">
    <img src={icon} className="h-[120px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {link}
    </p>
  </div>
);

export default DisplayIcon;
