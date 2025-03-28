import React from 'react'
import { workshops } from '../../../constants'
import WorkshopCard from './WorkshopCard'

const Workshops = () => {
  return (
    <div className="grid place-items-center text-white xs:px-16 lg:px-40">
      <h2 className="text-white font-poppins font-lighter text-center pb-20 md:text-2xl text-xl xs:px-4 lg:px-12 xl:px-40 z-10">
        At Ground Zero 2025, we bring you exclusive masterclasses conducted by industry experts in Data Tech, Finance, Health & Wellness, and Sustainability.
      </h2>
      <div className="grid sm:grid-cols-1 gap-x-16 gap-y-10">
        {workshops.map((workshop) => (
          <WorkshopCard key={workshop.name} workshop={workshop} />
        ))}
      </div>
    </div>
  )
}

export default Workshops