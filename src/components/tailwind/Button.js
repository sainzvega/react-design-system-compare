import React from "react";
import { useTailwind } from "./useTailwind";

export const Button = ({ children, ...props }) => {
  const buttonProps = useTailwind(props);
  return <button {...buttonProps}>{children}</button>;
};

Button.defaultProps = {
  color: "white",
  bg: "teal-500",
  textSize: "base",
  rounded: "rounded",
  px: "3",
  py: "4"
};

/**
 * Memoization is required other wise perf issues may occur when rendering multiple buttons
 * This is the memoized version of the button. It is left here for profiling comparison
 */
// export const Button = React.memo(function Button({ children, ...props }) {
//   const buttonProps = useTailwind(props);
//   return <button {...buttonProps}>{children}</button>;
// });

// Button.defaultProps = {
//   color: "white",
//   bg: "teal-500",
//   textSize: "base",
//   rounded: "rounded",
//   px: "3",
//   py: "4"
// };
