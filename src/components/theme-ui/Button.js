/** @jsx jsx */
import { jsx } from "theme-ui";

export const Button = ({ sx, ...rest }) => (
  <button
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
