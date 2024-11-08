import React from "react";
import NavigationBar from "../components/NavigationBar";
import gz from "../assets/groundtime.png";
import "../index.css";
console.log(gz);

function EventSchedule() {
  return (
    <>
      <div className="bg-darkBlue w-full overflow-hidden min-h-screen">
        <NavigationBar className="navbar-special-margin" />
        <div className="pt-20 pb-10 px-4">
          <h1 className="font-poppins text-white text-center text-5xl mt-10 font-light ">
            EVENT SCHEDULE
          </h1>
          <br></br>
        </div>

        <br></br>
        <div className="flex justify-center items-center mt-24">
          <img
            src={gz}
            alt="Event Schedule Coming Soon"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default EventSchedule;
