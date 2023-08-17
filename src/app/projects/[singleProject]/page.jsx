"use client";
import React, { useContext, useEffect, useMemo, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useOnClickOutside from "../../hooks/useOnOutsideClick";
import projectsData from "@/app/utils/projectsData";
import styled from "styled-components";
// import PlayButton from "@/app/components/PlayButton";
import ButtonBase from "@/app/components/ButtonBase";
import { PlayYouTube, GitHub, OptionsDots } from "@/app/icons";
// import getCommits from "@/app/utils/getCommits";
// import { commitCount } from "@/app/utils/getCommits";
import Thumbs from "@/app/components/Thumbs";
import CenterContent from "../../components/CenterContent";
import { youTubeDark, youTubeSans } from "../../styles/setFonts";

const SingleProjectPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  /* height: calc(100vh - 50px); */
  height: auto;
  width: 100%;
  /* overflow-y: scroll; */
  /* padding-top: 2rem; */
  padding-bottom: 8rem;
  /* margin-bottom: 8rem; */
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: flex-start;
  width: 75%;
  padding: 8rem 0rem 3rem 0rem;
  gap: 3rem;
`;

const ProjectImage = styled.div`
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

const ProjectDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: fit-content;
  justify-content: space-between;
  height: 240px;
`;

const ProjectTitle = styled.h2`
  font-size: 45px;
  line-height: 1.2;
  font-weight: 700;
  color: rgb(255, 255, 255);
  width: fit-content;
  /* letter-spacing: normal; */
`;

const Text = styled.p`
  color: ${(props) => props.color || "white"};
  width: fit-content;
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: ${(props) => props.lineHeight || null};
`;

const CommitsAndTech = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  align-items: flex-start;
  gap: 0.5rem;
  width: fit-content;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: fit-content;
`;

const DescriptionWrapper = styled.div`
  /* display: flex; */
  width: 60%;
  max-height: calc(2 * 14px * 1.4);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /* -webkit-line-clamp: 2; */
  /* height: max-content; */

  ${({ $showMore }) =>
    $showMore &&
    `
      max-height: none;
      overflow: visible;
      height: auto;
      padding-bottom: 2rem;
    `}
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 75%;
  /* padding-bottom: 10px; */
  /* margin-bottom: 50px; */
`;

const MoreButton = styled.button`
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
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  font-size: 14px;
  align-self: start;

  ${({ $showMore }) =>
    $showMore &&
    `
    display: none
    `}
`;

const LessButton = styled(MoreButton)`
display: none;

${({ $showMore }) =>
    $showMore &&
    `
    display: flex
    `}
`;

const MoreDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
const TechWrapper = styled.div`
  display: flex;
  width: 100%;
  /* padding: 0 .5rem; */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  height: 40px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
`;
const TechItem = styled.p`
  color: rgba(255, 255, 255, 0.7);
  width: ${(props) => props.width || "fit-content"};
  margin-right: ${(props) => props.margin || "0"};
  padding-left: 0.5rem;
`;

const TechStart = styled.div`
  display: flex;
`;

const SingleProjectPage = ({ params, play, lineheight }) => {
  const [showMore, setShowMore] = useState(false);
  const moreRef = useRef();
  useOnClickOutside(moreRef, () => setShowMore(false));

  const project = projectsData.find(
    (project) => project.name === params.singleProject
  );

  const handleClick = () => {
    setShowMore(true);
    console.log("clicked");
  };

  const handleClose = () => {
    setShowMore(false);
  };
  console.log(project.website)

  return (
    <SingleProjectPageWrapper>

      <ProjectContent>
        <ProjectImage>
          <Image
            src={project?.image?.url}
            alt={project?.image?.alt}
            width={300}
            height={240}
            priority={true}
            // placeholder="blur"
          />
        </ProjectImage>
        <ProjectDescriptionWrapper>
          <ProjectTitle>{project?.title}</ProjectTitle>
          {/* <div> {params.singleProject}</div> */}
          <ProjectInfo>
            <Text color="#aaa">
              {project?.team} • {project?.year}
            </Text>
            <CommitsAndTech>
              <Text color="#aaa"> {project?.techUsed.length} Techs </Text>
              <Text color="#aaa"> • </Text>
              <Text color="#aaa"> {project?.commits} Commits</Text>
            </CommitsAndTech>
          </ProjectInfo>
          <MoreDescription>
            <DescriptionWrapper $showMore={showMore} ref={moreRef}>
              <Text color="#aaa" fontSize="14px" $lineHeight="1.4rem">
                {project?.description}
              </Text>
            </DescriptionWrapper>
            <MoreButton onClick={handleClick} $showMore={showMore}>
              More
            </MoreButton>
            <LessButton onClick={handleClose} $showMore={showMore}>
              Less
            </LessButton>
          </MoreDescription>
          <ButtonContainer>
            <ButtonBase variant="primary" as={Link} href={`${project?.website}`} passHref={true}>
              <PlayYouTube color="black" width={24} height={24} />
              Live Site
            </ButtonBase>
            <ButtonBase variant="secondary" as={Link} href={`${project?.github}`} passHref={true}>
              <GitHub color="white" width={20} height={20} />
              Go to Repo
            </ButtonBase>
            <ButtonBase variant="icon">
              <OptionsDots color="white" size={24} />
            </ButtonBase>
            {/* <ButtonBase text="Github" width={100}></ButtonBase> */}
          </ButtonContainer>
        </ProjectDescriptionWrapper>
      </ProjectContent>
      <TechStack>
        {project?.techUsed.map((tech, index) => (
          <TechWrapper key={tech}>
            <TechStart>
              <TechItem margin="16px">{index + 1}</TechItem>
              <TechItem width="135px">{tech}</TechItem>
            </TechStart>
            <Thumbs />
            {/* <Divider></Divider> */}
          </TechWrapper>
        ))}
      </TechStack>
      {/* </StyledCenter> */}
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
