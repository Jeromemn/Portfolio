"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled, {css} from "styled-components";
import Drawing from "../components/Drawing";
import CenterContent from "../components/CenterContent";
import ButtonBase from "../components/ButtonBase";
import {mq} from "../styles/mixins";
import {LinkedInIcon, WhiteLinked, GitHubName, NewGitHub} from "../icons";
import {youTubeDark, youTubeSans} from "../styles/setFonts";
import CanvasTesting from "../components/CanvasTesting";

const AboutPageWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: calc(100vh - 72px);
  background-color: black;
  padding-top: 64px;

  ${mq.largeMobile(`
    padding-top: 0;
  `)}

  ${mq.mobile(`
    max-height: 100vh;
    align-items: center;
    z-index: 0;
    position: relative;
    padding-top: 0;
  `)}
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 2rem;
  padding-bottom: 1rem;

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
  font-size: 16px;
  color: white;

  ${mq.largeMobile(`
    font-size: 14px;
    font-weight: 500;
  `)}

  ${mq.mobile(`
  padding: 0 1rem 0 1rem;
  `)}
`;

const AboutSummaryWrapper = styled.div`
  display: none;

  ${mq.largeMobile(`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 0 2rem 1rem 2rem;
    `)}
`;

const MediumContainer = styled.div`
  display: flex;
  justify-content: space-between;

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
  width: 582px;
  height: 582px;

  ${mq.largeMobile(`
    height:300px;
    width: 300px;
  `)}

  ${mq.mobile(`
    height: 200px;
    width: 200px;
    padding-top: 1rem;

    margin-right: auto;
    margin-left: auto;
    right: 0;
  `)}
`;

const MobileAboutSection = styled.div`
  display: none;
  ${mq.mobile(`
    display: flex;
    z-index: 20;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 1rem;
  `)}
`;

const MobileNameWrapper = styled.div`

`;

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
        justify-content: center;
        gap: 1rem;
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
  display: none;

  ${mq.largeMobile(`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    `)}
`;

const AssistHeaders = styled.h2`
  display: none;
  ${mq.largeMobile(`
        display: flex;
        color: rgba(255, 255, 255, 0.5)
        
    `)}
`;

const AboutPage = () => {
    console.log(window.innerWidth)
    return (
        <AboutPageWrapper>
            <CenterContent>
                <MediumContainer>
                    <AboutSection>
                        <AboutHeader className={youTubeSans.className}>
                            Jerome Nixon
                        </AboutHeader>
                        <AboutSubHeader className={youTubeSans.className}>
                            Full Stack Developer
                        </AboutSubHeader>
                        <AboutParagraph>
                            This is a website that I made to showcase my skills as a web
                            developer. I made it using Next.js, a React framework, and
                            styled-components, a CSS-in-JS library. I also used Figma to
                            design the layout and components.
                        </AboutParagraph>
                        <ButtonContainer>
                            <ButtonBase
                                as={Link}
                                href="/contact"
                                variant="primary"
                                fontSize="16px"
                            >
                                Contact
                            </ButtonBase>
                            <ButtonBase
                                as={Link}
                                href={"JeromeNixon-Resume.pdf"}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                variant="secondary"
                                fontSize="16px"
                            >
                                Resume
                            </ButtonBase>
                        </ButtonContainer>
                    </AboutSection>

                    <Box>
                        {/* <Drawing /> */}
                        <CanvasTesting/>
                    </Box>
                </MediumContainer>

                <TabletAboutSection>
                    <TabletHeaderWrapper>
                        <TabletHeaderText>
                            <AssistHeaders>
                                Greetings, I&apos;m
                            </AssistHeaders>
                            <AboutHeader className={youTubeSans.className}>
                                Jerome Nixon
                            </AboutHeader>
                            <AssistHeaders>
                                a dedicated
                            </AssistHeaders>
                            <AboutSubHeader className={youTubeSans.className}>
                                Full Stack Developer
                            </AboutSubHeader>
                            <SocialsWrapper>
                                <ButtonBase variant='mobilePrimary' width="40px" height="40px">
                                    <NewGitHub color="black" size={23}/>
                                </ButtonBase>
                                <ButtonBase variant='mobilePrimary' width="40px" height="40px">
                                    <LinkedInIcon color="rgb(0, 102, 153)"/>
                                </ButtonBase>
                            </SocialsWrapper>
                        </TabletHeaderText>
                        <Box>
                            {/* <Drawing /> */}
                            <CanvasTesting/>
                        </Box>

                    </TabletHeaderWrapper>
                    <AboutSummaryWrapper>
                        <AboutParagraph>
                            Crafting seamless,
                            user-friendly interfaces and interactive applications.
                        </AboutParagraph>
                        <AboutParagraph>
                            When not developing, I enjoy entertaining my dogs, scuba diving, retreating to the
                            mountains, and of course,
                            listening to music.
                        </AboutParagraph>
                        <AboutParagraph>
                            Let&apos;s Collaborate! I&apos;m enthusiastic about partnering with developers and designers
                            who share my vision for innovative, user-centric digital experiences.
                        </AboutParagraph>
                        <AboutParagraph>
                            Feel free to explore my portfolio, where you&apos;ll find
                            projects, contact information, and interactive components.
                        </AboutParagraph>
                    </AboutSummaryWrapper>
                    <ButtonContainer>
                        <ButtonBase
                            as={Link}
                            href="/contact"
                            variant="primary"
                            fontSize="16px"
                        >
                            Contact
                        </ButtonBase>
                        <ButtonBase
                            as={Link}
                            href={"JeromeNixon-Resume.pdf"}
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
                        <AboutHeader className={youTubeSans.className}>
                            Jerome Nixon
                        </AboutHeader>
                        <Box>
                            {/* <Drawing /> */}
                            <CanvasTesting/>
                        </Box>
                    </MobileNameWrapper>
                    <AboutSubHeader className={youTubeSans.className}>
                        Full Stack Developer
                    </AboutSubHeader>
                    <AboutSummaryWrapper>
                        <AboutParagraph>
                            Crafting seamless,
                            user-friendly interfaces and interactive applications.
                        </AboutParagraph>
                        <AboutParagraph>
                            When not developing, I enjoy entertaining my dogs, scuba diving, retreating to the
                            mountains, and of course,
                            listening to music.
                        </AboutParagraph>
                        <AboutParagraph>
                            Let&apos;s Collaborate! I&apos;m enthusiastic about partnering with developers and designers
                            who share my vision for innovative, user-centric digital experiences.
                        </AboutParagraph>
                        <AboutParagraph>
                            Feel free to explore my portfolio, where you&apos;ll find
                            projects, contact information, and interactive components.
                        </AboutParagraph>
                    </AboutSummaryWrapper>
                    <ButtonContainer>
                        <ButtonBase
                            as={Link}
                            href="/contact"
                            variant="primary"
                            fontSize="16px"
                        >
                            Contact
                        </ButtonBase>
                        <ButtonBase
                            as={Link}
                            href={"JeromeNixon-Resume.pdf"}
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
                {/* </MediumContainer> */}
            </CenterContent>
        </AboutPageWrapper>
    );
};

export default AboutPage;
