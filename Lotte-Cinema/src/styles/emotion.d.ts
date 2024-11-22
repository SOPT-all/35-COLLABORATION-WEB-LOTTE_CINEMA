import '@emotion/react';

import { ColorsType, TypographiesType } from '.';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsType;
    typographies: TypographiesType;
  }
}
