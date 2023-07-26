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
  padding: 1rem 0;
  justify-content: flex-start;
`;

const ArtistHeader = styled.h1`
  font-family: Roboto, Noto Naskh Arabic UI, Arial, sans-serif;
  font-size: 3rem;
  color: white;
`;

const ProjectsPage = () => {
  return (
    <ProjectsPageWrapper>
      <div>
        <ArtistHeaderWapper>
          <ArtistHeader>Jerome</ArtistHeader>
        </ArtistHeaderWapper>
        <AllAlbums />
      </div>
    </ProjectsPageWrapper>
  );
};

export default ProjectsPage;
