"use client";
import React, { useContext, useMemo } from "react";
import Image from "next/image";
import projectsData from "@/app/utils/projectsData";
import Styled from "styled-components";
// import PlayButton from "@/app/components/PlayButton";
// import ButtonBase from "@/app/components/ButtonBase";
import { PlayYouTube, GitHub } from "@/app/icons";
// import getCommits from "@/app/utils/getCommits";
// import { commitCount } from "@/app/utils/getCommits";
import Thumbs from "@/app/components/Thumbs";

const SingleProjectPageWrapper = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  height: calc(100vh - 72px);
  width: 100%;
  overflow-y: scroll;
  padding-top: 2rem;

`;

const ProjectContent = Styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: flex-start;
  width: 70%;
  padding: 12rem 0rem 3rem 0rem;
  gap: 3rem;
  `;

const ProjectImage = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 300px; */
  /* height: 240px; */
  border: 1px solid grey;
  border-radius: 4px;
  overflow: hidden;
  /* position: relative; */
  /* object-fit: cover; */
  `;

const ProjectDescriptionWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width: fit-content;
  justify-content: space-between;
  height: 240px;
  `;

const ProjectTitle = Styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: rgb(255, 255, 255);
  width: fit-content;
  `;

const Text = Styled.p`
  color: ${(props) => props.color || "white"};
  width: fit-content;
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: ${(props) => props.lineHeight || null};
`;

const CommitsAndTech = Styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  align-items: flex-start;
  gap: .5rem;
  width: fit-content;
`;

const ButtonContainer = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: fit-content;
`;

const DescriptionWrapper = Styled.div`
  /* display: flex; */
  width: 60%;
  max-height: calc(2 * 14px * 1.4);
  overflow: hidden;
  display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  /* -webkit-line-clamp: 2; */
  
  `;

const ProjectInfo = Styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  `;

const TechStack = Styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width: 70%;
`;

const MoreButton = Styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: white; */
  background-color: transparent;
  border: none;

  padding: 0;
  width: fit-content;
  cursor: pointer;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  font-weight: 600;
  font-size: 14px;
  align-self: start;

`;

const MoreDescription = Styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`;
const TechWrapper = Styled.div`
  display: flex;
  width: 100%;
  padding: 0 .5rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  overflow: hidden;
  height: 40px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
`;
const TechItem = Styled.p`
  color: rgba(255,255,255,0.7);
  width: ${(props) => props.width || "fit-content"};
  margin-right: ${(props) => props.margin || "0"};
`;

// const Divider = Styled.div`
// display: flex;
// background-color:  rgba(247, 13, 13, 0.7);
//   width: 100%;
//   height: 1px;
//   position: relative;
// `;

const SingleProjectPage = ({ params, play, lineheight }) => {
  const project = projectsData.find(
    (project) => project.name === params.singleProject
  );
  // console.log(project);

  // console.log(commitCount.pop());

  // getCommits("jeromemn", project.repo).then((data) => {
  //   console.log(data);
  //   return data;
  //   // value = data;
  // });

  // getCommits("jeromemn", project.repo)
  // .then((data) => {
  //   console.log(data);
  //   value = data;
  // })
  // .then((data) => {
  // })
  // .catch((err) => {
  //   console.log(err);
  // });

  // console.log(value);

  // console.log(data);
  // getCommits();
  // console.log( await commits);

  // const commitsCount = commits;
  // console.log(commitsCount);
  //   return count;
  // };
  // commits();

  // const { slug } = params;
  // console.log(params);
  // const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    // DescriptionWrapper.Styled.maxHeight = "none";
    setIsOpen(isOpen);
    console.log("clicked");
  };

  return (
    <SingleProjectPageWrapper>
      <ProjectContent>
        <ProjectImage>
          <Image
            src={project.image.url}
            alt={project.image.alt}
            width={300}
            height={240}
            priority={true}
            // placeholder="blur"
          />
        </ProjectImage>
        <ProjectDescriptionWrapper>
          <ProjectTitle>{project.title}</ProjectTitle>
          {/* <div> {params.singleProject}</div> */}
          <ProjectInfo>
            <Text color="#aaa">
              {project.team} • {project.year}
            </Text>
            <CommitsAndTech>
              <Text color="#aaa"> {project.techUsed.length} Techs </Text>
              <Text color="#aaa"> • </Text>
              <Text color="#aaa"> {project.commits} Commits</Text>
            </CommitsAndTech>
          </ProjectInfo>
          <MoreDescription>
            <DescriptionWrapper overflow="visible">
              <Text color="#aaa" fontSize="14px" $lineHeight="1.4rem">
                {project.description}
              </Text>
            </DescriptionWrapper>
            <MoreButton onClick={handleClick}>More</MoreButton>
          </MoreDescription>
          <ButtonContainer>
            {/* <ButtonBase text="Play" width={200}> */}
            {/* <PlayYouTube color="white" width={20} height={20}/> */}
            {/* </ButtonBase> */}
            {/* <ButtonBase text="Github" width={100} /> */}
          </ButtonContainer>
        </ProjectDescriptionWrapper>
      </ProjectContent>
      <TechStack>
        {project.techUsed.map((tech, index) => (
          <TechWrapper key={tech}>
            <TechItem margin="16px">{index + 1}</TechItem>

            <TechItem width="135px">{tech}</TechItem>
            <Thumbs />
            {/* <Divider></Divider> */}
          </TechWrapper>
        ))}
      </TechStack>
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
