'use client';
import React from 'react';
import Header from './components/header';
import Intro from './components/intro';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //height: 100vh;
  /* was height 100%*/
  height: 100%;
  //height: calc(100vh - 130px);
  justify-content: flex-end;
  //padding-top: 2rem;
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
