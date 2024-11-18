import { ColorsType, TypographiesType } from ".";
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: ColorsType;
    typographies: TypographiesType;
  }
}
