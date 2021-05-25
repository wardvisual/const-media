import styled from "styled-components";
import { layout, Margin } from "../../globalStyle";

export const HomeContainer = styled.div`
  .content {
    ${Margin}
  }
  ${layout("grid", "space-between", "center")}
  grid-template-columns: auto 2.5fr auto;

  div {
    border-radius: var(--radius);
  }
`;
