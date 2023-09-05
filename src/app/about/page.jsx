"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import Drawing from "../components/Drawing";
import CenterContent from "../components/CenterContent";
import ButtonBase from "../components/ButtonBase";
import {
  LinkedInIcon,
  WhiteLinked,
  GitHubName,
  NewGitHub,
} from "../icons";
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
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 2rem;
  padding-bottom: 1rem;
  z-index: 100;
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
`;

const MediumContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
      </CenterContent>
    </AboutPageWrapper>
  );
};

export default AboutPage;
