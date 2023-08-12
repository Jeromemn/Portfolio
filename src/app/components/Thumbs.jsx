"use client";
import React from "react";
import styled from "styled-components";
import {
  ThumbsDown,
  ThumbsUp,
  FilledThumbsDown,
  FilledThumbsUp,
} from "../icons";

const ThumbsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const HollowThumbs = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  /* pointer-events: none; */
  vertical-align: middle;
  /* background-color: transparent; */
  width: 35px;
  height: 35px;
  /* display: none; */

  &:hover {
    /* display: none; */
    /* ::shadow { */

    /* background-color: rgba(255, 255, 255, 0.411); */
    background-size: 30px 80px;
    background: linear-gradient(
      #bbbbbb53 0%,
      #bbbbbb53 25%,
      #bbbbbb53 75%,
      #bbbbbb53 95%,
      #bbbbbb53 100%,
      #bbbbbb53 110%
    );
    border-radius: 50%;
    /* box-shadow: 0 0 0 0   */
    /* shadow: 'rgba(255, 255, 255, 0.16)'; */
    /* width: 30px; */
    /* height: 30px; */
    display: inline-flex;
    /* position: static; */
    /* -webkit-box-shadow: rgba(255, 255, 255, 0.16) 0px 3px 6px 8px, rgba(255, 255, 255, 0.16) 0px 3px 6px 8px;
  -moz-box-shadow: rgba(255, 255, 255, 0.16) 0px 3px 6px 8px, rgba(255, 255, 255, 0.16) 0px 3px 6px 8px;
  box-shadow: rgba(255, 255, 255, 0.16) 0px 3px 6px 8px, rgba(255, 255, 255, 0.16) 0px 3px 6px 8px; */
    /* } */
  }

  /* ${ThumbsWrapper}:hover & {
  display: block;
} */
`;

// const theme = {
//   shadow: 'rgba(255, 255, 255, 0.16)'
// }

const FilledThumbs = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  /* width: 30px; */
`;

const Thumbs = () => {
  return (
    <ThumbsWrapper>
      <HollowThumbs>
        <ThumbsDown color="white" width={24} height={24} />
      </HollowThumbs>
      <HollowThumbs>
        <ThumbsUp color="white" width={24} height={24} />
      </HollowThumbs>
      <FilledThumbs>
        <FilledThumbsDown color="white" width={30} height={30} />
      </FilledThumbs>
      <FilledThumbs>
        <FilledThumbsUp color="white" width={30} height={30} />
      </FilledThumbs>
    </ThumbsWrapper>
  );
};

export default Thumbs;
