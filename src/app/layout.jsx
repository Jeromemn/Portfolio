'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import StyledComponentsRegistry from './styles/registry';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Search from './components/Search';
import MobileHeader from '@/app/components/MobileHeader';
import { Roboto } from 'next/font/google';
import mainImage from '../../public/mainImage.jpg';
import styled from 'styled-components';
import { mq } from './styles/mixins';

export const roboto = Roboto({
  subsets: ['latin-ext'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto-mono',
});

// eslint-disable-next-line no-unused-vars
const metadata = {
  title: 'Home',
  description: 'Home page',
  keywords: 'home, page',
};

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  ${mq.smallDesktop(`
    max-width: 1000px;
    padding: 0 4rem 0 2rem;
 `)}
  ${mq.largeMobile(`
    padding: 0 4rem;
  `)}
  ${mq.mobile(`
    padding: 0 3rem;
    max-width: 320px;
  `)}
  ${mq.smallMobile(`
    padding: 0 2rem;
  `)}
`;

const LayoutRoot = styled.div`
  display: flex;
  background: #030303;
  height: 100%;

  ${({ $isHome }) =>
    $isHome &&
    `
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  `}
`;

const LayoutMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 72px);
  z-index: 1;
`;

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  max-height: 55%;
`;

const BackdropOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding-bottom: 1rem;
  background: linear-gradient(
      rgba(3, 3, 3, 0.16) 0%,
      rgba(3, 3, 3, 0.19) 50%,
      rgba(3, 3, 3, 0.74) 75%,
      rgba(3, 3, 3, 0.83) 85%,
      rgba(3, 3, 3, 0.81) 89%,
      rgba(3, 3, 3, 0.89) 90%,
      #030303 95%,
      #030303 100%
    ),
    rgba(0, 0, 0, 0.4);
`;

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  return (
    <html lang="en" className={roboto.className}>
      <body className={roboto.className}>
        <StyledComponentsRegistry className={roboto.className}>
          <LayoutRoot>
            {isHome && (
              <Backdrop>
                <Image
                  // src="/mainImage.jpg"
                  src={mainImage}
                  alt="main Image"
                  priority
                  quality={100}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1500px) 100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
                <BackdropOverlay />
              </Backdrop>
            )}
            <SideBar />
            <LayoutMain>
              <MobileHeader />
              <PageWrapper>
                <ContentWrapper>
                  <Search />
                  {children}
                </ContentWrapper>
              </PageWrapper>
            </LayoutMain>
            <Footer />
          </LayoutRoot>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
