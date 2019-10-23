/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { theme } from "./rebass.theme";

//**NOTE: Resets for direct comparison are being provided by tailwindCSS import
// (i.e. border resets, box-sizing, etc)
export const EmotionThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
