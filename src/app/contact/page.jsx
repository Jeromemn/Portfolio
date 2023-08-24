"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import CenterContent from "../components/CenterContent";
import ButtonBase from "../components/ButtonBase";
import {
  LinkedInIcon,
  GitHub,
  WhiteLinked,
  GitHubName,
  NewGitHub,
} from "../icons";
import { youTubeDark, youTubeSans } from "../styles/setFonts";
import { roboto } from "../layout";

const ContactPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 72px);
  padding-top: 64px;
  background-color: black;
  overflow: hidden;
`;

const HeaderImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: white;
  position: relative;
  overflow: hidden;
`;

const ContactHeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

const HeaderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding-top: 2rem;
  align-items: center;
  flex-wrap: wrap;
`;

const styles = css`
  display: inline-block;
  background-color: transparent;

  /* background: rgba(255,255,255,0.15); */
  font-family: "Roboto", ${roboto};
  border: none;
  padding: 0 2rem 0 1rem;
  font-size: 16px;
  outline: none;
  height: 100%;
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    /* padding-left: 0.5rem; */
  }
`;

const InputBox = styled.div`
  display: flex;
  height: ${(props) => props.height || "2.5rem"};
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.15);
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  position: relative;
  width: 400px;
`;

const ContactInput = styled.input`
  ${styles}
`;

const StyledTextArea = styled.textarea`
  ${styles}
  resize: none;
  padding-top: 1rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: center;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  color: white;
  line-height: 1.2;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
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
`;

const FormHeader = styled.h2`
  color: white;
`;

const ContactPage = () => {
  return (
    <ContactPageWrapper>
      <CenterContent>
        <Column>
          <ContactHeaderSection>
            <HeaderImageWrapper>
              <Image
                src="/MeContact.jpg"
                alt="picture of dev"
                fill={true}
                objectFit="cover"
              />
            </HeaderImageWrapper>
            <HeaderInfoWrapper>
              <HeaderTitle className={youTubeSans.className}>
                Jerome Nixon
              </HeaderTitle>
              <ButtonWrapper>
                <ButtonBase variant="plain">
                  <WhiteLinked />
                </ButtonBase>
                <ButtonBase
                  variant="plain"
                  as={Link}
                  href="https://github.com/Jeromemn"
                  passHref={true}
                >
                  <GitHubName />
                  <NewGitHub color="white" size={25} />
                </ButtonBase>
              </ButtonWrapper>
              <StyledLink href="/about">More about Jerome</StyledLink>
            </HeaderInfoWrapper>
          </ContactHeaderSection>
          <FormWrapper>
            <FormHeader className={youTubeSans.className}>
              Get in touch
            </FormHeader>
            <InputBox>
              <ContactInput
                className={roboto.className}
                type="text"
                placeholder="Name"
              />
            </InputBox>

            <InputBox>
              <ContactInput
                className={roboto.className}
                type="text"
                placeholder="Email"
              />
            </InputBox>
            <InputBox>
              <ContactInput
                className={roboto.className}
                type="text"
                placeholder="Subject"
              />
            </InputBox>
            <InputBox height="fit-content">
              <StyledTextArea
                className={roboto.className}
                autoCorrect="on"
                type="text"
                placeholder="Message"
                rows={6}
              />
            </InputBox>
            <ButtonBase variant="primary">Send</ButtonBase>
          </FormWrapper>
        </Column>
      </CenterContent>
    </ContactPageWrapper>
  );
};

export default ContactPage;
