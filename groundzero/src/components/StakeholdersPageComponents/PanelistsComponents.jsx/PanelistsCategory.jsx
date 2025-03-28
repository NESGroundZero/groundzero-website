import React from 'react';
import PanelistsBox from './PanelistsBox';
import { CategoryHeader } from '../../StakeholdersPageComponents/StakeholdersPageUtils';

const PanelistsCategory = ({ areaOfFocus, hoverColor = "#0077B5", panelistsList }) => {
  // Return early if no panelists in this category
  if (!panelistsList || panelistsList.length === 0) {
    return null;
  }

  return (
    <div className="mb-16">
      {/* Using our new CategoryHeader component */}
      <CategoryHeader 
        areaOfFocus={areaOfFocus}
        text="PANELISTS"
        hoverColor={hoverColor}
      />

      {/* Panelists Grid */}
      <div className="grid gap-8 ss:grid-cols-2 ss:gap-4 sm:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 flex justify-center items-center">
        {panelistsList.map((panelist, index) => (
          <PanelistsBox
            key={index}
            stakeholder={panelist}
            hoverColor={hoverColor}
          />
        ))}
      </div>
    </div>
  );
};

export default PanelistsCategory;