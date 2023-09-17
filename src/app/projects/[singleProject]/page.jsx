"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useOnClickOutside from "../../hooks/useOnOutsideClick";
import projectsData from "@/app/utils/projectsData";
import styled from "styled-components";
import { mq } from "@/app/styles/mixins";
import ButtonBase from "@/app/components/ButtonBase";
import { PlayYouTube, NewGitHub } from "@/app/icons";
import Thumbs from "@/app/components/Thumbs";
import CenterContent from "@/app/components/CenterContent";
import { youTubeDark, youTubeSans } from "../../styles/setFonts";
import OptionsDropDown from "@/app/components/OptionsDropDown";
import { DropDownItem, GoToDev } from "@/app/components/DropDownItem";

const SingleProjectPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  height: auto;
  width: 100%;
  padding-bottom: 8rem;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 8rem 0rem 3rem 0rem;
  gap: 3rem;

  ${mq.largeMobile(`
  display: none;
  `)}

  ${mq.mobile(`
  display: none;
  `)}
`;

const ProjectImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  border-radius: 4px;
  overflow: hidden;
  height: 264px;
  min-width: 264px;

  ${mq.largeMobile(`
    height: 200px;
    min-width: 200px;
    object-fit: cover;
    object-position: center;
  `)}

  ${mq.mobile(`
    height: 160px;
    min-width: 160px;
  `)}
`;

const ProjectDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */
  width: fit-content;
  /* justify-content: space-between; */
  justify-content: flex-start;
  gap: 1rem;

  min-height: 264px;
  max-height: 264px;

  align-items: flex-start;
  position: relative;

  ${mq.largeMobile(`
    min-height: 200px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    max-height: 200px;
  `)}

  ${mq.mobile(`
    min-height: 160px;
    align-items: center;
    min-height: 160p;
  `)}
`;

const ProjectTitle = styled.h2`
  font-size: 45px;
  line-height: 1.2;
  font-weight: 700;
  color: rgb(255, 255, 255);
  width: fit-content;

  ${mq.largeMobile(`
    font-size: 32px;
    margin-top: 1rem;
  `)}

  ${mq.mobile(`
    font-size: 24px;
    margin-top: 0;
  `)}
`;

const Text = styled.p`
  color: ${(props) => props.color || "white"};
  width: fit-content;
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: ${(props) => props.lineHeight || null};

  ${({ $showMore }) =>
    $showMore &&
    `
    z-index: 150;
    display: flex
    `}
`;

const CommitsAndTech = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;
  width: fit-content;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: fit-content;
  position: absolute;
  bottom: 0;
  /* z-index: 1; */
  /* position: relative; */

  ${mq.largeMobile(`
    padding-left: .8rem;
    position: relative;
  `)}

  ${mq.mobile(`
    padding-left: .8rem;

  `)}
`;

const DescriptionWrapper = styled.div`
  width: 60%;
  max-height: calc(2 * 14px * 1.4);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  position: relative;

  ${({ $showMore }) =>
    $showMore &&
    `
      max-height: none;
      overflow: visible;
      height: auto;
      z-index: 350;
      position: relative;
      
   `}

  ${mq.largeMobile(`
    width: 100%;

    `)}

    ${mq.mobile(`
    width: 100%;
   `)}
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${mq.mobile(`
    display: none;
  `)}
`;

const TechStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  ${mq.largeMobile(`
    width: 100%;
    padding: 2rem 2rem 0 2rem;
  `)}

  ${mq.mobile(`
    width: 90%;
    padding-top: 2rem;
  `)}
`;

const MoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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
  z-index: 250;
  position: relative;
  padding-top: 0.5rem;

  ${({ $showMore }) =>
    $showMore &&
    `
    display: none
    `}
`;

const LessButton = styled(MoreButton)`
  display: none;
  position: relative;

  ${({ $showMore }) =>
    $showMore &&
    `
    z-index: 250;
    display: flex
    `}
`;

const MoreDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  background-color: black;
  z-index: 250;

  ${mq.largeMobile(`
    max-width: 90%;
  `)}
`;

const DropDownDescription = styled.div`
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: fit-content;
  /* position: fixed; */
  background-color: #000000;
  border-radius: 10px;
  z-index: 350;
  /* position: relative; */

  ${mq.largeMobile(`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: fit-content;
  position: relative;
  background-color: #000000;
  border-radius: 10px;
  z-index: 250;
  `)}

  ${({ $showMore }) =>
    $showMore &&
    `
    overflow: visible;
    padding: 1rem 1rem 1rem 1rem;
    margin-left: -1rem;
    z-index: 350;
    border: 1px solid rgba(255, 255, 255, 0.1);
    `}
`;

const DropDownText = styled(Text)`
  ${({ $showMore }) =>
    $showMore &&
    `
    z-index: 150;
    padding-top: 1rem;
    margin-top: 3rem;
    display: flex
    `}
`;

const TechWrapper = styled.div`
  display: flex;
  width: 100%;
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
  margin-right: ${(props) => props.marginRight || "0"};
  padding-left: 0.5rem;
`;

const TechStart = styled.div`
  display: flex;
`;

const MobileProjectContent = styled.div`
  display: none;

  ${mq.largeMobile(`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-left: 2rem;

`)}

  ${mq.mobile(`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  `)}
`;

const ImageAndDescription = styled.div`
  display: none;

  ${mq.largeMobile(`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6rem 0 1rem .8rem;
  gap: 3rem;
`)}

  ${mq.mobile(`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 1rem .8rem;
  gap: .5rem;
`)}
`;

const StyledImage = styled(Image)`
  height: 264px;
  width: 264px;

  ${mq.largeMobile(`
    height: 200px;
    width: 200px;
    object-fit: fill;
    object-position: center;
  
  `)}

  ${mq.mobile(`
    height: 160px;
    object-fit: cover;
    object-position: center; 
  `)}
`;

const SingleProjectPage = ({ params, ...props }) => {
  const [showMore, setShowMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const moreRef = useRef();
  const mobileMoreRef = useRef();
  useOnClickOutside(moreRef, () => setShowMore(false));
  useOnClickOutside(mobileMoreRef, () => setShowMore(false));

  const project = projectsData.find(
    (project) => project.name === params.singleProject
  );

  const handleClick = () => {
    setShowMore(true);
  };
  console.log(showMore);

  const handleClose = () => {
    setShowMore(false);
  };

  const openDropDown = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <SingleProjectPageWrapper>
      <CenterContent>
        <ProjectContent>
          <ProjectImage>
            <StyledImage
              src={project?.image?.url}
              alt={project?.image?.alt}
              width={300}
              height={240}
              priority={true}
              // style={{ objectFit: "cover", objectPosition: "center" }}
              // placeholder="blur"
            />
          </ProjectImage>
          <ProjectDescriptionWrapper>
            <ProjectTitle className={youTubeSans.className}>
              {project?.title}
            </ProjectTitle>
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
            {/* <MoreDescription> */}
            <DropDownDescription $showMore={showMore}>
              <DescriptionWrapper $showMore={showMore}>
                <Text
                  $showMore={showMore}
                  color="#aaa"
                  fontSize="14px"
                  $lineHeight="1.4rem"
                >
                  {project?.description}
                </Text>
              </DescriptionWrapper>
              <MoreButton onClick={handleClick} $showMore={showMore}>
                More
              </MoreButton>
              <LessButton onClick={handleClose} $showMore={showMore}>
                Less
              </LessButton>
            </DropDownDescription>
            {/* </MoreDescription> */}
            <ButtonContainer>
              <ButtonBase
                variant="primary"
                as={Link}
                href={`${project?.website}`}
                passHref={true}
              >
                <PlayYouTube color="black" width={24} height={24} />
                Live Site
              </ButtonBase>
              <ButtonBase
                variant="secondary"
                as={Link}
                href={`${project?.github}`}
                passHref={true}
              >
                <NewGitHub color="white" size={20} />
                Go to Repo
              </ButtonBase>
              <OptionsDropDown>
                <DropDownItem />
                <GoToDev />
              </OptionsDropDown>
            </ButtonContainer>
          </ProjectDescriptionWrapper>
        </ProjectContent>
      </CenterContent>

      <CenterContent>
        <MobileProjectContent>
          <ImageAndDescription>
            <ProjectImage>
              <StyledImage
                src={project?.image?.url}
                alt={project?.image?.alt}
                width={300}
                height={240}
                // priority={true}
                // placeholder="blur"
              />
            </ProjectImage>
            <ProjectDescriptionWrapper>
              <ProjectTitle className={youTubeSans.className}>
                {project?.title}
              </ProjectTitle>
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
              {/* <MoreDescription> */}
              <DropDownDescription $showMore={showMore}>
                <DescriptionWrapper $showMore={showMore}>
                  <Text
                    $showMore={showMore}
                    color="#aaa"
                    fontSize="14px"
                    $lineHeight="1.4rem"
                  >
                    {project?.description}
                  </Text>
                </DescriptionWrapper>
                <MoreButton onClick={handleClick} $showMore={showMore}>
                  More
                </MoreButton>
                <LessButton onClick={handleClose} $showMore={showMore}>
                  Less
                </LessButton>
              </DropDownDescription>
              {/* </MoreDescription> */}
            </ProjectDescriptionWrapper>
          </ImageAndDescription>
          <ButtonContainer>
            <ButtonBase
              variant="primary"
              as={Link}
              href={`${project?.website}`}
              passHref={true}
            >
              <PlayYouTube color="black" width={24} height={24} />
              Live Site
            </ButtonBase>
            <ButtonBase
              variant="secondary"
              as={Link}
              href={`${project?.github}`}
              passHref={true}
            >
              <NewGitHub color="white" size={20} />
              Go to Repo
            </ButtonBase>
            <OptionsDropDown>
              <DropDownItem />
              <GoToDev />
            </OptionsDropDown>
          </ButtonContainer>
        </MobileProjectContent>
      </CenterContent>
      <CenterContent>
        <TechStack>
          {project?.techUsed.map((tech, index) => (
            <TechWrapper key={tech}>
              <TechStart>
                <TechItem marginRight="16px">{index + 1}</TechItem>
                <TechItem width="150px">{tech}</TechItem>
              </TechStart>
              <TechItem>{project.title}</TechItem>
              <Thumbs id={`${project.name}-${tech}`} width="fit-content" />
            </TechWrapper>
          ))}
        </TechStack>
      </CenterContent>
    </SingleProjectPageWrapper>
  );
};

export default SingleProjectPage;
