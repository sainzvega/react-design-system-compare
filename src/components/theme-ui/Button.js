import styled from '@emotion/styled';
import { space, typography, color, border } from "styled-system";

export const Button = styled.button`
  ${space}
  ${typography}
  ${color}
  ${border}
`;

Button.defaultProps = {
  color: "white",
  bg: "teals.4",
  fontSize: "2",
  borderRadius: "2",
  px: "3",
  py: "4"
};
