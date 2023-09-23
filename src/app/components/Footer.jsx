"use client";
import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import projectsData from "../utils/projectsData";
import { mq } from "../styles/mixins";
import {
  PlayYouTube,
  YouTubeShuffle,
  BackYouTube,
  ForwardYouTube,
  UpArrow,
  VolumeIcon,
  ReplayIcon,
  PauseButton,
} from "../icons";
import AllLinks from "../utils/links";
import useTimer from "../hooks/useTimer";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Thumbs from "./Thumbs";

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

  ${mq.largeMobile(`
    padding: 0;
    gap: 0;
  `)};

  ${mq.mobile(`
    padding: 0;
    gap: 0;
  `)};
`;

const NowPlayingSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  grid-area: middle;
  align-items: center;
  overflow: hidden;

  ${mq.mobile(`
  display: none;
  `)};
`;

const ShuffleRepeatSection = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 1rem;
  width: 257.14px;

  ${mq.largeMobile(`
    width: fit-content;
    padding: 0;
  `)};

  ${mq.mobile(`
  `)};
`;

const FooterSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  padding: 0 1rem;

  ${mq.mobile(`
  justify-content: space-around;
  `)}
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

  ${mq.mobile(`
  `)};
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

  ${mq.mobile(`
    display: none;
  `)};
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

const HideThumbsMobile = styled.div`
  ${mq.mobile(`
    display: none;
  `)};
`;

const CurrentPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //width: 100%;
  justify-content: center;
  width: fit-content;
`;

const TimerWrapper = styled.div`
  display: flex;

  ${mq.mobile(`
    display: none;
  `)};
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

  ${mq.mobile(`
    padding: 15px 0 15px 0;
    margin: -15px 0 -15px 0;
  `)}

  ${mq.largeMobile(`
    padding: 15px 0 15px 0;
    margin: -15px 0 -15px 0;
  `)}

  & .rc-slider-rail {
    background-color: #bdbdbd;
    height: 4px;
  }

  & .rc-slider-track {
    height: 4px;
    background-color: rgb(255, 0, 0);
    border: none;
  }

  & .rc-slider-handle {
    display: none;

    margin-left: 5px;
    background-color: rgb(255, 0, 0);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    opacity: 1;
    border: 1px solid rgb(255, 0, 0);
    cursor: pointer;

    &:hover {
      width: 16px;
      height: 16px;
    }
    &:active {
      width: 16px;
      height: 16px;
      display: flex;
    }

    ${FooterWrapper}:hover & {
      display: flex;
      cursor: pointer;
    }
  }
`;

const Footer = () => {
  const pathname = usePathname();
  const {
    currentTime,
    startTimer,
    pauseTimer,
    stopTimer,
    updateTimer,
    isTimerRunning,
  } = useTimer();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime, isTimerRunning, stopTimer]);

  const currentPlay =
    (currentTime >= 59 ? Math.floor(currentTime / 60) : 0) +
    ":" +
    (currentTime <= 10
      ? Math.floor(currentTime / 60)
      : 0 + Math.floor(currentTime % 60));
  const playMinutes =
    (playTime >= 60 ? Math.floor(playTime / 60) : 0) + ":" + (playTime % 60);

  const randomLink = useMemo(() => {
    const updatedLinks = AllLinks.filter((item) => item !== pathname);
    const newLink =
      updatedLinks[Math.floor(Math.random() * updatedLinks.length)];
    return newLink || updatedLinks[0];
  }, [pathname]);

  const ForwardLink = useMemo(() => {
    const curIndex = AllLinks.findIndex((item) => item === pathname);
    const getNextLink = AllLinks[curIndex + 1];
    return getNextLink || AllLinks[0];
  }, [pathname]);

  const PreviousLink = useMemo(() => {
    const curIndex = AllLinks.findIndex((item) => item === pathname);
    const getNextLink = AllLinks[curIndex - 1];
    return getNextLink || AllLinks[0];
  }, [pathname]);

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
  };

  const { url, alt, title } = images[pathname] || {};

  return (
    <FooterWrapper>
      <SliderProgress
        value={currentTime}
        min={0}
        max={playTime}
        step={0.1}
        handleStyle={{
          borderColor: "rgb(255, 0, 0)",
          backgroundColor: "rgb(255, 0, 0)",
          boxShadow: "none",
        }}
        onChange={(nextValue) => {
          updateTimer(nextValue);
        }}
      />
      <FooterSectionContainer>
        <TimerPlayContainer>
          <PlayPauseWrapper>
            <SkipIconWrapper as={Link} href={PreviousLink}>
              <BackYouTube color="white" width={24} height={24} />
            </SkipIconWrapper>
            <PlayIconWrapper onClick={isTimerRunning ? onPause : onPlay}>
              {isTimerRunning ? (
                <PauseButton color="white" width={40} height={40} />
              ) : (
                <PlayYouTube color="white" width={40} height={40} />
              )}
            </PlayIconWrapper>
            <SkipIconWrapper as={Link} href={ForwardLink}>
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
          <HideThumbsMobile>
            <Thumbs id={pathname} />
          </HideThumbsMobile>
        </NowPlayingSection>
        <ShuffleRepeatSection>
          <IconWrapper>
            <VolumeIcon color="rgb(144, 144, 144)" width={30} height={30} />
          </IconWrapper>
          <IconWrapper>
            <ReplayIcon color="white" width={30} height={30} />
          </IconWrapper>
          <IconWrapper>
            <Link href={randomLink}>
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
