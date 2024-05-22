import { CSSProp } from "styled-components";

declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      fire: string;
      ash: string;
      empty: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: string;
  }
}
