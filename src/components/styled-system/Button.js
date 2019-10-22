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
import { space, typography, color, border } from "styled-system";

export const Button = styled("button")(
  css({
    color: "white",
    bg: "teals.4",
    fontSize: "2",
    borderRadius: "2",
    px: "3",
    py: "4",
    ":hover": {
      bg: "teals.6"
    }
  }), //
  space,
  typography,
  color,
  border
);
