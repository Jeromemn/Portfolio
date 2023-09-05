"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import projectsData from "src/app/utils/projectsData";
import { PlayYouTube } from "@/app/icons";

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
`;

const Albums = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  flex-wrap: wrap;
`;

const AlbumCover = styled.div`
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  object-fit: cover;
`;

const AlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ProjectName = styled.h3`
  color: white;
`;

const ProjectInfo = styled.p`
  color: rgba(255, 255, 255, 0.7);
  padding-top: 5px;
`;

const HoverPlay = styled.div`
  display: flex;
  position: absolute;
  /* width: 100%; */
  width: 40px;
  height: 40px;
  /* top: auto; */
  z-index: 100;
  justify-content: center;
  align-items: center;
  /* left: 0; */
  bottom: 20px;
  /* margin: 30px; */
  right: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 50%;
    transform: translate(cubic-bezier(0.2, 0, 0.6, 1));
    transition: 200ms background 200ms cubic-bezier(0.2, 0, 0.6, 1);
    /* transition: transform 200ms cubic-bezier(0.2,0,0.6,1),background 200ms cubic-bezier(0.2,0,0.6,1); */
  }
`;

const AllAlbums = () => {
  return (
    <ProjectContainer>
      {projectsData.map((project) => (
        <Albums key={project.id}>
          <AlbumCover>
            <Link href={project.link}>
              <HoverPlay>
                <PlayYouTube width={24} height={24} color="white" />
              </HoverPlay>
              <Image
                src={project.image.url}
                alt={project.image.alt}
                width={250}
                height={200}
                // fill={true}
                style={{ objectFit: "cover", objectPosition: "center" }}
                // object-position="center"
              />
            </Link>
          </AlbumCover>
          <AlbumInfo>
            <ProjectName>{project.title}</ProjectName>
            <ProjectInfo>
              {project.team} • {project.year}
            </ProjectInfo>
          </AlbumInfo>
        </Albums>
      ))}
    </ProjectContainer>
  );
};

export default AllAlbums;

export async function getStaticProps() {
  const projects = projectsData;

  return {
    props: {
      projects,
    },
  };
}
