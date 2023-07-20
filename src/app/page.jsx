"use client";
import React from "react";
import ArtistCover from "./components/artistCover";
import Header from "./components/header";
import Intro from "./components/intro";
import styled from "styled-components";
import mainImage from "./images/mainImage.jpg";
import Footer from "./components/Footer";

export const metadata = {
  title: "Home",
  description: "Home page",
  keywords: "home, page",
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  /* justify-content: center; */
  /* align-items: center; */
`;

const ArtistInfo = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  background-color: black;
  /* border: 1px solid black; */
  /* position: relative; */
  /* box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); */

  height: 30%;
  width: 100%;
`;

const ArtistCoverWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
  width: 100%;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0.8, 0.8, 0.8) 95%,
      rgba(0, 1, 1, 1) 100%
    ),
    url(${(props) => props.image.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const BottomSection = styled.div`
  display: flex;
  bottom: 0;
  /* position: fixed; */
`;

const IntroWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Home = () => {
  return (
      <ContentWrapper>
        <ArtistCoverWrapper image={mainImage}>
          {/* <ArtistCover /> */}
          <IntroWrapper>
            <Intro></Intro>
          </IntroWrapper>
        </ArtistCoverWrapper>
        {/* <BottomSection>  */}
        <ArtistInfo>
          <Header />
        </ArtistInfo>
        {/* </BottomSection> */}
        {/* <h1 color="black"> Home </h1> */}
        {/* <Footer /> */}
      </ContentWrapper>
  );
}

export default Home;