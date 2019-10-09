import React from "react";
import { storiesOf } from "@storybook/react";
import { Box, Box2 } from "./Box";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

const Decorator = storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>;

storiesOf("Box: styled-system", module)
  .addDecorator(Decorator)
  .add("Box1", () => <Box bg="blues.2">This is Box1</Box>)
  .add("Box2", () => <Box2 bg="blues.5">This is Box2</Box2>);
