'use client';
import React from 'react';
import Header from './components/header';
import Intro from './components/intro';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
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
