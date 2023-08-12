"use client";
import { usePathname, useSearchParams } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import play from "../images/play.svg";
// import SkipForward from "../images/SkipForward";
// import projectImage from "../images/projectImage.png";
// import contactImage from "../images/contactImage.png";
// import about from "../images/about.png";
// import SkipBackwards from "../images/SkipBackwards";
// import PlayCustom from "../images/playCustom";
// import ForwardYouTube from "../images/Icons/ForwardYouTube";
// import PlayYouTube from "../images/Icons/playYouTube";
// import BackYouTube from "../images/Icons";
// import VolumeIcon from "../images/Icons/VolumeIcon";
// import ReplayIcon from "../images/Icons/ReplayIcon";
// import YouTubeShuffle from "../images/Icons/youTubeShuffle";
// import UpArrow from "../images/Icons/UpArrow";
// import ThumbsUp from "../images/Icons/ThumbsUp";
// import FilledThumbsUp from "../images/Icons/FilledThumbsUp";
// import ThumbsDown from "../images/Icons/ThumbsDown";
// import FilledThumbsDown from "../images/Icons/FilledThumbsDown";
import projectsData from "../utils/projectsData";
import  {PlayYouTube, YouTubeShuffle, Verified, GitHub, LinkedIn, ThumbsDown, ThumbsUp, FilledThumbsUp, FilledThumbsDown, BackYouTube, ForwardYouTube, UpArrow, VolumeIcon, ReplayIcon} from "../images/Icons";
import AllLinks from "../utils/links";

// import projectImage from "/projectImage.png";

const headerList = [
  { id: 1, name: "Home", path: "/", image: '/projects.png'},
  { id: 2, name: "About", path: "/about", image: '/about.png'},
  { id: 3, name: "Contact", path: "/contact", image: '/contactImage.png' },
  { id: 4, name: "Projects", path: "/projects", image: '/projects.png' },
];

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

const StyledLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  line-height: 19.2px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CurrentPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  /* align-items: center; */
  align-content: center;
  /* padding: 0 1rem; */
  width: 86px;

`;

const Footer = () => {
  const pathname = usePathname();
  // console.log(pathname);
  // const searchParams = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(null);
  // const [image, setImage] = useState("");

   // const [ThumbsUp , setThumbsUp] = useState(false);
  // const [ThumbsDown , setThumbsDown] = useState(false);

  
  const randomLink = () => {
    // let newLink = null
    let updatedLinks = AllLinks.filter((item) => item !== pathname);
    console.log(updatedLinks);

    let newLink = updatedLinks[Math.floor(Math.random() * AllLinks.length)];
    // return newLink = AllLinks[Math.floor(Math.random() * AllLinks.length)];
    console.log(newLink);
    return newLink;
  } 

  // const Shuffle = () => {
  //   console.log('Shuffle');
  //   // console.log(randomLink);
  //   randomLink();
  //   // console.log(randomLink);
  // }

  const projectImages = projectsData.reduce(
    (acc, current) => ({ ...acc, [current.link]: current.image }),
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
          <CurrentPageWrapper>
            <CurrentPageText>{title}</CurrentPageText>
            <StyledLink href='/'>Jerome </StyledLink>
          </CurrentPageWrapper>
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
            <Link as={Link} href={`${randomLink()}`}>
            <YouTubeShuffle color="white" width={30} height={30} />
            </Link>
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
