import * as React from 'react';

import { generateStreets } from 'services/generateStreets';

export const useQuestion = () => {
  const streetNames = generateStreets();

  const getRandomStreet = () => streetNames[Math.floor(Math.random()*streetNames.length)];;
  
  const [currentStreet, setCurrentStreet] = React.useState(getRandomStreet());
  const [isOpen, setIsOpen] = React.useState(true);

  const generateNextStreet = () => {
    setCurrentStreet(getRandomStreet());
  };

  const onMinimizeQuestion = () => {
    setIsOpen(false);
  }

  return { generateNextStreet, currentStreet, isOpen, minimize: onMinimizeQuestion  };
};
