'use client';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
// import Drawing from '../components/Drawing';
import ButtonBase from '../components/ButtonBase';
import { mq } from '../styles/mixins';
import { LinkedInIcon, NewGitHub } from '../icons';
import { youTubeSans } from '../styles/setFonts';
import CanvasTesting from '../components/CanvasTesting';

const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  ${mq.mobile(`
  flex-direction: column;
  gap: 1rem;
  `)}
`;

const AboutHeader = styled.h2`
  font-size: 32px;
  color: white;
  line-height: 1;

  ${mq.desktop(`
    font-size: 48px;
    margin-left: 95px;
  `)}
`;

const AboutSubHeader = styled.h3`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.5);

  ${mq.desktop(`
    font-size: 32px;
    line-height: 1;
    margin-left: 234px;
  `)}
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  ${mq.mobile(`
      justify-content: center;
    `)}
`;

const AboutParagraph = styled.p`
  font-size: 18px;
  color: white;
  font-weight: 500;

  ${mq.largeMobile(`
    font-size: 14px;
  `)}
`;

const AboutSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${mq.desktop(`
  margin-bottom: -30px;
  
  `)}

  ${mq.largeMobile(`
    justify-content: center;
    `)}
`;

const MediumContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0 2rem 0;
  align-items: center;
  height: auto;
  position: relative;
  top: 58px;
  justify-content: center;

  ${mq.largeMobile(`
    top: 0;
  `)}
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid white;
  width: 400px;
  height: 400px;

  ${mq.smallDesktop(`
    width: 350px;
    height: 350px;
  `)}

  ${mq.largeMobile(`
    height:280px;
    width: 280px;
  `)}

  ${mq.mobile(`
    height: 200px;
    width: 200px;
  `)}
`;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
`;

const AssistHeaders = styled.h2`
  display: flex;
  color: rgba(255, 255, 255, 0.5);

  ${mq.desktop(`
    font-size: 32px;
    line-height: 1;
    `)}
`;

const GreetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 500px;
  gap: 1rem;

  ${mq.desktop(`
    max-width: fit-content;
    gap: 0;
  `)}
`;

const ImageAndSocials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-evenly;

  ${mq.mobile(`
    align-items: center;
  `)}
`;

const AboutPage = () => {
  return (
    <MediumContainer>
      <AboutSection>
        <GreetingWrapper>
          <AssistHeaders className={youTubeSans.className}>Greetings, I&apos;m</AssistHeaders>
          <AboutHeader className={youTubeSans.className}>Jerome Nixon</AboutHeader>
          <AboutSubHeader className={youTubeSans.className}>A Full Stack Developer</AboutSubHeader>
          <AboutSummaryWrapper>
            <AboutParagraph>Crafting seamless, user-friendly interfaces and interactive applications.</AboutParagraph>
            <AboutParagraph>
              When not developing, I enjoy entertaining my dogs, scuba diving, retreating to the mountains, and of
              course, listening to music.
            </AboutParagraph>
            <AboutParagraph>
              Let&apos;s Collaborate! I&apos;m enthusiastic about partnering with developers and designers who share my
              vision for innovative, user-centric digital experiences.
            </AboutParagraph>
            <AboutParagraph>
              Feel free to explore my portfolio, where you&apos;ll find projects, contact information, and interactive
              components.
            </AboutParagraph>
          </AboutSummaryWrapper>
        </GreetingWrapper>
        <ImageAndSocials>
          <Box>
            {/* <Drawing /> */}
            <CanvasTesting />
          </Box>
          <SocialsWrapper>
            <ButtonBase variant="mobilePrimary" width="40px" height="40px">
              <NewGitHub color="black" size={23} />
            </ButtonBase>
            <ButtonBase variant="mobilePrimary" width="40px" height="40px">
              <LinkedInIcon color="rgb(0, 102, 153)" />
            </ButtonBase>
          </SocialsWrapper>
        </ImageAndSocials>
      </AboutSection>
      <ButtonContainer>
        <ButtonBase as={Link} href="/contact" variant="primary" fontSize="16px">
          Contact
        </ButtonBase>
        <ButtonBase
          as={Link}
          href={'JeromeNixon-Resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          download
          variant="secondary"
          fontSize="16px"
        >
          Resume
        </ButtonBase>
      </ButtonContainer>
    </MediumContainer>
  );
};

export default AboutPage;
