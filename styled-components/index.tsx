import React, { useState } from "react";
import { StyledButton } from "./Button";
import { StyledText } from "./Text";

// const Button: any = StyledButton;
// Button.Text = StyledText;

const Button = ({ children, ...props }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  console.log(props);
  console.log(children);
  return (
    <StyledButton
      variant={props.variant}
      action={props.action}
      states={{ hover: isHovered, active: isActive }}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
    >
      {children}
    </StyledButton>
  );
};
Button.Text = StyledText;

export default Button;
