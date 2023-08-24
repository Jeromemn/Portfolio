"use client";
import React from "react";
import AllAlbums from "../components/albums/allAlbums";
import styled from "styled-components";
import CenterContent from "../components/CenterContent";
import { youTubeDark, youTubeSans } from "../styles/setFonts";

const ProjectsPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 72px);
  padding-top: 64px;
  background-color: black;
  overflow: hidden;
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
`;

const ProjectsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: calc(100vh - 72px);
`;

const ProjectsTitle = styled.h2`
  color: white;
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
