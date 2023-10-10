'use client';
import React from 'react';
import AllAlbums from '../components/albums/allAlbums';
import styled from 'styled-components';
import CenterContent from '../components/CenterContent';
import { mq } from '../styles/mixins';
import { youTubeDark, youTubeSans } from '../styles/setFonts';

const ArtistHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArtistHeader = styled.h1`
  font-size: 3rem;
  color: white;

  ${mq.mobile(`
    font-size: 2rem;
    line-height: 1.2;
  `)}
`;

const ProjectsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 4rem;
  gap: 2rem;
  padding-bottom: 3rem;
  
  ${mq.largeMobile(`
        padding-top: 0;
    `)}
`;

const ProjectsTitle = styled.h2`
  color: white;

  ${mq.mobile(`
    line-height: 1.2;
  `)}
`;

const ProjectsPage = () => {
  return (
    <ProjectsContentWrapper>
      <ArtistHeaderWrapper>
        <ArtistHeader className={youTubeSans.className}>Jerome</ArtistHeader>
        <ProjectsTitle className={youTubeSans.className}>Projects</ProjectsTitle>
      </ArtistHeaderWrapper>
      <AllAlbums />
    </ProjectsContentWrapper>
  );
};

export default ProjectsPage;
