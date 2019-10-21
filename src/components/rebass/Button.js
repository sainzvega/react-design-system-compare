import React from "react";
import { Button as BaseButton } from "rebass";

// NOTE: This can also be done through configuration in the them
export const Button = props => (
  <BaseButton
    color="white"
    bg="teals.4"
    fontSize="2"
    px="3"
    py="4"
    sx={{
      borderRadius: 2 // TODO: why cant this work as a default prop
    }}
    {...props}
  />
);
