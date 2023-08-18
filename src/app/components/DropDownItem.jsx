"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import useOnClickOutside from "../hooks/useOnOutsideClick";
import Styled from "styled-components";
import ButtonBase from "./ButtonBase";
import { OptionsDots } from "../icons";

const ItemWrapper = Styled.div`
  display: flex;
  width: auto;
  height: 48px;
  align-items: center;
  padding: 0 8px;
  color: rgb(255, 255, 255);

  &:hover {
    background: rgba(99, 99, 99, 0.1);
  }
  
`;

const ItemText = Styled.p`
  color: rgb(255, 255, 255);
`;

// const StyledLink as Styled(Link)``;

const DropDownItem = () => {
  return (
    <ItemWrapper>
      <ItemText>DropDownItem</ItemText>
    </ItemWrapper>
  )
}

const GoToDev = () => {
  return (
    <ItemWrapper>
      <ItemText as={Link} href='/'>Go to Dev.to</ItemText>
    </ItemWrapper>
  )
}

export { DropDownItem, GoToDev };

