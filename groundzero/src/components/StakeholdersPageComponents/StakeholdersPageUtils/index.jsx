import CategoryHeader from './CategoryHeader';

export { CategoryHeader };

export const categoryColors = {
    "Data Tech": "#3e0f30",
    "Finance": "#003956",
    "Health & Wellness": "#260A5E",
    "Sustainability": "#136A13"
  };
  
  // Function to get color based on category with fallback
export const getCategoryColor = (category) => {
    return categoryColors[category] || "#0077B5"; // Default to blue if category not found
};

// Helper function to generate a lighter version of a color
export const lightenColor = (color, percent) => {
  const num = parseInt(color.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = (num >> 8 & 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
  return `#${(0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1)}`;
};