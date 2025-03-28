import React from 'react';
import { sponsorsData } from '../../constants';
import SponsorsTier from './SponsorsTier';

export default function SponsorsGrid() {
  return (
    <div className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-2xl mx-auto px-4">
      <SponsorsTier
        title="Diamond"
        sponsors={sponsorsData.diamond}
        flexClass="justify-center"
        itemClass="w-[80%]"
        descriptionsAtBottom={false} // Descriptions appear under each logo
      />
      {/* <SponsorsTier
        title="Platinum"
        sponsors={sponsorsData.platinum}
        flexClass="justify-center"
        itemClass="w-[45%] md:w-[45%]"
        descriptionsAtBottom={false}
      /> */}
      <SponsorsTier
        title="Gold"
        sponsors={sponsorsData.gold}
        flexClass="justify-center"
        itemClass="w-[45%] md:w-[45%]"
        descriptionsAtBottom={false} // Descriptions appear under each logo
      />
      <SponsorsTier
        title="Media Partners"
        sponsors={sponsorsData.mediaPartners}
        flexClass="justify-center"
        itemClass="w-[30%]"
        descriptionsAtBottom={false} // Descriptions appear under each logo
      />
      <SponsorsTier
        title="Community Partners"
        sponsors={sponsorsData.communitypartners}
        flexClass="justify-center"
        itemClass="w-[30%] md:w-[30%]"
        descriptionsAtBottom={true} // Descriptions appear at the bottom of the section
      />
      <SponsorsTier
        title="Beyond Zero Partners"
        sponsors={sponsorsData.beyondZeroPartners}
        flexClass="justify-center"
        itemClass="w-[45%]"
        descriptionsAtBottom={true} // Descriptions appear under each logo
      />
    </div>
  );
}