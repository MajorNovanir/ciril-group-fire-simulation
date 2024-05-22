import React, { FC } from "react";
import * as SC from "./style";
import { ButtonProps } from "./types";
import { Flame } from "../svg/Flame";

export const Button: FC<ButtonProps> = ({ onClick, disabled, children }) => (
  <SC.StyledButton onClick={onClick} disabled={disabled}>
    <SC.ButtonWrapper>
      <SC.SvgDiv disabled={disabled}>
        <Flame />
      </SC.SvgDiv>
      {children}
    </SC.ButtonWrapper>
  </SC.StyledButton>
);
