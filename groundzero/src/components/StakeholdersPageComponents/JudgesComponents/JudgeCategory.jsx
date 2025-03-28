import React from 'react';
import JudgeCard from './JudgeCard';
import { CategoryHeader } from '../StakeholdersPageUtils';
import { getCategoryColor } from '../StakeholdersPageUtils';
import { edward_tay, vinod_vasnani } from '../../../assets';

const JudgeCategory = ({ 
  // Default props using sample data
  areaOfFocus, 
  judgesList, 
  hoverColor = getCategoryColor(areaOfFocus) 
}) => {
  // Return early if no judges in this category
  if (!judgesList || judgesList.length === 0) {
    return null;
  }

  return (
    <div className="mb-16">
      {/* Category Header */}
      <CategoryHeader 
        areaOfFocus={areaOfFocus}
        text="JUDGES"
        hoverColor={hoverColor}
      />

      {/* Judges List */}
      <div className="grid flex-row space-y-6">
        {judgesList.map((judge, index) => (
          <JudgeCard
            key={index}
            judge={judge}
            hoverColor={hoverColor}
          />
        ))}
      </div>
    </div>
  );
};

export default JudgeCategory;