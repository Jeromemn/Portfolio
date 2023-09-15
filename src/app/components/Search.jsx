"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import useOnClickOutside from "../hooks/useOnOutsideClick";
import Styled from "styled-components";
import { SearchIcon, BackArrow, GoBackIcon } from "../icons";
import CenterContent from "./CenterContent";
import { mq } from "../styles/mixins";

const SearchWrapper = Styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  padding-top: 1rem;
  justify-content: center;

  ${mq.mobile(`
   display: none;
  `)}

  ${mq.largeMobile(`
  z-index: 1;
  position: relative;
  `)}
`;

const SearchContainer = Styled.div`
  display: flex;
  flex-direction: column;

  ${mq.largeMobile(`
    width: 100%;
    justify-content: center;
    align-items: center;
  `)}
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
  width: 400px;

  ${({ $editMode }) =>
    $editMode &&
    `
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  background: #030303;
    
  `}

    ${({ $isOpen }) =>
      $isOpen &&
      `
      border-bottom: none;
      border-radius: 8px 8px 0 0;
      background: #030303;
    `}

    ${mq.largeMobile(`
    width: 400px;
    padding-left: 1rem;
    box-sizing: content-box;
    `)}
    ${mq.mobile(`
    max-width: 100%;
    padding-left: 0;
    `)}
`;

const SearchInput = Styled.input`
  display: inline-block;
  background-color: transparent;
  border: none;
  padding: 0 2rem 0 1rem;
  font-size: 16px;
  outline: none;
  height: 100%;
  color: white;
  width: 100%;

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
  justify-content: center;
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 8px 0;

  ${mq.largeMobile(`
    width: 400px;
    padding-left: 1rem;
    box-sizing: content-box;
  `)}

  ${mq.mobile(`
    max-width: 100%;
    box-sizing: content-box;
    padding: 0;
  `)}
`;

const DropDownItem = Styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left:1rem;
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
  background-color: #030303;

  &&:hover {
    /* background-color: rgba(255,255,255,0.2); */
   background-color: rgba(255, 255, 255, 0.15);
  }
`;

const DropDownText = Styled.p`
  display: flex;
  font-size: 16px;
  color:rgba(255,255,255,0.5);
  width: 100%;
  font-weight: 400;
`;

const MobileSearchButton = Styled.div`
  display: none;
${mq.mobile(`
  display: flex;
  justify-content: center;
  align-items: center;
  right: 1rem;
  /* left: 90%; */
  position: absolute;
  padding: 1rem;
  `)}
`;

const MobileSearchWrapper = Styled.div`
 display: flex;
  flex-direction: column;
  position: fixed;
  width: 90%;
  padding-top: 1rem;
`;

const MobileSearchContainer = Styled.div`
  ${mq.mobile(`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
  `)}
`;

const SearchSection = Styled.div`
display: flex;
position: fixed;
top: 0;
width: 100%;

${mq.largeMobile(`
  z-index: 1;
  width: 100%;
`)}
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
  const [editMode, setEditMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const toggling = () => setEditMode(!editMode);
  const dropdownRef = useRef();
  useOnClickOutside(dropdownRef, () => setEditMode(false));
  const mobileDropdownRef = useRef();
  useOnClickOutside(mobileDropdownRef, () => setIsOpen(false));

  const filteredItems = useMemo(() => {
    if (!searchValue) {
      return dropDownSelection;
    }
    return dropDownSelection.filter((selection) => {
      return selection.title.toLowerCase().includes(searchValue?.toLowerCase());
    });
  }, [searchValue]);

  const openSearch = () => {
    console.log("open search");
    setIsOpen(!isOpen);
    setEditMode(!editMode);
  };

  return (
    <SearchSection>
      <SearchWrapper>
        <CenterContent>
          <SearchContainer>
            <SearchBox onClick={toggling} $editMode={editMode}>
              <SearchIcon
                width={24}
                height={24}
                color="rgba(255, 255, 255, 0.5)"
              />
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
                {filteredItems.map(({ title, link }) => (
                  <Link key={title} href={link} onClick={toggling}>
                    <DropDownItem>
                      <DropDownText>{title}</DropDownText>
                    </DropDownItem>
                  </Link>
                ))}
              </DropDownWrapper>
            )}
          </SearchContainer>
        </CenterContent>
      </SearchWrapper>

      <MobileSearchButton onClick={openSearch}>
        <SearchIcon width={30} height={30} color="rgba(255, 255, 255, 0.5)" />
      </MobileSearchButton>
      {isOpen && (
        <MobileSearchContainer>
          <MobileSearchWrapper>
            <SearchBox onClick={openSearch} $isOpen={isOpen}>
              <GoBackIcon
                width={24}
                height={24}
                color="rgba(255, 255, 255, 0.5)"
              />
              <SearchInput
                id="inputId"
                type="text"
                placeholder="Search Pages, Projects"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </SearchBox>
            <DropDownWrapper ref={mobileDropdownRef}>
              {filteredItems.map(({ title, link }) => (
                <Link key={title} href={link} onClick={openSearch}>
                  <DropDownItem>
                    <DropDownText>{title}</DropDownText>
                  </DropDownItem>
                </Link>
              ))}
            </DropDownWrapper>
          </MobileSearchWrapper>
        </MobileSearchContainer>
      )}
    </SearchSection>
  );
};

export default Search;
