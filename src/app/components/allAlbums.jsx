'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { mq } from '@/app/styles/mixins';
import projectsData from '@/app/utils/projectsData';
import { PlayYouTube } from '@/app/icons';

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  ${mq.largeMobile(`
    
  `)}

  ${mq.mobile(`
    gap: 1rem;
  `)}
  
    ${mq.smallMobile(`
    gap: 2rem;
    `)}
`;

const Albums = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;

  ${mq.mobile(`
    padding-bottom:1rem;
  `)}

  ${mq.smallMobile(`
    padding-bottom: 0;
  `)}
`;

const AlbumCover = styled.div`
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 200px;

  //check if can be deleted
  // ${mq.largeMobile(`
  //   width: 200px;
  //   height: 200px;
  // `)}
  //
  // /* for two columns */
  // ${mq.mobile(`
  //   width: 183px;
  //   height: 150px;
  // `)}
  //
  // ${mq.smallMobile(`
  //   width: 300px;
  //   height: 200px;
  // `)}
`;

const AlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ProjectName = styled.h3`
  color: white;

  /* for two column */
  ${mq.mobile(`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
  `)}
`;

const ProjectInfo = styled.p`
  color: rgba(255, 255, 255, 0.7);
  padding-top: 5px;

  /* for two column */
  ${mq.mobile(`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
  `)}
`;

const HoverPlay = styled.div`
  display: flex;
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 100;
  justify-content: center;
  align-items: center;
  bottom: 20px;
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

  ${mq.mobile(`
    display: none;
  `)}

  ${mq.largeMobile(`
    display: none;
  `)}
`;

const AlbumImage = styled(Image)`
  ${mq.largeMobile(`
      width: 200px;
      height: 200px;
    `)}

  ${mq.mobile(`
    width: 183px;
    height: 150px;
    object-fit: cover;
    object-position: top;
  `)}

  ${mq.smallMobile(`
    width: 300px;
    height: 200px;
  `)}
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
              <AlbumImage
                src={project.image.url}
                alt={project.image.alt}
                // width={250}
                // height={200}
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'center' }}
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
