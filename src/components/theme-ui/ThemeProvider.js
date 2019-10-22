/** @jsx jsx */
import { jsx } from "theme-ui";
import { ThemeProvider as ThemeUIProvider } from "theme-ui";
import { theme } from "./styled-system.theme";

//**NOTE: Resets for direct comparison are being provided by tailwindCSS import
// (i.e. border resets, box-sizing, etc)
export const ThemeProvider = ({ children }) => (
  <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
);
