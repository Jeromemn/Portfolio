"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import Drawing from "../components/Drawing";
import CenterContent from "../components/CenterContent";
import ButtonBase from "../components/ButtonBase";
import { mq } from "../styles/mixins";
import { LinkedInIcon, WhiteLinked, GitHubName, NewGitHub } from "../icons";
import { youTubeDark, youTubeSans } from "../styles/setFonts";
import CanvasTesting from "../components/CanvasTesting";

const AboutPageWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: calc(100vh - 72px);
  background-color: black;
  padding-top: 64px;

  ${mq.mobile(`
    max-height: 100vh;
    align-items: flex-start;
    z-index: 0;
    position: relative;
  `)}
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 2rem;
  padding-bottom: 1rem;
  /* z-index: 100; */

  ${mq.mobile(`
  display: none;
    // margin-right: auto;
    // margin-left: auto;
    // height: auto;
    // width: auto;
    // position: relative;
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
`;

const AboutParagraph = styled.p`
  font-size: 16px;
  color: white;

  ${mq.mobile(`
  padding: 0 1rem 0 1rem;
  `)}
`;

const MediumContainer = styled.div`
  display: flex;
  justify-content: space-between;

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

  ${mq.mobile(`
    height: 250px;
    width: 250px;
    padding-top: 1rem;

    margin-right: auto;
    margin-left: auto;
    // position: absolute;
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

const AboutPage = () => {
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
            <CanvasTesting />
          </Box>
        </MediumContainer>

          <MobileAboutSection>
            <MobileNameWrapper>
            <AboutHeader className={youTubeSans.className}>
              Jerome Nixon
            </AboutHeader>
            <Box>
            {/* <Drawing /> */}
            <CanvasTesting />
          </Box>
            </MobileNameWrapper>
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
              </MobileAboutSection>
        {/* </MediumContainer> */}
      </CenterContent>
    </AboutPageWrapper>
  );
};

export default AboutPage;
