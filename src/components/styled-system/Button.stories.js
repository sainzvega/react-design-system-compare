import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { EmotionThemeProvider as ThemeProvider } from "./EmotionThemeProvider";

const Decorator = storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>;

storiesOf("Button || styled-system", module)
  .addDecorator(Decorator)
  .add("default", () => <Button>This is a Button</Button>)
  .add("variants", () => (
    <>
      <Button variant="primary">This is a Button</Button>
      <Button ml={1} variant="secondary">
        This is a Button
      </Button>
    </>
  ))
  .add("text color", () => <Button color="reds.4">This is a Button</Button>)
  .add("font size", () => <Button fontSize={4}>This is a Button</Button>)
  .add("padding", () => (
    <Button px={6} py={1}>
      This is a Button
    </Button>
  ))
  .add("background", () => <Button bg="reds.8">This is a Button</Button>);
