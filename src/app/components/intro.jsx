"use client";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import shuffle from "../images/shuffle.svg";
import play from "../images/play.svg";
import PlayCustom from "../images/playCustom";
import LinkedIn from "../images/linkedIn";
import GitHub from "../images/gitHub";
import Verified from "../images/verified";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 40%;
  align-self: flex-end;
  justify-self: flex-start;
  /* position: relative; */
  padding-left: 4rem;
  padding-bottom: 2rem;
`;

const NameIntro = styled.h1`
  padding: 0rem 0rem;
  font-size: 3rem;
  color: white;
  font-family: YouTube Sans, Roboto, Noto Naskh Arabic UI, Arial, sans-serif;
`;

const IntroText = styled.p`
  color: white;
  padding: 1rem 0rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 0rem;
  align-items: flex-start;
  width: 80%;
`;

const MusicButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 18px;
  /* font-size: 14px; */
  font-weight: 500;
  /* line-height: 36px; */
  height: 36px;
  padding: 0rem 32px;
  gap: 10px;
`;

const ButtonName = styled.p`
  color: black;
  /* padding-left: 10px; */
  font-size: 14px;
  font-weight: 600;
`;

const VerifiedHeader = styled.p`
  color: white;
  font-size: 16px;
`;

const VerifiedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Intro = () => {
  return (
    <IntroContainer>
      <VerifiedContainer>
          <Verified />
        <VerifiedHeader>
          Verified Developer
        </VerifiedHeader>
      </VerifiedContainer>

      <NameIntro>Jerome</NameIntro>
      <IntroText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, ipsa
        totam laudantium cupiditate nam, accusantium eum nobis vel perferendis
        libero nisi sapiente nulla, illo exercitationem impedit eos harum
        assumenda iusto.
      </IntroText>
      <ButtonContainer>
        <MusicButton>
          {
            <Image
              src={shuffle}
              alt="shuffle"
              width={20}
              height={20}
              margin-right="6px"
            />
          }
          <ButtonName>Shuffle</ButtonName>
        </MusicButton>
        <MusicButton>
          <PlayCustom />
          {/* {<Image src={PlayCustom} alt="play" width={20} height={20} margin-right='6px' />} */}
          <ButtonName>Play</ButtonName>
        </MusicButton>
        <MusicButton>
          <Link href="https://www.linkedin.com/in/jerome-mn/">
            <LinkedIn color="black" />
          </Link>
          <ButtonName>Subscribe</ButtonName>
          <Link href="https://github.com/Jeromemn">
            <GitHub color="black" fill />
          </Link>
        </MusicButton>
      </ButtonContainer>
    </IntroContainer>
  );
};

export default Intro;
