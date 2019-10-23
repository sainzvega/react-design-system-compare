// ========== METHOD 1 Direct styled components with style functions ==========
// import styled from "@emotion/styled";
// import { space, typography, color, border } from "styled-system";

// export const Button = styled.button`
//   ${space}
//   ${typography}
//   ${color}
//   ${border}
// `;

// Button.defaultProps = {
//   color: "white",
//   bg: "teals.4",
//   fontSize: "2",
//   borderRadius: "2",
//   px: "3",
//   py: "4",
//   ":hover": {
//     bg: "teals.6"
//   }
// };

// ========== METHOD 2 CSS prop ==========
import styled from "@emotion/styled";
import css from "@styled-system/css";
import {
  space,
  typography,
  color,
  border,
  variant,
  compose
} from "styled-system";

export const Button = styled("button")(
  css({
    // NOTE; This does not return a style function so it must exit outside of the compose call
    fontSize: "2",
    borderRadius: "2",
    px: 3,
    py: 4,
    color: "white",
    bg: "teals.4",
    ":hover": {
      bg: "teals.6"
    }
  }),
  compose(
    // NOTE: this is an example on how to use composition, it is not required but maybe required for performance intensive situations
    space,
    typography,
    color,
    border,
    variant({
      scale: "buttons",
      variants: {
        primary: {
          // NOTE: these define default variants that can be overriden in the theme.buttons
          color: "white",
          bg: "teals.4",
          ":hover": {
            bg: "teals.6"
          }
        },
        secondary: {
          color: "white",
          bg: "reds.4",
          ":hover": {
            bg: "reds.6"
          }
        }
      }
    })
  )
);
