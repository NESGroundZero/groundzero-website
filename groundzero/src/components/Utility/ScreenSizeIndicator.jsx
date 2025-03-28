const ScreenSizeIndicator = () => {
  return (
    <div className="text-white text-sm z-50">
      {/* Base size - smaller than xs */}
      <div className="block xs:hidden">Base (&lt;480px)</div>
      
      {/* xs breakpoint - 480px to 620px */}
      <div className="hidden xs:block ss:hidden">xs (≥480px)</div>
      
      {/* ss breakpoint - 620px to 768px */}
      <div className="hidden ss:block sm:hidden">ss (≥620px)</div>
      
      {/* sm breakpoint - 768px to 1060px */}
      <div className="hidden sm:block md:hidden">sm (≥768px)</div>
      
      {/* md breakpoint - 1060px to 1200px */}
      <div className="hidden md:block lg:hidden">md (≥1060px)</div>
      
      {/* lg breakpoint - 1200px to 1700px */}
      <div className="hidden lg:block xl:hidden">lg (≥1200px)</div>
      
      {/* xl breakpoint - 1700px and above */}
      <div className="hidden xl:block">xl (≥1700px)</div>
      
      {/* Special tall breakpoint indicator */}
      <div className="hidden tall:block mt-1 pt-1 border-white/30">
        tall (h≥768px, w≥768px)
      </div>
    </div>
  );
};

export default ScreenSizeIndicator;