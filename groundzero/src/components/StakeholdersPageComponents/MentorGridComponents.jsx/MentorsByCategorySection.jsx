import React, { useState } from 'react';
    import { MentorGrid } from '../../../components';
import { getCategoryColor } from '../StakeholdersPageUtils';
import { CategoryHeader } from '../StakeholdersPageUtils';

const MentorsByCategorySection = ({ mentors }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Group mentors by their AreaOfFocus
  const mentorsByCategory = mentors.reduce((acc, mentor) => {
    if (!acc[mentor.AreaOfFocus]) {
      acc[mentor.AreaOfFocus] = [];
    }
    acc[mentor.AreaOfFocus].push(mentor);
    return acc;
  }, {});
  
  // Get all unique categories
  const categories = ['All', ...Object.keys(mentorsByCategory)];
  
  // Filter mentors based on selected category
  const filteredMentors = selectedCategory === 'All' 
    ? mentors 
    : mentorsByCategory[selectedCategory] || [];

  return (
    <div className="bg-primary py-12">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 rounded-full transition-all ${
              selectedCategory === category 
                ? 'bg-white text-primary font-bold shadow-lg scale-105' 
                : 'bg-dimWhite/20 text-white hover:bg-dimWhite/30'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display All Mentors */}
      {selectedCategory === 'All' ? (
        Object.entries(mentorsByCategory).map(([category, categoryMentors]) => (
          <div key={category} className="mb-16">
            <CategoryHeader 
              areaOfFocus={category} 
              text="MENTORS" 
              hoverColor={getCategoryColor(category)} 
            />
            <MentorGrid 
              list={categoryMentors} 
              hoverColor={getCategoryColor(category)}
            />
          </div>
        ))
      ) : (
        <div>
          <CategoryHeader 
            areaOfFocus={selectedCategory} 
            text="MENTORS" 
            hoverColor={getCategoryColor(selectedCategory)} 
          />
          <MentorGrid 
            list={filteredMentors} 
            hoverColor={getCategoryColor(selectedCategory)}
          />
        </div>
      )}
    </div>
  );
};

export default MentorsByCategorySection;