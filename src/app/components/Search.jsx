'use client';
import Styled from "styled-components";

const SearchWrapper = Styled.div`
  display: flex;
`;

const SearchInput = Styled.input`
  display: flex;
`;

const Search = () => {
  return (
    <SearchWrapper>
      <SearchInput type="text" placeholder="Search..." />
    </SearchWrapper>
  );
};

export default Search;