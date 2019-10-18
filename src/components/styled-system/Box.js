// example Box.js
import styled from "styled-components";
import { space, color, layout } from "styled-system";

const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  space,
  color,
  layout
);

const Box2 = styled.div`
  box-sizing: border-box;
  min-width: 0;
  ${space}
  ${color}
  ${layout}
  font-size: ${props => {
    debugger;
    return props.theme.fontSizes[2];
  }}
`;

export { Box, Box2 };
