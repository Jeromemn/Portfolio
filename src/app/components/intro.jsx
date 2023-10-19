'use client';
import React from 'react';
import Link from 'next/link';
import { styled } from 'styled-components';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import AllLinks from '../utils/links';
import { mq } from '../styles/mixins';
import { PlayYouTube, YouTubeShuffle, Verified, RadioPlay } from '../icons';
import ButtonBase from './ButtonBase';
import { youTubeSansDarkBold } from '../styles/setFonts';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 640px;

  ${mq.smallDesktop(`
    max-width: 60%;
  `)}

  ${mq.mobile(`
    align-items: center;
    gap: .5rem;
    max-width: none;
  `)}
`;

const NameIntro = styled.h1`
  padding: 0 0;
  font-size: 3rem;
  color: white;
  line-height: 1.2;
`;

const IntroText = styled.p`
  color: white;
  padding: 1rem 0;

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
  padding-left: 0;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  ${mq.mobile(`
  display: none;
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

const MobileButtonContainer = styled.div`
  display: none;

  ${mq.mobile(`
    display: flex;
    padding-left: 0;
    gap: 1rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    `)}
`;

const Intro = () => {
  const pathname = usePathname();

  const randomLink = useMemo(() => {
    const updatedLinks = AllLinks.filter((item) => item !== pathname);
    const newLink = updatedLinks[Math.floor(Math.random() * updatedLinks.length)];
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
        I enjoy building ideas, trying new things and listening to tunes. Thank you for visiting my site, please click
        around and explore!
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
        <ButtonBase variant="secondary" as={Link} target="_blank" href="https://github.com/Jeromemn" passHref={true}>
          <RadioPlay color="white" size={24} />
          Subscribe
        </ButtonBase>
      </ButtonContainer>
      <MobileButtonContainer>
        <ButtonBase variant="primary" as={Link} href={randomLink}>
          <YouTubeShuffle color="black" width={24} height={24} />
          Shuffle
        </ButtonBase>
        <ButtonBase variant="secondary" as={Link} target="_blank" href="https://github.com/Jeromemn" passHref={true}>
          <RadioPlay color="white" size={24} />
          Subscribe
        </ButtonBase>
      </MobileButtonContainer>
    </IntroContainer>
  );
};

export default Intro;
