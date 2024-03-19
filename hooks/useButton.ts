import React, { useState } from 'react';

export const useButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const buttonState = {
    isActive: isActive,
    isHovered: isHovered,
    onHoverIn: () => setIsHovered(true),
    onHoverOut: () => setIsHovered(false),
    onPressIn: () => setIsActive(true),
    onPressOut: () => setIsActive(false),
  };

  return buttonState;
};
