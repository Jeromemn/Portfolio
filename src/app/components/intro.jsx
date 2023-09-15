"use client";
import Link from "next/link";
import { styled } from "styled-components";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import AllLinks from "../utils/links";
import { mq } from "../styles/mixins";
import {
  PlayYouTube,
  YouTubeShuffle,
  Verified,
  LinkedInIcon,
  RadioPlay,
  OptionsDots,
} from "../icons";
import ButtonBase from "./ButtonBase";
import {
  youTubeDark,
  youTubeSans,
  youTubeSansDarkBold,
} from "../styles/setFonts";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 40%;
  align-self: flex-end;
  justify-self: flex-start;
  padding-bottom: 2rem;

  ${mq.mobile(`
    width: 100%;
    padding: 0rem 1rem;
    align-items: center;
    gap: .5rem;
    max-width: 100%;
  `)}

  ${mq.largeMobile(`
    max-width: 60%;
    padding-left: 2rem
  `)}
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

  ${mq.mobile(`
    display: none;
  `)}

  ${mq.largeMobile(`
    width: 100%;
    font-size: 14px;
    font-weight: 400;
  `)}
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-left: 0rem;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  ${mq.mobile(`
    width: 100%;
    align-items: center;
    justify-content: space-between;
  `)}
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

  ${mq.largeMobile(`
    align-items: flex-start;
  `)}
`;

const PlayButton = styled(ButtonBase)`
  ${mq.mobile(`
    display: none;
  `)}
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
      <NameIntro className={youTubeSansDarkBold.className}>Jerome</NameIntro>
      <VerifiedContainer>
        <Verified />
        <VerifiedHeader>Verified Developer</VerifiedHeader>
      </VerifiedContainer>
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
        <PlayButton variant="primary">
          <PlayYouTube color="black" width={24} height={24} />
          <ButtonName>Play</ButtonName>
        </PlayButton>
        <ButtonBase
          variant="secondary"
          as={Link}
          target="_blank"
          href="https://github.com/Jeromemn"
          passHref={true}
        >
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
