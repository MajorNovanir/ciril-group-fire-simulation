import styled from "styled-components";
import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>(
  ({ disabled, theme }) => `
  background-color: ${disabled ? theme.colors.secondary : theme.colors.fire};
  border: none;
  color: black;
  padding: ${theme.spacing.large};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: ${theme.spacing.small};
  cursor: ${disabled ? "not-allowed" : "pointer"};
  border-radius: ${theme.borderRadius};
  opacity: ${disabled ? 0.6 : 1};
  &:hover {
    background-color: ${
  !disabled ? theme.colors.secondary : theme.colors.secondary
};
  }
`,
);

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SvgDiv = styled.div<{ disabled: boolean }>(
  ({ disabled, theme: { colors } }) => `
  height: 1.5rem;
  width: 1.5rem;
  color: ${disabled ? colors.secondary : colors.fire}
`,
);
