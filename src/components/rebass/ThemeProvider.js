/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { theme } from "./styled-system.theme";

//**NOTE: Resets for direct comparison are being provided by tailwindCSS import
// (i.e. border resets, box-sizing, etc)
export const ThemeProvider = ({ children }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);
