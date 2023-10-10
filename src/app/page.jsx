'use client';
import React from 'react';
import Header from './components/header';
import Intro from './components/intro';
import styled from 'styled-components';
import mainImage from '../../public/mainImage.jpg';
import CenterContent from './components/CenterContent';
import { mq } from './styles/mixins';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
`;

const ArtistInfo = styled.div`
  display: flex;
  justify-content: center;
  height: 40%;
  width: 100%;

  ${mq.mobile(`
    height: 45%;
  `)}
`;

const IntroWrapper = styled.div`
  display: flex;
  width: 100%;

  ${mq.mobile(`
    width: 100%;
    justify-content: center;
    align-items: center;
  `)}
`;

const Home = () => {
  return (
    <ContentWrapper>
      <Intro />
      <Header />
    </ContentWrapper>
  );
};

export default Home;
