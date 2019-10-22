import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { ThemeProvider } from "./ThemeProvider";

const Decorator = storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>;

storiesOf("Button || ThemeUI", module)
  .addDecorator(Decorator)
  .add("default", () => <Button>This is a Button</Button>)
  .add("text color", () => <Button color="reds.4">This is a Button</Button>)
  .add("font size", () => <Button fontSize={4}>This is a Button</Button>)
  .add("padding", () => (
    <Button px={6} py={1}>
      This is a Button
    </Button>
  ));
//   .add("background", () => <Button bg="reds.8">This is a Button</Button>)
