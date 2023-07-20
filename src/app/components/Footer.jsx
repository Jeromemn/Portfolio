'use client'
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const FooterWrapper = styled.div`
  display: flex;
  background-color: rgb(33, 33, 33);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 72px;
`;

const PlayPauseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-left: 1rem;
`;

const NowPlayingSection = styled.div`
  display: flex;
  justify-content: center;
`;

const ShuffleRepeatSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterSectionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Footer = () => {
  return (
  <FooterWrapper>
    <FooterSectionContainer>
    <PlayPauseWrapper>
      <p> play </p>
      </PlayPauseWrapper>
      <NowPlayingSection>
        <p>Now Playing</p>
      </NowPlayingSection>
      <ShuffleRepeatSection>
        <p>Shuffle</p>
        <p>Repeat</p>
      </ShuffleRepeatSection>
    </FooterSectionContainer>
  </FooterWrapper>
  );
};

export default Footer;