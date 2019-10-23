/** @jsx jsx */
import { jsx } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import { theme } from "./theme-ui.theme";

//**NOTE: Resets for direct comparison are being provided by tailwindCSS import
// (i.e. border resets, box-sizing, etc)
export const ThemeUIProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
