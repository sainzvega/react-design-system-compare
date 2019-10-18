import React from "react";
import { useTailwind } from "./useTailwind";

/**
 * This is the non-memoized version of the button. It is left here for profiling comparison
 */
// export function Button({
//   color = "white",
//   bg = "teal-500",
//   textSize = "base",
//   rounded = "rounded",
//   px = "3",
//   py = "4",
//   children,
//   ...props
// }) {
//   const buttonProps = useTailwind({
//     bg,
//     color,
//     textSize,
//     px,
//     py,
//     rounded,
//     ...props
//   });
//   return <button {...buttonProps}>{children}</button>;
// }

/**
 * Memoization is required other wise perf issues may occur when rendering multiple buttons
 */
export const Button = React.memo(function Button({
  color = "white",
  bg = "teal-500",
  textSize = "base",
  rounded = "rounded",
  px = "3",
  py = "4",
  children,
  ...props
}) {
  const buttonProps = useTailwind({
    bg,
    color,
    textSize,
    px,
    py,
    rounded,
    ...props
  });
  return <button {...buttonProps}>{children}</button>;
});
