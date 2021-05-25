import styled from "styled-components";
import { layout } from "../../../../globalStyle";

export const {
  SidebarLeftContainer,
  NavContainer,
  ContentContainer,
  ContentShortcuts,
  ContentMenu,
  ContentUserThumb,
} = {
  SidebarLeftContainer: styled.div`
    height: 100vh;
    border-right: 1px var(--light-3) solid;
    font-weight: var(--weight-2);
    width: 18rem;
    padding: 0 1rem 0 1rem;
  `,
  NavContainer: styled.div`
    padding: 1.5rem 0.5rem 1.5rem 0.5rem;
    ${layout("flex", "", "center")};

    h2 {
      color: var(--dark-2);
    }
  `,
  ContentContainer: styled.div`
    ${layout("grid")}
    grid-gap: .2rem;
  `,
  ContentUserThumb: styled.div`
    ${layout("flex", "", "center")}
    grid-gap: 0.5rem;
    padding: 2rem 0.7rem 2rem 0.7rem;
    margin-bottom: 1rem;
    background: var(--light-2);
    color: var(--dark-2);

    div {
      line-height: 1.2rem;
      h4,
      p {
        overflow: hidden;
      }

      p {
        color: var(--dark-3);
        font-weight: var(--weight-1);
      }
    }
  `,
  ContentMenu: styled.div`
    ${layout("grid")}
    grid-gap: .3rem;

    > div.active {
      background: var(--light-2);
    }

    > div {
      padding: 1rem 0.7rem 1rem 0.7rem;

      ${layout("flex", "", "center")}
      grid-gap: .5rem;
      &:hover {
        background: var(--light-2);
        transition: var(--transition);
        cursor: pointer;
      }
    }
  `,
  ContentShortcuts: styled.div`
    padding: 1rem 0.7rem 1rem 0.7rem;

    > div:nth-child(1) {
      ${layout("flex", "space-between", "center")}
      margin-bottom: 1rem;
      cursor: pointer;
      font-weight: var(--weight-1);
      user-select: none;
    }

    > div:nth-child(2) {
      ${layout("grid")}
      height: ${({ toggleDropdown }) => (toggleDropdown ? "0rem" : "auto")};

      > div {
        padding: 1rem 0 1rem 0;
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
