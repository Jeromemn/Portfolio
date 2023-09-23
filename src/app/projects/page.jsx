"use client";
import React from "react";
import AllAlbums from "../components/albums/allAlbums";
import styled from "styled-components";
import CenterContent from "../components/CenterContent";
import { mq } from "../styles/mixins";
import { youTubeDark, youTubeSans } from "../styles/setFonts";

const ProjectsPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 72px);
  padding-top: 64px;
  background-color: black;
  overflow: hidden;
  scrollbar-width: none;
  scroll-margin: 0;
  scrollbar-width: none;

  ${mq.largeMobile(`
    padding-bottom: 5rem;
    overflow: auto;
  scrollbar-width: none;


  `)}

  ${mq.mobile(`
    overflow: auto;
 
  `)};

  ${mq.smallMobile(`
    padding-bottom: 5rem;
    overflow: auto;

  `)}

`;

const ArtistHeaderWapper = styled.div`
  display: flex;
  padding: 6px 0 1.5rem 0;
  flex-direction: column;
  gap: 1.5rem;
`;

const ArtistHeader = styled.h1`
  font-size: 3rem;
  color: white;

  ${mq.mobile(`
    font-size: 2rem;
    line-height: 1.2;
    padding-left: 1rem;
  `)}
`;

const ProjectsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 72px);


`;

const ProjectsTitle = styled.h2`
  color: white;

  ${mq.mobile(`
    line-height: 1.2;
  `)}
`;

const ProjectsPage = () => {
  return (
    <ProjectsPageWrapper>
      <CenterContent>
        <ProjectsContentWrapper>
          <ArtistHeaderWapper>
            <ArtistHeader className={youTubeSans.className}>
              Jerome
            </ArtistHeader>
            <ProjectsTitle className={youTubeSans.className}>
              Projects
            </ProjectsTitle>
          </ArtistHeaderWapper>
          <AllAlbums />
        </ProjectsContentWrapper>
      </CenterContent>
    </ProjectsPageWrapper>
  );
};

export default ProjectsPage;
