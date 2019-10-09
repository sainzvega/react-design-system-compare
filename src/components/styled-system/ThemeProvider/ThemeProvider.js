import React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { theme } from "./styled-system.theme";

export const ThemeProvider = ({ children }) => (
  <StyledComponentsThemeProvider theme={theme}>
    {children}
  </StyledComponentsThemeProvider>
);
