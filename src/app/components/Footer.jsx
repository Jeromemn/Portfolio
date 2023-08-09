"use client";
import { usePathname, useSearchParams } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import play from "../images/play.svg";
import SkipForward from "../images/SkipForward";
// import projectImage from "../images/projectImage.png";
// import contactImage from "../images/contactImage.png";
// import about from "../images/about.png";
import SkipBackwards from "../images/SkipBackwards";
import PlayCustom from "../images/playCustom";
import ForwardYouTube from "../images/ForwardYouTube";
import PlayYouTube from "../images/playYouTube";
import BackYouTube from "../images/BackYouTube";
import VolumeIcon from "../images/VolumeIcon";
import ReplayIcon from "../images/ReplayIcon";
import YouTubeShuffle from "../images/youTubeShuffle";
import UpArrow from "../images/UpArrow";
import ThumbsUp from "../images/ThumbsUp";
import FilledThumbsUp from "../images/FilledThumbsUp";
import ThumbsDown from "../images/ThumbsDown";
import FilledThumbsDown from "../images/FilledThumbsDown";
import projectsData from "../utils/projectsData";
// import projectImage from "/projectImage.png";

const FooterWrapper = styled.div`
  display: flex;
  background-color: rgb(33, 33, 33);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 72px;
  flex-direction: column;
  /* justify-content: space-between; */
`;

const PlayPauseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  /* margin-left: 1rem; */
  gap: 1rem;
`;

const NowPlayingSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  grid-area: middle;
  align-items: center;
  overflow: hidden;
`;

const ShuffleRepeatSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

const FooterSectionContainer = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: space-between;
  align-items: center;
  height: inherit;
  padding: 0 1rem;
`;

const ProgressSlider = styled.div`
  display: flex;
  background-color: #bdbdbd;
  width: 100%;
  height: 4px;
  top: 0;
  position: relative;
`;

const SkipIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  width: 24px;
  height: 24px;
  padding: 8px;
  outline: none;
  user-select: none;
  cursor: pointer;
  z-index: 0;
  line-height: 1;
`;

const PlayIconWrapper = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  padding: 8px;
  outline: none;
  user-select: none;
  cursor: pointer;
  z-index: 0;
  line-height: 1;
  width: 40px;
  height: 40px;
`;

const CurrentPageText = styled.p`
  color: white;
  font-family: Roboto, Noto Naskh Arabic UI, Arial, sans-serif;
  font-weight: 500;
  line-height: 19.2px;
  font-size: 16px;
`;

const IconWrapper = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  padding: 8px;
`;

const ArrowWrapper = styled.div`
  transform: rotate(180deg);
  width: 32px;
  height: 32px;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  padding: 8px;
`;

const ThumbsContainer = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 24px;
  height: 24px;
`;

const FilledThumbsContainer = styled(ThumbsContainer)`
  display: none;
`;

const ThumbsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Footer = () => {
  const pathname = usePathname();
  // console.log(pathname);
  // const searchParams = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(null);
  // const [image, setImage] = useState("");

  const projectImages = projectsData.reduce(
    (acc, current) => ({...acc, [current.link]: current.image}),
    {}
  );
  
  const images = {
    "/": {
      url: "/home.png",
      alt: "some alt",
      title: "Home Page",
    },
    "/about": {
      url: "/about.png",
      alt: "some alt",
      title: "About",
    },
    "/contact": {
      url: "/contactImage.png",
      alt: "some alt text",
      title: "Contact",
    },
    "/projects": {
      url: "/projects.png",
      alt: "some alt text",
      title: "Projects",
    },
    ...projectImages,
    // "/projects/tuffSkin": {
      //   url: "/projects.png",
    //   alt: "some alt text",
    //   title: "Projects",
    // },
  };
  // console.log(images);
  
  const { url, alt, title } = images[pathname] || {};
  // console.log(images[pathname]);

  return (
    <FooterWrapper>
      <ProgressSlider></ProgressSlider>
      <FooterSectionContainer>
        <PlayPauseWrapper>
          <SkipIconWrapper>
            <BackYouTube color="white" width={24} height={24} />
          </SkipIconWrapper>
          <PlayIconWrapper>
            <PlayYouTube color="white" width={40} height={40} />
          </PlayIconWrapper>
          <SkipIconWrapper>
            <ForwardYouTube color="white" width={24} height={24} />
          </SkipIconWrapper>
        </PlayPauseWrapper>

        <NowPlayingSection>
          <Image src={`${url}`} alt={alt} width={40} height={40} />
          {/* <Image src={image} alt={`${image}`} width={40} height={40} /> */}
          <div>
            <CurrentPageText>{title}</CurrentPageText>
            <CurrentPageText>Jerome </CurrentPageText>
          </div>
          <ThumbsSection>
            <ThumbsContainer>
              <ThumbsDown color="white" width={30} height={30} />
            </ThumbsContainer>
            <ThumbsContainer>
              <ThumbsUp color="white" width={30} height={30} />
            </ThumbsContainer>
            <FilledThumbsContainer>
              <FilledThumbsDown color="white" width={30} height={30} />
            </FilledThumbsContainer>
            <FilledThumbsContainer>
              <FilledThumbsUp color="white" width={30} height={30} />
            </FilledThumbsContainer>
          </ThumbsSection>
        </NowPlayingSection>

        <ShuffleRepeatSection>
          <IconWrapper>
            <VolumeIcon color="rgb(144, 144, 144)" width={30} height={30} />
          </IconWrapper>
          <IconWrapper>
            <ReplayIcon color="white" width={30} height={30} />
          </IconWrapper>
          <IconWrapper>
            <YouTubeShuffle color="white" width={30} height={30} />
          </IconWrapper>
          <ArrowWrapper>
            <UpArrow color="white" width={30} height={30} />
          </ArrowWrapper>
        </ShuffleRepeatSection>
      </FooterSectionContainer>
    </FooterWrapper>
  );
};

export default Footer;
