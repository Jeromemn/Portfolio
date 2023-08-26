"use client";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";
// import shuffle from "../images/shuffle.svg";
// import play from "../images/play.svg";
// import PlayCustom from "../images/playCustom";
// import LinkedIn from "../images/Icons/linkedIn";
// import GitHub from "../images/Icons";
// import Verified from "../images/Icons/verified";
// import Shuffle from "../images/newShuffle";
// import YouTubeShuffle from "../images/Icons/YouTubeShuffle";
// import PlayYouTube from "../images/Icons/PlayYouTube";
import AllLinks from "../utils/links";
import {
  PlayYouTube,
  YouTubeShuffle,
  Verified,
  GitHub,
  LinkedInIcon,
  ExploreYouTube,
  LibraryYT,
  SubscriptionsYT,
  RadioPlay, OptionsDots
} from "../icons";
import ButtonBase from "./ButtonBase";
import { youTubeDark, youTubeSans } from "../styles/setFonts";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 40%;
  align-self: flex-end;
  justify-self: flex-start;
  /* position: relative; */
  /* padding-left: 4rem; */
  padding-bottom: 2rem;
`;

const NameIntro = styled.h1`
  padding: 0rem 0rem;
  font-size: 3rem;
  color: white;
  line-height: 1.2;
`;

const IntroText = styled.p`
  color: white;
  padding: 1rem 0rem;
  
`;

const ButtonContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  padding-left: 0rem;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

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
  background-color: white;
`;

const ButtonName = styled.p`
  color: black;
  /* padding-left: 10px; */
  font-size: 14px;
  font-weight: 500;
`;

const VerifiedHeader = styled.p`
  color: white;
  font-size: 16px;
`;

const VerifiedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const Intro = () => {
  // console.log(AllLinks.length);
  // const randomLink = () => {
  //   // let newLink = null
  //   let newLink = AllLinks[Math.floor(Math.random() * AllLinks.length)];
  //   // return newLink = AllLinks[Math.floor(Math.random() * AllLinks.length)];
  //   console.log(newLink);
  //   return newLink;
  // };

  // const Shuffle = () => {
  //   console.log('Shuffle');
  //   // console.log(randomLink);
  //   randomLink();
  //   // console.log(randomLink);
  // }

  const pathname = usePathname();

  const randomLink = useMemo(() => {
    const updatedLinks = AllLinks.filter((item) => item !== pathname);
    const newLink =
      updatedLinks[Math.floor(Math.random() * updatedLinks.length)];
    return newLink || updatedLinks[0];
  }, [pathname]);

  return (
    <IntroContainer>
      <VerifiedContainer>
        <Verified />
        <VerifiedHeader>Verified Developer</VerifiedHeader>
      </VerifiedContainer>

      <NameIntro className={youTubeSans.className}>Jerome</NameIntro>
      {/* <NameIntro className={youTubeSans.className}>Dirty Heads</NameIntro> */}
      <IntroText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, ipsa
        totam laudantium cupiditate nam, accusantium eum nobis vel perferendis
        libero nisi sapiente nulla, illo exercitationem impedit eos harum
        assumenda iusto.
      </IntroText>
      <ButtonContainer>
        <ButtonBase variant='primary' as={Link} href={randomLink}>
          <YouTubeShuffle color="black" width={24} height={24} />
          Shuffle
        </ButtonBase>
      

        <ButtonBase variant='primary'>
          {/* <PlayIconWrappper> */}
          <PlayYouTube color="black" width={24} height={24} />
          {/* </PlayIconWrappper> */}
          {/* <PlayCustom color='black' width={20} height={20}/> */}
          {/* {<Image src={PlayCustom} alt="play" width={20} height={20} margin-right='6px' />} */}
          <ButtonName>Play</ButtonName>
        </ButtonBase>
        <ButtonBase variant='secondary'>
          <RadioPlay color="white" size={24} />
          Subscribe
          </ButtonBase>
        {/* </MusicButton> */}
        <ButtonBase variant='icon'>
          <OptionsDots color="white" size={24} />
          </ButtonBase>
{/* 
        <MusicButton>
          <Link href="www.linkedin.com/in/jeromenixon">
            <LinkedInIcon color="black" />
          </Link>
          <ButtonName>Subscribe</ButtonName>
          <Link href="https://github.com/Jeromemn">
            <GitHub color="black" fill />
          </Link>
        </MusicButton> */}
      </ButtonContainer>
    </IntroContainer>
  );
};

export default Intro;
