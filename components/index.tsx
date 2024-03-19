import React, { forwardRef } from "react";
import { useButton } from "../hooks/useButton";

const ButtonMain = (StyledButton: any) =>
  forwardRef(({ ...props }, ref) => {
    const { isActive, isHovered, ...buttonState } = useButton();

    return (
      <StyledButton
        {...props}
        ref={ref}
        states={{
          active: isActive,
          hover: isHovered,
        }}
        {...buttonState}
      />
    );
  });

const ButtonText = (StyledText: any) => forwardRef(({...props}: any,ref) => {
    return <StyledText ref={ref}>{props.children}</StyledText>;
})

// function ButtonText(StyledText: any) {
//   // Return a function that can be invoked later
//   return function ButtonTextInstance() {
//     return <StyledText />;
//   };
// }

export function createButton(StyledButton: any, StyledText: any) {
  const Button: any = ButtonMain(StyledButton);

  Button.Text = ButtonText(StyledText);

  Button.displayName = "Button";
  Button.Text.displayName = "Button.Text";

  return Button;
}

