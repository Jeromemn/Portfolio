'use client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import useOnClickOutside from '../hooks/useOnOutsideClick';
import Styled from 'styled-components';
import ButtonBase from './ButtonBase';
import { OptionsDots } from '../icons';

const DropDownWrapper = Styled.div`
  display: flex;
  width: 240px;
  height: 370px;
  z-index: 100;
  position: fixed;
  background: #212121;
  border-radius: 2px;
  border: 1px solid rgba(255,255,255,0.1);
  /* float: left; */
  /* margin-left: 386px; */
  margin-left: 368px;
  margin-top: 38px;
  flex-direction: column;
  /* bottom: 0; */
  /* right: 0; */
  /* display: none; */

  /* ${({ isopen }) =>
    isopen &&
    `
    display: flex;
    `} */
   
`;

const OptionsDropDown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDropDown = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <>
      <ButtonBase variant="icon" onClick={openDropDown}>
        <OptionsDots color="white" size={24} />
        {/* {isOpen && <OptionsDropDown />} */}
      </ButtonBase>
      {isOpen && <DropDownWrapper>{children}</DropDownWrapper>}
    </>
  );
};

export default OptionsDropDown;
