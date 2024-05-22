import { FC } from "react";
import { CellProps } from "./types";
import * as SC from "./style";

export const Cell: FC<CellProps> = ({ type }) => <SC.StyledCell type={type} />;
