import React from 'react';
import WorkshopBanner from './WorkshopBanner';
import WorkshopPhoto from './WorkshopPhoto';
import WorkshopDetails from './WorkshopDetails';
import WorkshopDescriptionPanel from './WorkshopDescriptionPanel';
import useWorkshopDescription from './useWorkshopDescription';

const WorkshopCard = ({ workshop }) => {
  const {
    showDescription,
    descriptionPage,
    descriptionChunks,
    handleNextPage,
    handlePrevPage,
    toggleDescription
  } = useWorkshopDescription(workshop.description);

  return (
    <div
      className="max-w-[32rem] md:min-w-[24rem] relative group rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl"
    >
      <div id="card-overview" className= "relative" style={{
        backgroundImage: `url(${workshop.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>

        <div className="relative z-10"> {/* Added z-10 to position above overlay */}
          {/* Workshop Info Banner */}
          <WorkshopBanner title={workshop.name} />

          {/* Main Card Content */}
          <div className="py-8 px-4 sm:px-8 flex gap-4">
            {/* Left: Photo section */}
            <WorkshopPhoto
              photo={workshop.photo}
              name={workshop.by}
              link={workshop.link}
            />

            {/* Right: Event details */}
            <WorkshopDetails
              speaker={workshop.by}
              company={workshop.company}
              location={workshop.location_of_workshop}
              date={workshop.date}
              onViewBio={toggleDescription}
              showingBio={showDescription}
            />
          </div>

        </div>
        </div>

        {/* Description Panel */}
        <WorkshopDescriptionPanel
          id="description-panel"
          isVisible={showDescription}
          speakerName={workshop.by}
          chunks={descriptionChunks}
          currentPage={descriptionPage}
          onClose={() => toggleDescription(false)}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
          className="relative z-50"
        />
      </div>
      );
};

      export default WorkshopCard;