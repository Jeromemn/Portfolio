"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import useOnClickOutside from "../hooks/useOnOutsideClick";
import Styled from "styled-components";
import { SearchIcon } from "../icons";

const SearchWrapper = Styled.div`
  display: flex;
  position: absolute;
  /* background-color: red; */
  /* z-index: 1; */
  top: 0;
  max-width: 400px;
  width: 100%;
  left: 10%;
  padding: 1rem;
  /* height: 100%; */
  /* flex-direction: column; */


`;

const SearchContainer = Styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #030303; */
  /* border: 1px solid rgba(255, 255, 255, 0.15); */
  /* border-radius: 8px; */
  /* width: fit-content; */
  min-width: 100%;
  /* max-width: 400px; */
  /* position: absolute; */
  /* padding-left:1rem; */
  
`;

const SearchBox = Styled.div`
  display: flex;
  height: 2.5rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255,255,255,0.15);
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  position: relative;
  padding-left:1rem;
  /*  maybe use box shadow */
  /* box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.4); */

  ${({ $editMode }) =>
    $editMode &&
    `
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  background: #030303;
    
    `}
`;

const SearchInput = Styled.input`
  display: inline-block;
  background-color: transparent;
  border: none;
  padding: 0 2rem 0 1rem;
  font-size: 16px;
  outline: none;
  height: 100%;

  ${({ $editMode }) =>
    $editMode &&
    `

  `}
  

 &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    padding-left: 0.5rem;
  }

`;

const DropDownWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #030303;
  width: 100%;
  /* max-width: 382px; */
  justify-content: center;
  /* z-index: 2; */
  /* top: calc(--SearchBox.height); */
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 8px 0;

`;

const DropDownItem = Styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left:1rem;
  font-family: Roboto,Noto Naskh Arabic UI,Arial,sans-serif;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 400;
  height: 2.5rem;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
`;

const DropDownText = Styled.p`
  display: flex;
  font-size: 16px;
  color:rgba(255,255,255,0.5);

`;

const dropDownSelection = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 5,
    title: " Tuff Skin",
    link: "/projects/tuffSkin",
  },
  {
    id: 6,
    title: "Modern Pilgrim",
    link: "/projects/modernPilgrim",
  },
  {
    id: 7,
    title: "Traders Journal",
    link: "/projects/tradersJournal",
  },
  {
    id: 8,
    title: "Switch",
    link: "/projects/switch",
  },
  {
    id: 9,
    title: "Card Battle",
    link: "/projects/cardbattle",
  },
  {
    id: 10,
    title: "PWA Text Editor",
    link: "/projects/pwaTextEditor",
  },
];

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const toggling = () => setEditMode(!editMode);
  const dropdownRef = useRef();
  useOnClickOutside(dropdownRef, () => setEditMode(false));

  const filteredItems = useMemo(() => {
    if (!searchValue) {
      return dropDownSelection;
    }
    return dropDownSelection.filter((selection) => {
      return selection.title.toLowerCase().includes(searchValue?.toLowerCase());
    });
  }, [searchValue]);

  console.log(filteredItems);
  return (
    <SearchWrapper>
      <SearchContainer>
        <SearchBox onClick={toggling} $editMode={editMode}>
          <SearchIcon width={24} height={24} color="rgba(255, 255, 255, 0.5)" />
          <SearchInput
            id="inputId"
            type="text"
            placeholder="Search Pages, Projects"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </SearchBox>
        {editMode && (
          <DropDownWrapper ref={dropdownRef}>
            {filteredItems.map(({ title }) => (
              <DropDownItem key={title}>
                <DropDownText>{title}</DropDownText>
              </DropDownItem>
            ))}
          </DropDownWrapper>
        )}
      </SearchContainer>
    </SearchWrapper>
  );
};

export default Search;
