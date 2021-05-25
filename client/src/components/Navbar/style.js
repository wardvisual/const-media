import styled from "styled-components";
import { layout } from "../../globalStyle";

export const { NavbarContainer, SearchBox } = {
  NavbarContainer: styled.div`
    position: fixed;
    width: 100%;
    div.content {
      padding: 0.8rem;
      /* Layout */
      ${layout("grid", "space-between", "center")}
      grid-template-columns: 1fr 2fr 1fr;

      > div {
        padding: 1rem;
      }

      div:nth-child(1) {
        ${layout("flex", "", "center")}
      }

      div:nth-child(3) {
        ${layout("flex", "space-between", "center")}
        grid-gap: 1rem;
      }
    }
  `,

  SearchBox: styled.div`
    width: 100%;
    ${layout("flex", "space-between", "center")}
    grid-gap: 1rem;

    div {
      ${layout("flex", "", "center")}
      background: var(--light-2);
      padding: 0 0.8rem 0 0.8rem;

      input {
        width: 25rem;
      }
    }
  `,
};
