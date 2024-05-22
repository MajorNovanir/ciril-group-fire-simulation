import { FC } from "react";
import { GridProps } from "./types";
import * as SC from "./style";

export const Grid: FC<GridProps> = ({ gridHeight, gridWidth, children }) => (
  <SC.GridContainer gridheight={gridHeight} gridwidth={gridWidth}>
    {children}
  </SC.GridContainer>
);
