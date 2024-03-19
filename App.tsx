import React from "react";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "./gluestack-style.config";
import { View } from "react-native";
import Button from "./styled-components";

const App = () => {
  return (
    <StyledProvider config={config}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button variant="ghost" action="secondary">
          <Button.Text>hello world</Button.Text>
        </Button>
      </View>
    </StyledProvider>
  );
};

export default App;
