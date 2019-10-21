import React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { theme } from "./styled-system.theme";

//**NOTE: Resets for direct comparison are being provided by tailwindCSS import
// (i.e. border resets, box-sizing, etc)
export const ThemeProvider = ({ children }) => (
  <StyledComponentsThemeProvider theme={theme}>
    {children}
  </StyledComponentsThemeProvider>
);
