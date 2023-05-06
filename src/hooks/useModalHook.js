import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const controlModal = value => {
    setIsOpen(value);
  };

  return [isOpen, controlModal];
};
