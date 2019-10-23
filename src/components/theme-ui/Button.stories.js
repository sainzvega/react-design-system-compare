import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { ThemeUIProvider as ThemeProvider } from "./ThemeUIProvider";

const Decorator = storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>;

storiesOf("Button || ThemeUI", module)
  .addDecorator(Decorator)
  .add("default", () => <Button variant="primary">This is a Button</Button>)
  .add("text color", () => (
    <Button variant="secondary">Secondary Button</Button>
  ));
//   .add("font size", () => <Button fontSize={4}>This is a Button</Button>)
//   .add("padding", () => (
//     <Button px={6} py={1}>
//       This is a Button
//     </Button>
//   ))
//   .add("sx prop", () => (
//     <Button
//       sx={{
//         color: "purples.3",
//         ":hover": {
//           bg: "blues.6"
//         }
//       }}
//     >
//       This is a Button
//     </Button>
//   ));
// //   .add("background", () => <Button bg="reds.8">This is a Button</Button>)
