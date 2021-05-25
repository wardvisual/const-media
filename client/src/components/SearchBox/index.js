import React from "react";
import styled from "styled-components";
import { layout } from "../../globalStyle";
import { SearchIcon } from "../Icons";

const { SearchBoxContainer } = {
  SearchBoxContainer: styled.div`
    ${layout("flex", "space-between", "center")}
    div {
      ${layout("flex", "", "center")}
      background: var(--light-2);
      padding: 0 0.8rem 0 0.8rem;
      width: 100%;
    }
  `,
};
const SearchBox = () => {
  return (
    <SearchBoxContainer>
      <div>
        <SearchIcon />
        <input type="text" placeholder="Search..." />
      </div>
    </SearchBoxContainer>
  );
};

export default SearchBox;
