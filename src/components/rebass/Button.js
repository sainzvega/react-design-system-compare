// ========== METHOD 1: Direct Defaults and partial sx Prop  ==========
// import React from "react";
// import { Button as BaseButton } from "rebass";
// NOTE: This can also be done through configuration in the them
// export const Button = props => (
//   <BaseButton
//     color="white"
//     bg="teals.4"
//     fontSize="2"
//     px="3"
//     py="4"
//     sx={{
//       borderRadius: 2 // borderRadius is not available as a part of the standard component API because of this https://rebassjs.org/props#styled-system-props
//     }}
//     {...props}
//   />
// );

import React from "react";
import { Button as BaseButton } from "rebass";
export const Button = ({ sx, ...rest }) => (
  <BaseButton
    {...rest}
    sx={{
      color: "white",
      bg: "teals.4",
      px: 3,
      py: 4,
      borderRadius: 2,
      ":hover": {
        bg: "teals.6"
      },
      ...sx
    }}
  />
);
