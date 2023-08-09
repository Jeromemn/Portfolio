"use client";
import React from "react";
import AllAlbums from "../components/albums/allAlbums";
import styled from "styled-components";

const ProjectsPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: calc(100vh - 72px);
  padding-top: 64px;
  background-color: black;
  overflow: hidden;
  /* height: 20rem;. */
  /* width: 20rem; */
`;

const ArtistHeaderWapper = styled.div`
  display: flex;
  padding: 0 0 1.5rem 0;
  /* justify-content: space-between; */
  flex-direction: column;
  gap: 1.5rem;
  /* align-items: center; */
`;

const ArtistHeader = styled.h1`
  font-family: Roboto, Noto Naskh Arabic UI, Arial, sans-serif;
  font-size: 3rem;
  color: white;
`;

const ProjectsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 90%;
  height: calc(100vh - 72px);

`;

const ProjectsTitle = styled.h2`
  color: white;
  font-family: Roboto, Noto Naskh Arabic UI, Arial, sans-serif;
`;

const ProjectsPage = () => {
  return (
    <ProjectsPageWrapper>
      <ProjectsContentWrapper>
        <ArtistHeaderWapper>
          <ArtistHeader>Jerome</ArtistHeader>
          <ProjectsTitle>Projects</ProjectsTitle>
        </ArtistHeaderWapper>
        <AllAlbums />
      </ProjectsContentWrapper>
    </ProjectsPageWrapper>
  );
};

export default ProjectsPage;
