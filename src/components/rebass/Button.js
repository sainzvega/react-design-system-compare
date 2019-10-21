import React from "react";
import { Button as BaseButton } from "rebass";

// NOTE: This can also be done through configuration in the them
export const Button = props => (
  <BaseButton
    color="white"
    bg="teals.4"
    fontSize="2"
    radius={1}
    px={3}
    py={4}
    {...props}
  />
);
