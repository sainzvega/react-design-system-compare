import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { ThemeProvider } from "./ThemeProvider";

const Decorator = storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>;

storiesOf("Button || styled-system", module)
  .addDecorator(Decorator)
  .add("default", () => <Button>This is a Button</Button>)
  .add("text color", () => <Button color="reds.4">This is a Button</Button>);
