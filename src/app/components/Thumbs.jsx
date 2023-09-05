"use client";
import React from "react";
import styled, { css } from "styled-components";
import { useLocalStorage } from "../hooks/useLocalStorage";

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
  gap: 15px;
  width: ${( props ) => props.width || null};
`;

const styles = css`
  display: flex;
  /* can i make display none and display when hovering parent container */
  /* display: none; */
  justify-content: center;
  align-items: center;
  align-content: center;
  vertical-align: middle;
  width: 35px;
  height: 35px;

  &:hover {
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
    /* display: flex; */
  }
/* for display on hover? */
  /* ${({ $dislike }) =>
    $dislike &&
    `
  display: flex;
`}
${({ $like }) =>
    $like &&
    `
  display: flex;
`} */
`;

const HollowThumbsUp = styled.div`
  ${styles}
`;
const HollowThumbsDown = styled.div`
  ${styles}
`;

const DislikedThumb = styled.div`
  ${styles}
`;

const LikedThumb = styled(DislikedThumb)``;

const Thumbs = ({ id, width, ...props }) => {
  const [thumbs, setThumbs] = useLocalStorage("thumbs", {});
  const isLiked = thumbs[id] === "like";
  const isDisliked = thumbs[id] === "dislike";

  const onToggleDislike = () => {
    if (isDisliked) {
      setThumbs({ ...thumbs, [id]: null });
    } else {
      setThumbs({ ...thumbs, [id]: "dislike" });
    }
  };

  const onToggleLike = () => {
    if (isLiked) {
      setThumbs({ ...thumbs, [id]: null });
    } else {
      setThumbs({ ...thumbs, [id]: "like" });
    }
  };

  return (
    <ThumbsWrapper width={width}>
      {!isLiked && !isDisliked && (
        <>
          <HollowThumbsDown
            $dislike={isDisliked}
            $like={isLiked}
            onClick={onToggleDislike}
          >
            <ThumbsDown color="white" width={24} height={24} />
          </HollowThumbsDown>
          <HollowThumbsUp
            $like={isLiked}
            $dislike={isDisliked}
            onClick={onToggleLike}
          >
            <ThumbsUp color="white" width={24} height={24} />
          </HollowThumbsUp>
        </>
      )}
      {isLiked && (
        <>
          <HollowThumbsDown
            $dislike={isDisliked}
            $like={isLiked}
            onClick={onToggleDislike}
          >
            <ThumbsDown color="white" width={24} height={24} />
          </HollowThumbsDown>
          <LikedThumb
            $like={isLiked}
            $dislike={isDisliked}
            onClick={onToggleLike}
          >
            <FilledThumbsUp color="white" width={24} height={24} />
          </LikedThumb>
        </>
      )}
      {isDisliked && (
        <>
          <DislikedThumb
            $dislike={isDisliked}
            $like={isLiked}
            onClick={onToggleDislike}
          >
            <FilledThumbsDown color="white" width={24} height={24} />
          </DislikedThumb>
          <HollowThumbsUp
            $like={isLiked}
            $dislike={isDisliked}
            onClick={onToggleLike}
          >
            <ThumbsUp color="white" width={24} height={24} />
          </HollowThumbsUp>
        </>
      )}
    </ThumbsWrapper>
  );
};

export default Thumbs;
