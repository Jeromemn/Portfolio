'use client';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import useOnScroll from '@/app/hooks/useOnScroll';
import projectsData from '../utils/projectsData';
import { mq } from '../styles/mixins';

const TopBarContainer = styled.div`
  display: none;
  ${({ $isScrolling }) =>
    $isScrolling &&
    `
    background-color: black;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    `}

  ${mq.mobile(`
    display: flex;
    top: 0;
    padding-top: 1rem;
    width: 100%;
    flex-direction: column;
  
  `)}
`;

const CurrentPageText = styled.p`
  color: ${({ color }) => color || '#ffffff'};
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
`;

const NowPlayingSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NowPlayingOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const NowPlayingTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopBar = () => {
  const pathname = usePathname();
  const projectImages = projectsData.reduce((acc, current) => ({ ...acc, [current.link]: current.image }), {});

  const isScrolling = useOnScroll();

  const images = {
    '/': {
      url: '/home.png',
      alt: 'some alt',
      title: 'Home Page',
      year: '2023',
    },
    '/about': {
      url: '/about.png',
      alt: 'some alt',
      title: 'About',
      year: '2023',
    },
    '/contact': {
      url: '/contactImage.png',
      alt: 'some alt text',
      title: 'Contact',
      year: '2023',
    },
    '/projects': {
      url: '/projects.png',
      alt: 'some alt text',
      title: 'Projects',
      year: '2023',
    },
    ...projectImages,
  };

  const { url, alt, title, year } = images[pathname] || {};
  return (
    <TopBarContainer $isScrolling={isScrolling}>
      {/*<NowPlayingSection>*/}
      <NowPlayingOne>
        <ImageWrapper>
          <Image src={`${url}`} alt={alt} width={20} height={20} />
        </ImageWrapper>
        <CurrentPageText as={Link} href="/">
          {' '}
          Jerome{' '}
        </CurrentPageText>
      </NowPlayingOne>
      <NowPlayingTwo>
        <CurrentPageText color="rgba(255, 255, 255, 0.7)">
          {title} • {year}
        </CurrentPageText>
      </NowPlayingTwo>
      {/*</NowPlayingSection>*/}
    </TopBarContainer>
  );
};

export default TopBar;
