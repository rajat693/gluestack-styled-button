import { styled } from "@gluestack-style/react";
import { Pressable } from "react-native";

export const StyledButton = styled(
    Pressable,
    {
      rounded: "$xl",
      variants: {
        action: {
          primary: {
            _text: {
              color: "$primary0",
            },
            ":active": {
              bg: "$primary100",
            },
            ":hover": {
              bg: "$primary100",
            },
          },
          secondary: {
            _text: {
              color: "$secondary0",
            },
            ":active": {
              bg: "$secondary100",
            },
            ":hover": {
              bg: "$secondary100",
            },
          },
        },
        variant: {
          ghost: {
            px: "$6",
            py: "$4",
          },
        },
      },
    },
    {
      descendantStyle: ["_text"],
    }
  );