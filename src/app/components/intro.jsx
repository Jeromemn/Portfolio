"use client";
import Link from "next/link";
import { styled } from "styled-components";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import AllLinks from "../utils/links";
import {
  PlayYouTube,
  YouTubeShuffle,
  Verified,
  GitHub,
  LinkedInIcon,
  RadioPlay,
  OptionsDots,
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
  padding-left: 0rem;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

const ButtonName = styled.p`
  color: black;
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

const Intro = () => {
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
      <IntroText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, ipsa
        totam laudantium cupiditate nam, accusantium eum nobis vel perferendis
        libero nisi sapiente nulla, illo exercitationem impedit eos harum
        assumenda iusto.
      </IntroText>
      <ButtonContainer>
        <ButtonBase variant="primary" as={Link} href={randomLink}>
          <YouTubeShuffle color="black" width={24} height={24} />
          Shuffle
        </ButtonBase>
        <ButtonBase variant="primary">
          <PlayYouTube color="black" width={24} height={24} />
          <ButtonName>Play</ButtonName>
        </ButtonBase>
        <ButtonBase variant="secondary">
          <RadioPlay color="white" size={24} />
          Subscribe
        </ButtonBase>
        <ButtonBase variant="icon">
          <OptionsDots color="white" size={24} />
        </ButtonBase>
      </ButtonContainer>
    </IntroContainer>
  );
};

export default Intro;
