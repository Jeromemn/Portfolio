"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import projectsData from "../utils/projectsData";
import {
  PlayYouTube,
  YouTubeShuffle,
  ThumbsDown,
  ThumbsUp,
  FilledThumbsUp,
  FilledThumbsDown,
  BackYouTube,
  ForwardYouTube,
  UpArrow,
  VolumeIcon,
  ReplayIcon,
  PauseButton,
} from "../icons";
import AllLinks from "../utils/links";
import useTimer from "../hooks/useTimer";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const FooterWrapper = styled.div`
  display: flex;
  background-color: #212121;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 72px;
  flex-direction: column;
`;

const PlayPauseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
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
  justify-content: end;
  align-items: center;
  padding: 0 1rem;
  width: 257.14px;
`;

const FooterSectionContainer = styled.div`
  display: flex;
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

const ProgressSliderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: #f44336;
  width: ${(props) => props.$percentage}%;
`;

const ProgressSliderBall = styled.div`
  display: none;
  background-color: #f44336;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  /* position: absolute; */

  ${FooterWrapper}:hover & {
    display: flex;
    cursor: pointer;
    position: absolute;
  }
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
  align-content: center;
  width: fit-content;
`;

const TimerWrapper = styled.div`
  display: flex;
`;

const DisplayTimer = styled.p`
  color: #aaa;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 400;
`;

const TimerPlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderProgress = styled(Slider)`
  padding: 15px;
  margin: -15px;
  & .rc-slider-rail {
    background-color: #bdbdbd;
    height: 4px;
    /* top: 0; */
  }

  & .rc-slider-track {
   height: 4px;
    background-color: #f44336;
    border: none;
    /* top: 0; */

  }

  & .rc-slider-handle {
    /* display: none;
     */
    background-color: #f44336;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border-color: #f44336;
    border: none;

    &onChange {
      border: none;
    }
  }
`;

const Footer = ({ params }) => {
  const pathname = usePathname();
  const { currentTime, startTimer, pauseTimer, stopTimer, updateTimer,isTimerRunning } =
    useTimer();
  const [progress , setProgress] = useState(0);

  const onSliderChange = (value) => {
  };

  const onPlay = () => {
    startTimer();
  };
  const onPause = () => {
    pauseTimer();
  };



  const playTime = 90;

  const router = useRouter();
  useEffect(() => {
    if (isTimerRunning && currentTime >= playTime) {
      stopTimer();
      // logic to redirect to next page
      const updatedLinks = AllLinks.filter((item) => item !== pathname);
      router.push(
        updatedLinks[Math.floor(Math.random() * updatedLinks.length)]
      );
    }
  }, [currentTime, isTimerRunning, stopTimer]);

  const percentage = Math.min((currentTime / playTime) * 100);
  console.log(currentTime % 60);
  const currentPlay =
    (currentTime >= 59 ? Math.floor(currentTime / 60) : 0) +
    ":" +
    (currentTime <= 10 ? Math.floor(currentTime / 60) : 0 +
    Math.floor(currentTime % 60));
  const playMinutes =
    (playTime >= 60 ? Math.floor(playTime / 60) : 0) + ":" + (playTime % 60);

  const randomLink = useMemo(() => {
    const updatedLinks = AllLinks.filter((item) => item !== pathname);
    const newLink =
      updatedLinks[Math.floor(Math.random() * updatedLinks.length)];
    return newLink || updatedLinks[0];
  }, [pathname]);

  const project = projectsData.find((item) => item.link === pathname);
  console.log(project);

  const projectImages = projectsData.reduce(
    (acc, current) => ({ ...acc, [current.link]: current.image }),
    {}
  );

  console.log(projectImages);

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
  };

  const { url, alt, title } = images[pathname] || {};

  return (
    <FooterWrapper>
      {/* <ProgressSlider> */}
        {/* <ProgressSliderBar $percentage={percentage}>
          <ProgressSliderBall />
        </ProgressSliderBar> */}
        <SliderProgress value={currentTime} min={0} max={playTime} step={0.1}onChange={(nextValue) => {
          updateTimer(nextValue);
        }} />
      {/* </ProgressSlider> */}
      <FooterSectionContainer>
        <TimerPlayContainer>
          <PlayPauseWrapper>
            <SkipIconWrapper>
              <BackYouTube color="white" width={24} height={24} />
            </SkipIconWrapper>
            <PlayIconWrapper onClick={isTimerRunning ? onPause : onPlay}>
              {isTimerRunning ? (
                <PauseButton color="white" width={40} height={40} />
              ) : (
                <PlayYouTube color="white" width={40} height={40} />
              )}
            </PlayIconWrapper>
            <SkipIconWrapper>
              <ForwardYouTube color="white" width={24} height={24} />
            </SkipIconWrapper>
          </PlayPauseWrapper>
          <TimerWrapper>
            <DisplayTimer>
              {currentPlay} / {playMinutes}
            </DisplayTimer>
          </TimerWrapper>
        </TimerPlayContainer>

        <NowPlayingSection>
          <Image src={`${url}`} alt={alt} width={40} height={40} />
          <CurrentPageWrapper>
            <CurrentPageText>{title}</CurrentPageText>
            <StyledLink href="/">Jerome </StyledLink>
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
            <Link as={Link} href={randomLink}>
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
