import styled from "styled-components";
import { layout } from "../../../../globalStyle";

export const { SidebarRightContainer, NavContainer, ContentContainer } = {
  SidebarRightContainer: styled.div`
    border-left: 1px var(--light-3) solid;
    font-weight: var(--weight-2);
    color: var(--color-dark-1);
    padding: 0 1rem 0 1rem;
    height: 100vh;
    width: 18rem;
  `,
  NavContainer: styled.div`
    ${layout("flex", "space-between", "center")}
    padding: 1.5rem 0.5rem 1.5rem 0.5rem;
    grid-gap: 1rem;
  `,
  ContentContainer: styled.div`
    ${layout("grid")}
    grid-gap: 1rem;
  `,
};
