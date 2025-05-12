import { React, useState } from 'react';
import { problems } from '../../constants';

const ProblemStatementCard = ({ problem }) => {
  const { title, details1, img, probstatements } = problem;
  return (
    <div className="text-white py-6 px-6 md:mt-[4rem] md:py-8 md:px-12 rounded-lg bg-[#00306b] shadow-xl mx-auto max-w-4xl">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Image Section */}
        {img && (
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 overflow-hidden rounded-full relative group">
            <div className="absolute inset-0 rounded-full border-4 border-blue2 group-hover:border-blue1 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] group-active:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
            <img
              src={img}
              alt={title}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full transform transition duration-500 group-hover:scale-110 group-active:scale-115 relative z-0"
            />
          </div>
        )}

        {/* Content Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1ed1ec] mb-4">{title}</h2>
          {/* <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
            {details1}
          </p> */}

          {probstatements && probstatements.length > 0 && (
            <div>
              {/* <h3 className="text-xl font-semibold text-gray-100 mb-3">Problem Statements:</h3> */}
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                {probstatements.map((statement, index) => (
                  <li key={index} className="text-sm md:text-base">
                    {statement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProblemStatement = () => {
  const [selectedCategory, setSelectedCategory] = useState('Health & Wellness');
  
  // Extract all unique categories from problem statements
  const categories = [ ...new Set(problems.map(problem => problem.title))];
  
  // Filter problems based on selected category
  const filteredProblems = problems.filter(problem => problem.title === selectedCategory);

  return (
    <div className="pt-8 px-4">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 px-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 rounded-full transition-all ${
              selectedCategory === category 
                ? 'bg-white text-primary text-blue2 font-bold shadow-lg scale-105' 
                : 'bg-dimWhite/20 text-white hover:bg-dimWhite/30'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="container mx-auto">
        {filteredProblems.map((problem) => (
          <ProblemStatementCard key={problem.id} problem={problem} />
        ))}
      </div>
    </div>
  );
};

export default ProblemStatement;