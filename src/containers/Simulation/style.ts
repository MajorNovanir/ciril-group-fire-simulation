import { styled } from "styled-components";

export const SimulationWrapper = styled.div(
  ({ theme: { spacing } }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.large};
  padding: ${spacing.large};
`,
);
