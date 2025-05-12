import React, { useRef} from 'react';
import { sponsorsData } from '../../constants';
import SponsorsTier from './SponsorsTier';
import { SectionDivider } from '../../components';

export default function SponsorsGrid() {
  return (
    <div className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto px-4">
      <SponsorsTier
        title="Diamond Sponsors"
        sponsors={sponsorsData.diamond}
        flexClass="justify-center"
        itemClass="w-[80%] md:w-[100%]"
        descriptionsAtBottom={false} // Descriptions appear under each logo
      />
      
      <SectionDivider spacing={0}/>
      <br></br>
      <br></br>

      <SponsorsTier
        title="Platinum Sponsors"
        sponsors={sponsorsData.platinum}
        flexClass="justify-center"
        itemClass="w-[45%] md:w-[45%]"
        descriptionsAtBottom={true}
      />

      <SectionDivider spacing={0}/>
      <br></br>
      <br></br>

      <SponsorsTier
        title="Gold Sponsors"
        sponsors={sponsorsData.gold}
        flexClass="justify-center"
        itemClass="w-[40%] md:w-[40%]"
        descriptionsAtBottom={false} // Descriptions appear under each logo
      />

      <SponsorsTier
        title="Media Partners"
        sponsors={sponsorsData.mediaPartners}
        flexClass="justify-center"
        itemClass="w-[30%] md:w-[28%]"
        descriptionsAtBottom={false} // Descriptions appear under each logo
      />
      <SponsorsTier
        title="Community Partners"
        sponsors={sponsorsData.communitypartners}
        flexClass="justify-center"
        itemClass="w-[25%] md:w-[28%]"
        descriptionsAtBottom={false} // Descriptions appear at the bottom of the section
      />

      <SectionDivider spacing={0}/>
      <br></br>
      <br></br>

      <SponsorsTier
        id="beyond-zero"
        title="Beyond Zero Partners"
        sponsors={sponsorsData.beyondZeroPartners}
        flexClass="justify-center"
        itemClass="w-[35%]"
        descriptionsAtBottom={true} // Descriptions appear under each logo
      />
      </div>
  );
}