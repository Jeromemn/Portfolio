"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Thumbs from "@/app/components/Thumbs";
import { PlayYouTube } from "../icons";
import { youTubeDark, youTubeSans } from "../styles/setFonts";
import { mq } from "../styles/mixins";

const headerList = [
  { id: 2, name: "All About Me", path: "/about", image: "/about.png" },
  {
    id: 3,
    name: "Get In Contact",
    path: "/contact",
    image: "/contactImage.png",
  },
  {
    id: 4,
    name: "Projects Playlist",
    path: "/projects",
    image: "/projects.png",
  },
];

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${mq.largeMobile(` 
    padding: 0rem 2rem;
  `)}
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const HeaderTitle = styled.h2`
  color: white;
  padding: 1rem 0rem 1rem 0rem;
`;

const HeaderItemWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0rem;
  gap: 1.5rem;
  width: 100%;
  justify-content: flex-start;
  align-items: center;

  ${mq.largeMobile(`
    gap: 1rem;
  `)}

  ${mq.mobile(`
    gap: 1rem;
  `)}
`;

const HeaderItems = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: white;
  line-height: 1.2rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 120px;
`;

const AlbumCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  border-radius: 25%;
  overflow: hidden;

  ${mq.largeMobile(`
    width: 40px;
    height: 40px;
  `)}

  ${mq.mobile(`
    width: 50px;
    height: 50px;
  `)}
`;

const AlbumImage = styled(Image)`
  ${HeaderItemWrapper}:hover & {
    display: none;
  }

  ${mq.largeMobile(`
    width: 40px;
    height: 40px;
  `)}

  ${mq.mobile(`
    width: 50px;
    height: 50px;
  `)}
`;

const ItemSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 90%;
  gap: 10rem;

  ${mq.mobile(`
    flex-direction: column;
    height: 100%;
    width: 70%;
    justify-content: center;
    align-items: flex-start;
    gap: 0rem;
  `)}

  ${mq.largeMobile(`
    flex-direction: column;
    height: 100%;
    width: 70%;
    justify-content: center;
    align-items: flex-start;
    gap: 0rem;
  `)}
`;

const ArtistName = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
`;

const HideThumbsMobile = styled.div`
  ${mq.largeMobile(`
    display: none;
  `)}

  ${mq.mobile(`
    display: none;
  `)}
`;

const ShowThumbsTablet = styled.div`
  display: none;

  ${mq.largeMobile(`
    display: flex;
  `)}
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle className={youTubeSans.className}>Popular</HeaderTitle>
      <NavigationContainer>
        {headerList.map(({ id, name, path, image }) => (
          <HeaderItemWrapper key={id}>
            <AlbumCover>
              <AlbumImage
                src={`${image}`}
                alt={name}
                quality={100}
                width={40}
                height={40}
              />
              <PlayYouTube color="white" width={40} height={40} />
            </AlbumCover>
            <ItemSection>
              <Link href={`${path}`}>
                <HeaderItems>{name}</HeaderItems>
              </Link>
              <ArtistName> Jerome </ArtistName>
              <HideThumbsMobile>
                <Thumbs id={name} />
              </HideThumbsMobile>
            </ItemSection>
            <ShowThumbsTablet>
              <Thumbs id={name} />
            </ShowThumbsTablet>
          </HeaderItemWrapper>
        ))}
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
