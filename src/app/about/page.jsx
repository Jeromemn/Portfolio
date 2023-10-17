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

const AboutPageWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;

  ${mq.largeMobile(`
    padding-top: 0;
    padding-bottom: 2rem;
    height: auto;
  `)}

  ${mq.mobile(`
    max-height: 100vh;
    align-items: center;
    position: relative;
    height: auto;
  `)}
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${mq.largeMobile(`
  display: none;
  `)}

  ${mq.mobile(`
  display: none;
  `)}
`;

const AboutHeader = styled.h2`
  font-size: 3rem;
  color: white;
  line-height: 1;
`;

const AboutSubHeader = styled.h3`
  font-size: 2rem;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  ${mq.largeMobile(`
        padding: 0 2rem 0 2rem;
    `)}
`;

const AboutParagraph = styled.p`
  font-size: 18px;
  color: white;
  font-weight: 500;

  ${mq.largeMobile(`
    font-size: 14px;
    font-weight: 500;
  `)}
`;

const AboutSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${mq.largeMobile(`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 0 0 1rem 0;
    `)}
  ${mq.mobile(`
    padding: 0;
  `)}
`;

const MediumContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
  padding-top: 1rem;

  ${mq.largeMobile(`
     display: none;
    `)}

  ${mq.mobile(`
  display: none;
    flex-direction: column;
  `)};
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid white;
  //width: 582px;
  //height: 582px;
  width: 450px;
  height: 450px;

  ${mq.smallDesktop(`
    width: 350px;
    height: 398px;
  `)}

  ${mq.largeMobile(`
    height:280px;
    width: 280px;
  `)}

  ${mq.mobile(`
    height: 200px;
    width: 200px;

    margin-right: auto;
    margin-left: auto;
    right: 0;
  `)}
`;

const MobileAboutSection = styled.div`
  display: none;
  ${mq.mobile(`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    width: 100%;
  `)}
`;

const MobileNameWrapper = styled.div``;

const TabletAboutSection = styled.div`
  display: none;

  ${mq.largeMobile(`
    display: flex;
    flex-direction: column;
    gap: .5rem;
  `)}

  ${mq.mobile(`
    display: none;
  `)}
`;

const TabletHeaderWrapper = styled.div`
  display: none;

  ${mq.largeMobile(`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `)}
`;

const TabletHeaderText = styled.div`
  display: none;
  ${mq.largeMobile(`
        display: flex;
        flex-direction: column;
        justify-content: flew-start;
        gap: 1rem;
        padding-top: 1rem;
    `)}
`;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;

  ${mq.largeMobile(`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    `)}
`;

const AssistHeaders = styled.h2`
  display: flex;
  ${mq.largeMobile(`
        display: flex;
        color: rgba(255, 255, 255, 0.5)
        
    `)}
`;

const GreetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //width: 50%;
  justify-content: space-evenly;
  max-width: 500px;
`;

const ImageAndSocials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AboutPage = () => {
  return (
    <AboutPageWrapper>
      <MediumContainer>
        <AboutSection>
          <GreetingWrapper>
            <AssistHeaders>Greetings, I&apos;m</AssistHeaders>
            <AboutHeader className={youTubeSans.className}>Jerome Nixon</AboutHeader>
            <AboutSummaryWrapper>
              <AboutParagraph>Crafting seamless, user-friendly interfaces and interactive applications.</AboutParagraph>
              <AboutParagraph>
                When not developing, I enjoy entertaining my dogs, scuba diving, retreating to the mountains, and of
                course, listening to music.
              </AboutParagraph>
              <AboutParagraph>
                Let&apos;s Collaborate! I&apos;m enthusiastic about partnering with developers and designers who share
                my vision for innovative, user-centric digital experiences.
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

      <TabletAboutSection>
        <TabletHeaderWrapper>
          <TabletHeaderText>
            <AssistHeaders>Greetings, I&apos;m</AssistHeaders>
            <AboutHeader className={youTubeSans.className}>Jerome Nixon</AboutHeader>
            <AssistHeaders>a dedicated</AssistHeaders>
            <AboutSubHeader className={youTubeSans.className}>Full Stack Developer</AboutSubHeader>
            <SocialsWrapper>
              <ButtonBase variant="mobilePrimary" width="40px" height="40px">
                <NewGitHub color="black" size={23} />
              </ButtonBase>
              <ButtonBase variant="mobilePrimary" width="40px" height="40px">
                <LinkedInIcon color="rgb(0, 102, 153)" />
              </ButtonBase>
            </SocialsWrapper>
          </TabletHeaderText>
          <Box>
            {/* <Drawing /> */}
            <CanvasTesting />
          </Box>
        </TabletHeaderWrapper>
        <AboutSummaryWrapper>
          <AboutParagraph>Crafting seamless, user-friendly interfaces and interactive applications.</AboutParagraph>
          <AboutParagraph>
            When not developing, I enjoy entertaining my dogs, scuba diving, retreating to the mountains, and of course,
            listening to music.
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
      </TabletAboutSection>

      <MobileAboutSection>
        <MobileNameWrapper>
          <AboutHeader className={youTubeSans.className}>Jerome Nixon</AboutHeader>
          <Box>
            {/* <Drawing /> */}
            <CanvasTesting />
          </Box>
        </MobileNameWrapper>
        <AboutSubHeader className={youTubeSans.className}>Full Stack Developer</AboutSubHeader>
        <AboutSummaryWrapper>
          <AboutParagraph>Crafting seamless, user-friendly interfaces and interactive applications.</AboutParagraph>
          <AboutParagraph>
            When not developing, I enjoy entertaining my dogs, scuba diving, retreating to the mountains, and of course,
            listening to music.
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
      </MobileAboutSection>
    </AboutPageWrapper>
  );
};

export default AboutPage;
