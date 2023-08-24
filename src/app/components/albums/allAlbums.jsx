"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import projectsData from "src/app/utils/projectsData";

const ProjectsPageWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%; */
`;

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

const AllAlbums = () => {
  return (
    <ProjectContainer>
      {projectsData.map((project) => (
        <Albums key={project.id}>
          <AlbumCover>
            <Link href={project.link}>
              <Image
                src={project.image.url}
                alt={project.image.alt}
                width={300}
                height={150}
                // fill={true}
                style={{ objectFit: "scale-down", objectPosition: "center" }}
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
