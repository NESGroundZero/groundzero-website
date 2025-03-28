import React from "react";

const SectionDivider = ({ spacing = 0 }) => {
  return (
    <div className={`relative h-0`} style={{ paddingTop: `${spacing}rem` }}>
      <hr className="border-t border-gray-300/60 absolute left-1/2 transform -translate-x-1/2 w-[80vw]" />
    </div>
  );
};

export default SectionDivider;