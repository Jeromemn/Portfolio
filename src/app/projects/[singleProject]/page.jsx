"use client";
import React from "react";
import Image from "next/image";
import projectsData from "@/app/utils/projectsData";
import Styled from "styled-components";

const SingleProjectPageWrapper = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  height: calc(100vh - 72px);
  width: 100%;

`;

const ProjectContent = Styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: flex-start;
  width: 70%;
  padding: 5rem 0rem;
  gap: 3rem;
  `;

const ProjectImage = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 240px;
  border: 1px solid grey;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  object-fit: cover;
  `;

const ProjectDescriptionWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  `;

const ProjectTitle = Styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: rgb(255, 255, 255);
  `;

const Text = Styled.p`
  color: ${(props) => props.color || "white"};
  `;

const SingleProjectPage = ({ params }) => {
  const project = projectsData.find(
    (project) => project.name === params.singleProject
  );
  console.log(project);

  // const { slug } = params;
  // console.log(params);
  return (
    <SingleProjectPageWrapper>
      <ProjectContent>
        <ProjectImage>
          <Image
            src={project.image.url}
            alt={project.image.alt}
            width={300}
            height={240}
          />
        </ProjectImage>
        <ProjectDescriptionWrapper>
          <ProjectTitle>{project.title}</ProjectTitle>
          {/* <div> {params.singleProject}</div> */}
          <div>
            <Text color='#aaa'>
              {project.team} • {project.year}
            </Text>
            <Text color='#aaa'>{project.techUsed.length} Techs </Text>
            <Text> {project.commits}</Text>
          </div>
          <div>
            <Text color='#aaa'>{project.description}</Text>
          </div>
        </ProjectDescriptionWrapper>
      </ProjectContent>
    </SingleProjectPageWrapper>
  );
};

export default SingleProjectPage;

// "use client";
// import React from "react";

// const TuffSkin = () => {
//   return (
//     <div>
//       <div>
//         <h2>TuffSkin</h2>
//         <p> Project </p>
//         <p> Webfluent</p>
//         <p> 2021</p>
//         <p> 3 languages</p>
//         <p> 6 Packages </p>
//       </div>
//       <div>
//         <p> text 1</p>
//         <p> text 1</p>
//         <p> text 1</p>
//         <p> text 1</p>
//         <p> text 1</p>
//         <p> text 1</p>
//         <p> text 1</p>
//       </div>
//     </div>
//   );
// };

// export default TuffSkin;
