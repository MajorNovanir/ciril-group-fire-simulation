import { styled } from "styled-components";

export const GridContainer = styled.div<{gridheight: number, gridwidth: number}>(
  ({ gridheight, gridwidth, theme: { spacing } }) => `
  display: grid;
  grid-template-columns: repeat(${gridwidth}, 1fr);
  grid-template-rows: repeat(${gridheight}, 1fr);
  gap: ${spacing.small};
`,
);
