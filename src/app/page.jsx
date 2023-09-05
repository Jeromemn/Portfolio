"use client";
import React from "react";
import Header from "./components/header";
import Intro from "./components/intro";
import styled from "styled-components";
import mainImage from "../../public/mainImage.jpg";
import CenterContent from "./components/CenterContent";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 72px);
  overflow: hidden;
`;

const ArtistInfo = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  height: 40%;
  width: 100%;
`;

const ArtistCoverWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 65%;
  width: 100%;
  background-image: linear-gradient(
      rgba(0, 1, 1, 0.1) 0%,
      rgba(0, 1, 1, 0.2) 50%,
      rgba(0, 1, 1, 0.5) 75%,
      rgba(0, 1, 1, 0.75) 85%,
      rgba(0, 0, 0, 0.8) 89%,
      rgba(0, 0, 0, 0.93) 92%,
      rgba(0, 0, 0, 0.95) 95%,
      rgba(0, 0, 0, 0.99) 98%,
      #000000 100%
    ),
    url(${(props) => props.$image.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* linear-gradient(360deg,
      rgba(0, 1, 1, 1) 8.98%,
      rgba(0, 0, 0, 0) 100%
    ), */
`;

const CoverBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const IntroWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Home = () => {
  return (
    <ContentWrapper>
      <ArtistCoverWrapper $image={mainImage}>
        <CoverBackground>
          <CenterContent>
            <IntroWrapper>
              <Intro></Intro>
            </IntroWrapper>
          </CenterContent>
        </CoverBackground>
      </ArtistCoverWrapper>
      <ArtistInfo>
        <CenterContent>
          <Header />
        </CenterContent>
      </ArtistInfo>
    </ContentWrapper>
  );
};

export default Home;
