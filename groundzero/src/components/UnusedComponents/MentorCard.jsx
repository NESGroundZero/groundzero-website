import React, { useEffect } from "react";
import { groundzero, linkedin } from "../../assets";
import { mentors } from "../../constants";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';

const MentorCard = ({mentor, setOpenCard, setCurrMentor}) => {
  
  const openPrevCard = () => {
    setCurrMentor(mentors[mentors.indexOf(mentor) - 1]);
  }

  const openNextCard = () => {
    setCurrMentor(mentors[mentors.indexOf(mentor) + 1]);
  }

  const closeMentorCard = () => { 
    setOpenCard(false);

    // Disables Background Scrolling whilst the Mentor Card is open
    document.body.style.overflow = 'unset';
  }

  // handle what happens on key press
  const handleKeyPress = (event) => {
    if (event.key == 'ArrowRight' && mentors.indexOf(mentor) != mentors.length - 1) {
      openNextCard();
    }
    else if (event.key == "ArrowLeft" && mentors.indexOf(mentor) != 0) {
      openPrevCard();
    }
    else if (event.key == "Escape") {
      closeMentorCard();
    }
  };

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keyup', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="text-white flex place-items-center items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-[5px] bg-black/50"
    onClick={() => closeMentorCard()}>

      <div className="hidden sm:contents">
        <div className={`${mentors.indexOf(mentor) == 0 ? 'hidden' : 'block'} absolute left-6 md:left-14 cursor-pointer mr-8 text-2xl p-2 bg-black bg-opacity-50 rounded-full text-center grid place-items-center`}
        onClick={(e) => {
          e.stopPropagation(); 
          openPrevCard();}}
        >
          <FiChevronLeft/>
        </div>
        
        <div className="grid w-[80%] h-[90%] tall:h-[65%] bg-black" onClick={(e) => { e.stopPropagation(); }}>
          <div className="flex">
              {/* Pic */}
              <div className="sm:h-[100%] sm:w-[50%] lg:w-[45%] bg-white text-black grid place-items-center object-fit">
                  IMAGE
              </div>

              {/* Desc */}
              <div className="sm:w-[50%] lg:w-[55%] px-3 py-2">
                  {/* Header */}
                  <div className="flex sm:h-[10%] w-full border-b border-white items-center">
                      <div className="flex w-1/2 justify-start px-1">
                        <a href={"/"}>
                          <img src={groundzero} className="h-[25px] hover:scale-110 transition ease-in-out"/>
                        </a>
                      </div>
                      <div className="flex w-1/2 justify-end px-1">
                          <a href={mentor.personalLink} target="_blank" className="hover:scale-110 transition ease-in-out">
                              <img src={linkedin} className="h-[25px]"/>
                          </a>
                      </div>
                  </div>

                  {/* Details */}
                  <div className="sm:h-[90%] pt-4">
                      <h2 className="text-3xl lg:text-4xl">
                          {mentor.title}
                      </h2>
                      <h2 className="text-xl lg:text-2xl mt-2 lg:mt-3">
                          {mentor.subtitle.map((role) => (
                            <div>
                              {role} of {mentor.info[mentor.subtitle.indexOf(role)]}
                            </div>
                          ))}
                      </h2>
                      <h2 className="text-sm mt-1 whitespace-pre-line space-y-2">
                          {mentor.description.map((desc) => (
                              <div>
                                  {desc}
                              </div>
                          ))}
                      </h2>
                  </div>
              </div>
          </div>
        </div>

        <div className={`${mentors.indexOf(mentor) == mentors.length - 1 ? 'hidden' : 'block'} absolute right-6 md:right-14 cursor-pointer ml-8 text-2xl p-2 bg-black bg-opacity-50 rounded-full text-center grid place-items-center`}
        onClick={(e) => {
          e.stopPropagation();
          openNextCard();}}
        >
          <FiChevronRight/>
        </div>
        
        <div className="p-2 text-3xl absolute top-4 right-5 cursor-pointer" onClick={() => closeMentorCard()}>
          <CgClose/>
        </div>
      </div>

      {/* MOBILE */}
      <div className="z-50 contents sm:hidden overflow-y-scroll">
        <div className="flex flex-col w-full h-full bg-black" onClick={(e) => { e.stopPropagation(); }}>
          <div className="h-full">
              {/* Header */}
              <div className="py-4">
                {/* <div className="grid place-items-center">
                  <img src={groundzero} className="h-[30px]"/>
                </div> */}
                <div className="flex h-fit w-full items-center">
                    <div className="flex w-1/2 justify-start px-2 space-x-2">
                      <div className="text-xl grid place-items-center"
                      onClick={() => 
                        closeMentorCard()}
                      >
                        <FiChevronLeft/>
                      </div>
                    </div>
                    <img src={groundzero} className="h-[25px] hover:scale-110 transition ease-in-out"/>
                    <div className="flex w-1/2 justify-end px-2">
                        <a href={mentor.personalLink} target="_blank" className="hover:scale-110 transition ease-in-out">
                            <img src={linkedin}/>
                        </a>
                    </div>
                </div>
              </div>

              {/* Pic */}
              <div className="h-[60%] bg-white text-black grid place-items-center object-fit">
                  IMAGE
              </div>

              {/* Desc */}
              <div className="h-fit bg-black px-4 pt-2 pb-8">
                  {/* Details */}
                  <div className="pt-2">
                      <h2 className="text-2xl">
                          {mentor.title}
                      </h2>
                      <h2 className="text-lg">
                          {mentor.subtitle.map((role) => (
                            <div>
                              {role} of {mentor.info[mentor.subtitle.indexOf(role)]}
                            </div>
                          ))}
                      </h2>
                      {/* <h2 className="lg:text-xl mt-1 lg:mt-2">
                          {mentor.info}
                      </h2> */}
                      <h2 className="text-xs mt-1 whitespace-pre-line space-y-2">
                          {mentor.description.map((desc) => (
                              <div>
                                  {desc}
                              </div>
                          ))}
                      </h2>
                  </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default MentorCard;
