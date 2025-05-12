import React from 'react';
import { phase_zero_1, phase_zero_10, phase_zero_11, phase_zero_12, phase_zero_13, phase_zero_14, phase_zero_2, phase_zero_3, phase_zero_4, phase_zero_5, phase_zero_6, phase_zero_7, phase_zero_8, phase_zero_9 } from '../../../assets/index';
import { State, useState } from 'react';

// Reusable photo component
const PhotoItem = ({ photo, useColSpan = true, transformOrigin = 'center center', hoverEffect = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  // Create a CSS variable approach for better compatibility between inline styles and CSS classes
  const baseScale = photo.zoom || 1;
  const hoverScale = baseScale * 1.1; // 10% larger on hover

  return (
    <div
      key={photo.id}
      className="relative overflow-hidden rounded-lg shadow-md group"
      style={{
        aspectRatio: photo.aspectRatio,
        ...(useColSpan && { gridColumn: `span ${photo.colSpan}` })
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-blue2/20 transition-opacity duration-300 z-10"
        style={{ 
          opacity: isHovered ? 1 : 0,
        }}
      />
      
      <img
        src={photo.src}
        alt={`Phase Zero Photo ${photo.id}`}
        className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out"
        loading="lazy"
        style={{
          transform: `scale(${isHovered ? hoverScale : baseScale})`,
          transformOrigin: transformOrigin,
        }}
      />
    </div>
  );
};

const phaseZeroCollagePhotos = [
  { id: 1, src: phase_zero_14, aspectRatio: '1/1', zoom: 1.0, colSpan: 2, colSpanMobile: 0 },
  { id: 2, src: phase_zero_10, aspectRatio: '6/5', zoom: 1.0, colSpan: 3, colSpanMobile: 6 },
  { id: 3, src: phase_zero_7, aspectRatio: '3/2', zoom: 1.4, colSpan: 4, colSpanMobile: 6 },
  { id: 4, src: phase_zero_6, aspectRatio: '1/1', zoom: 1.2, colSpan: 2, colSpanMobile: 0 },
  { id: 5, src: phase_zero_5, aspectRatio: '5/4', zoom: 1.1, colSpan: 1 },
  { id: 6, src: phase_zero_8, aspectRatio: '1/1', zoom: 1.0, colSpan: 1 },
  { id: 7, src: phase_zero_3, aspectRatio: '16/9', zoom: 1.2, colSpan: 3 },
  { id: 8, src: phase_zero_9, aspectRatio: '1/1', zoom: 1.1, colSpan: 1 },
  { id: 9, src: phase_zero_1, aspectRatio: '1/1', zoom: 1.3, colSpan: 2 },
  { id: 10, src: phase_zero_12, aspectRatio: '1.2/1', zoom: 1.0, colSpan: 2 },
  { id: 11, src: phase_zero_13, aspectRatio: '4/3', zoom: 1.0, colSpan: 4 },
];

const ImageCollage = () => {
  return (
    <div>
    <div className="relative w-full max-w-5xl mx-auto mt-16 mb-10 hidden sm:flex flex-col gap-2 md:gap-3 items-center align-center justify-center">
      <div className="grid grid-cols-12 w-4/5 gap-2 md:gap-3 items-end">
        {phaseZeroCollagePhotos.filter(photo => photo.id >= 1 && photo.id <= 4).map((photo) => (
          <PhotoItem key={photo.id} photo={photo} hoverEffect={true} />
        ))}
      </div>

        <div className="w-full min-h-[30rem] grid grid-cols-12 gap-2 md:gap-3">
          <div className="h-full" style={{ gridColumn: 'span 3' }}>
            <div className="flex flex-col gap-2 md:gap-3 items-end">
              {phaseZeroCollagePhotos.filter(photo => photo.id >= 5 && photo.id <= 6).map((photo) => (
                <PhotoItem key={photo.id} photo={photo} useColSpan={false} />
              ))}
            </div>
          </div>

          <div className="h-full" style={{ gridColumn: 'span 6' }}>
            <div className="flex flex-col gap-2 md:gap-3 items-end">
              {phaseZeroCollagePhotos.filter(photo => photo.id >= 7 && photo.id <= 7).map((photo) => (
                <PhotoItem key={photo.id} photo={photo} useColSpan={false} />
              ))}

              <div className="flex flex-row gap-2 md:gap-3">
                {phaseZeroCollagePhotos.filter(photo => photo.id >= 8 && photo.id <= 9).map((photo) => (
                  <PhotoItem key={photo.id} photo={photo} transformOrigin="right center" />
                ))}
              </div>
            </div>
          </div>

          <div className="h-full" style={{ gridColumn: 'span 3' }}>
            <div className="flex flex-col gap-2 md:gap-3 items-end">
              {phaseZeroCollagePhotos.filter(photo => photo.id >= 10 && photo.id <= 11).map((photo) => (
                <PhotoItem key={photo.id} photo={photo} useColSpan={false} />
              ))}
            </div>
          </div>
        </div>
      </div>




      <div className="flex flex-col gap-2 items-center justify-center w-full sm:hidden relative my-10">
        <div className="grid grid-cols-2 gap-2 md:gap-3 w-full items-end">
          {phaseZeroCollagePhotos.filter(photo => photo.id >= 2 && photo.id <= 3).map((photo) => (
            <PhotoItem key={photo.id} photo={photo} useColSpan={false} />
          ))}
        </div>

        <div className="gap-2 md:gap-3">
          {phaseZeroCollagePhotos.filter(photo => photo.id >= 7 && photo.id <= 7).map((photo) => (
            <PhotoItem key={photo.id} photo={photo} useColSpan={false} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 md:gap-3 w-full">
          {phaseZeroCollagePhotos.filter(photo => photo.id >= 8 && photo.id <= 9).map((photo) => (
            <PhotoItem key={photo.id} photo={photo} useColSpan={false} />
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default ImageCollage;