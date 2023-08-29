"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import CenterContent from "../components/CenterContent";
import ButtonBase from "../components/ButtonBase";
import AboutPhoto from "/public/AboutPhoto.png";
import cropped from "/public/cropped.png";
import AboutBackground from "../components/AboutBackground";
import {
  LinkedInIcon,
  GitHub,
  WhiteLinked,
  GitHubName,
  NewGitHub,
} from "../icons";
import { youTubeDark, youTubeSans } from "../styles/setFonts";
import { roboto } from "../layout";

const AboutPageWrapper = styled.div`
justify-content: center;
display: flex;
width: 100%;
height: calc(100vh - 72px);
background-color: black;
padding-top: 64px;
`;

const AboutSection = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  width: 40%;
  gap: 2rem;
  margin-top: 5rem;
  padding-bottom: 1rem;
`;

const AboutHeader = styled.h2`
font-size: 3rem;
color: white;
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

const ImageWrapper = styled.div`
display: flex;
width: 40%;
overflow: hidden;
justify-content: center;
align-items: center;
position: relative;
/* object-position: right top; */
/* object-fit: contain; */


img {
  /* border-radius: 50%; */
  /* border: 1px solid white; */
  /* background-color: white; */
  object-fit: contain;
  position: relative;
  overflow: hidden;
   
  
  /* object-position: right bottom; */

}
`;

const imageStyle = {
  // borderRadius: '50%',
  // border: '1px solid white',
  // backgroundColor: 'white',
  // objectFit: 'contain',
  opacity: '0.6',
  // objectPosition: '50% 50%',

  // objectfit: 'contain',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.781), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  borderRadius: '5px',
}

const AboutPage = () => {
  return (
    <AboutPageWrapper >
      <CenterContent>
        <AboutSection>
        <AboutHeader className={youTubeSans.className} >Jerome Nixon </AboutHeader>
        <AboutSubHeader className={youTubeSans.className} > Full Stack Developer</AboutSubHeader>
        <AboutParagraph>
          This is a website that I made to showcase my skills as a web developer.
          I made it using Next.js, a React framework, and styled-components, a CSS-in-JS library.
          I also used Figma to design the layout and components.
        </AboutParagraph>
        <ButtonContainer>
        <ButtonBase variant='primary' fontSize='16px'>Contact
        </ButtonBase>
        <ButtonBase variant='secondary' fontSize='16px'>Resume
        </ButtonBase>
        </ButtonContainer>
        </AboutSection>
        {/* <ImageWrapper>
        <Image
        // src='/AboutPhoto.png'
        src={cropped}
        alt='Picture of Jerome Nixon'
        quality={100}
        fill
        style={imageStyle}
      // style={{width: '40%', height: 'auto'}}
        // width={400}
        // height={400}
        />
        </ImageWrapper> */}

        <AboutBackground />
        </CenterContent>
    </AboutPageWrapper>
  )
}

export default AboutPage;