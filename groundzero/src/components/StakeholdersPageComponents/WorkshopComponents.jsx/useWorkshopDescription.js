import { useState } from 'react';

export default function useWorkshopDescription(description) {
  const [showDescription, setShowDescription] = useState(false);
  const [descriptionPage, setDescriptionPage] = useState(0);

  const descriptionChunks = description;

  const handleNextPage = () => {
    setDescriptionPage(prev => Math.min(prev + 1, descriptionChunks.length - 1));
  };

  const handlePrevPage = () => {
    setDescriptionPage(prev => Math.max(prev - 1, 0));
  };

  const toggleDescription = () => {
    setShowDescription(prev => !prev);
  };

  return {
    showDescription,
    descriptionPage,
    descriptionChunks,
    handleNextPage,
    handlePrevPage,
    toggleDescription,
  };
}
