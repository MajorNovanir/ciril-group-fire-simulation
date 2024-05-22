import { styled } from "styled-components";
import { CellProps } from "./types";

export const StyledCell = styled.div<CellProps>(
  ({ theme: { colors }, type }) => `
  width: 2rem;
  height: 2rem;
  background-color: ${colors[type]};
  border: 1px solid #ddd;
`,
);
