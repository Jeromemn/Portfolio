'use client';
import React from 'react';
import Header from './components/header';
import Intro from './components/intro';
import styled from 'styled-components';
import { mq } from '@/app/styles/mixins';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //height: 100%;
  justify-content: flex-end;
  height: calc(100vh - 140px);
  position: relative;
  top: 58px;

  ${mq.largeMobile(`
    top: 0;
  `)}

  ${mq.mobile(`
  height: calc(100vh - 140px);
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
