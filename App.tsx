import React, { useRef } from "react";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "./gluestack-style.config";
import { Text, View } from "react-native";
import { StyledButton } from "./styled-components/Button";
import { StyledText } from "./styled-components/Text";
import { createButton } from "./components";

const Button = createButton(StyledButton, StyledText);

const App = () => {
  const ref = useRef(null);
  return (
    <StyledProvider config={config}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button variant="ghost" action="secondary" ref={ref}>
          {/* <Text>Hello</Text> */}
          <Button.Text>Hello</Button.Text>
        </Button>
      </View>
    </StyledProvider>
  );
};

export default App;
