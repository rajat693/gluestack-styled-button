import { styled } from "@gluestack-style/react";
import { Text } from "react-native";

export const StyledText = styled(
    Text,
    {
      fontWeight: "700",
      fontSize: "$md",
    },
    {
      ancestorStyle: ["_text"],
    }
  );