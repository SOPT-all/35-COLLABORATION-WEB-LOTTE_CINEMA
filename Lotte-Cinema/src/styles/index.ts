import { colors } from "./colors";
import { typographies } from "./typographies";

export const theme = {
  colors,
  typographies,
};

export type ColorsType = typeof theme.colors;
export type TypographiesType = typeof theme.typographies;

export default theme;
