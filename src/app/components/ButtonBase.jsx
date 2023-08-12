import PropTypes from "prop-types";

import {
  PlayYouTube,
  YouTubeShuffle,
  Verified,
  GitHub,
  LinkedIn,
  ThumbsDown,
  ThumbsUp,
  FilledThumbsUp,
  FilledThumbsDown,
  BackYouTube,
  ForwardYouTube,
  UpArrow,
  VolumeIcon,
} from "../icons";
import Link from "next/link";
import { styled } from "styled-components";
// import BackYouTube from "../images/Icons/BackYouTube";
// import FilledThumbsUp from "../images/Icons/FilledThumbsUp";
// import ThumbsUp from "../images/Icons/ThumbsUp";

const iconList = {
  play: PlayYouTube,
  shuffle: YouTubeShuffle,
  verified: Verified,
  gitHub: GitHub,
  linkedIn: LinkedIn,
  back: BackYouTube,
  forward: ForwardYouTube,
  FilledUp: FilledThumbsUp,
  FilledDown: FilledThumbsDown,
  ThumbsUp: ThumbsUp,
  ThumbsDown: ThumbsDown,
  upArrow: UpArrow,
  volume: VolumeIcon,
};

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

const PlayIconWrappper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  vertical-align: middle;
  /* padding: 8px; */
  outline: none;
  z-index: 0;
  line-height: 1;
  width: 20px;
  height: 20px;
`;

const ButtonName = styled.p`
  color: black;
  /* padding-left: 10px; */
  font-size: 14px;
  font-weight: 600;
`;

const Icon = styled.svg``;

const ButtonBase = ({ text, width, height, style }) => {
  // console.log(icon);
  return (
    <MusicButton width={width} height={height}>
      {/* <PlayIconWrappper $iconlist={iconList}> */}
      {/* <PlayYouTube color="black" width={20} height={20} /> */}
      {/* <Icon $iconlist={iconList} color="black" width={20} height={20}  /> */}
      {/* </PlayIconWrappper> */}
      {/* <PlayCustom color='black' width={20} height={20}/> */}
      {/* {<Image src={PlayCustom} alt="play" width={20} height={20} margin-right='6px' />} */}
      <ButtonName>{text}</ButtonName>
    </MusicButton>
  );
};

// ButtonBase.defaultProps = {
//   iconlist: 'play',
//   text: "Play",
// };

// ButtonBase.propTypes = {
//   iconlist: PropTypes.oneOf(Object.keys(iconList)),
//   text: PropTypes.string,
// };

export default ButtonBase;
