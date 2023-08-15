import PropTypes from "prop-types";

// import {
//   PlayYouTube,
//   YouTubeShuffle,
//   Verified,
//   GitHub,
//   LinkedIn,
//   ThumbsDown,
//   ThumbsUp,
//   FilledThumbsUp,
//   FilledThumbsDown,
//   BackYouTube,
//   ForwardYouTube,
//   UpArrow,
//   VolumeIcon,
// } from "../icons";
import Link from "next/link";
import { styled } from "styled-components";
// import BackYouTube from "../images/Icons/BackYouTube";
// import FilledThumbsUp from "../images/Icons/FilledThumbsUp";
// import ThumbsUp from "../images/Icons/ThumbsUp";

// const iconList = {
//   play: PlayYouTube,
//   shuffle: YouTubeShuffle,
//   verified: Verified,
//   gitHub: GitHub,
//   linkedIn: LinkedIn,
//   back: BackYouTube,
//   forward: ForwardYouTube,
//   FilledUp: FilledThumbsUp,
//   FilledDown: FilledThumbsDown,
//   ThumbsUp: ThumbsUp,
//   ThumbsDown: ThumbsDown,
//   upArrow: UpArrow,
//   volume: VolumeIcon,
// };

const MusicButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 18px;
  /* font-size: 14px; */
  font-weight: 500;
  /* line-height: 36px; */
  height: 36px;
  padding: 0rem 32px;
  gap: 10px;
`;


const Icon = styled.svg``;

const ButtonBase = ({ children}) => {
  return (
    <MusicButton>
      {children}
    </MusicButton>
  );
};

export default ButtonBase;
