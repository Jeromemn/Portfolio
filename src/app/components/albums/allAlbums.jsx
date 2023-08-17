"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import projectsData from "src/app/utils/projectsData";
// import tuffSkin from 'src/app/images/projectImages/tuffSkin.png';

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
  /* padding: 2rem 0rem; */
`;

const Albums = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  flex-wrap: wrap;
  /* width: 200px; */
  
`;

const AlbumCover = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  /* width: 200px; */
  /* height: 200px; */
  border: 1px solid grey;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  object-fit: cover;
  /* width: 20px;
  height: 20px; */
`;

const AlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
 
`;

// const ProjectsTitle = styled.h2`
//   color: white;
//   font-family: Roboto, Noto Naskh Arabic UI, Arial, sans-serif;
// `;

const ProjectName = styled.h3`
  color: white;
`;

const ProjectInfo = styled.p`
  color: rgba(255, 255, 255, 0.7);
  padding-top: 5px;
`;

// const projectsList = [
//   {
//     id: 1,
//     name: "Tuff Skin Website",
//     description: "Tuff Skin Website",
//     image: "/tuffSkint.png",
//     Website: "https://tuff-skin-website-wkt284e86-webfluent.vercel.app/",
//     link: "/projects/tuffSkin",
//   },
//   {
//     id: 2,
//     name: "Modern Pilgrims",
//     description: "This is project 1",
//     image: "/mp2.png",
//     link: "https://www.google.com",
//   },
//   {
//     id: 3,
//     name: "Project 3",
//     description: "This is project 1",
//     // image: "https://picsum.photos/200/300",
//     link: "https://www.google.com",
//   },
//   {
//     id: 4,
//     name: "Project 1",
//     description: "This is project 1",
//     // image: "https://picsum.photos/200/300",
//     link: "https://www.google.com",
//   },
//   {
//     id: 5,
//     name: "Project 1",
//     description: "This is project 1",
//     // image: "https://picsum.photos/200/300",
//     link: "https://www.google.com",
//   },
//   {
//     id: 6,
//     name: "Project 1",
//     description: "This is project 1",
//     // image: "https://picsum.photos/200/300",
//     link: "https://www.google.com",
//   },
// ];

const AllAlbums = () => {
  // const projectImage 
  // console.log(projectsData);
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
                style={{objectFit: 'scale-down', objectPosition: 'center'}}
                // object-position="center"
              />
              </Link>
            </AlbumCover>
            <AlbumInfo>
              <ProjectName>{project.title}</ProjectName>
              <ProjectInfo>{project.team} • {project.year}</ProjectInfo>
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
