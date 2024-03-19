import React, { useState } from "react";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "./gluestack-style.config";
import { View } from "react-native";
import { StyledButton, StyledButtonText } from "./styled-components";

const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledProvider config={config}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StyledButton
          variant="ghost"
          action="primary"
          states={{ hover: isHovered, active: isActive }}
          onHoverIn={() => setIsHovered(true)}
          onHoverOut={() => setIsHovered(false)}
          onPressIn={() => setIsActive(true)}
          onPressOut={() => setIsActive(false)}
        >
          <StyledButtonText>hello world</StyledButtonText>
        </StyledButton>
      </View>
    </StyledProvider>
  );
};

export default App;
