import React from 'react';

const CategoryHeader = ({ areaOfFocus, text = "CATEGORY", hoverColor = "#0077B5" }) => {
  // Helper function to generate lighter versions of colors
  const lightenColor = (color, percent) => {
    const num = parseInt(color.replace("#", ""), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = (num >> 8 & 0x00FF) + amt,
      B = (num & 0x0000FF) + amt;
    return `#${(0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1)}`;
  };

  // Generate color variations
  const lightColor = lightenColor(hoverColor, 25);
  const lighterColor = lightenColor(hoverColor, 90);

  return (
    <div className="relative flex flex-col items-center mb-8">
      {/* Main heading with gradient text */}
      <h2
        className="text-2xl sm:text-3xl font-bold text-center mb-3 relative z-10 bg-clip-text text-transparent"
        style={{ 
          paddingTop: '4px', 
          backgroundImage: `linear-gradient(to right, ${lighterColor}, white, ${lighterColor})`,
        }}
      >
        {areaOfFocus}
      </h2>

      {/* Animated underline */}
      <div
        className="h-1 w-24 rounded-full mb-2"
        style={{
          background: `linear-gradient(to right, transparent, ${hoverColor}, transparent)`,
          boxShadow: `0 0 8px ${hoverColor}80`
        }}
      ></div>

      {/* Category indicator text */}
      <div 
        className="text-sm uppercase tracking-widest opacity-90"
        style={{ color: lightColor }}
      >
        {text}
      </div>
    </div>
  );
};

export default CategoryHeader;