import styled from "styled-components";
import { layout } from "../../../globalStyle";

const { SubGrid } = {
  SubGrid: styled.div`
    > div:nth-child(1) {
      ${layout("flex", "space-between", "center")}
      margin-bottom: 1rem;
      font-weight: var(--weight-1);
      user-select: none;
    }

    > div:nth-child(2) {
      ${layout("grid")}
      height: ${({ toggleDropdown }) => (toggleDropdown ? "0rem" : "auto")};

      > div {
        padding: 1rem 0.5rem 1rem 0.5rem;
        ${layout("flex", "space-between", "center")}
        color: var(--dark-2);

        > div {
          ${layout("flex", "", "center")}
          grid-gap: .3rem;
        }
        &:hover {
          background: var(--light-2);
          transition: var(--transition);
          cursor: pointer;
        }
      }
    }
  `,
};

export default SubGrid;
