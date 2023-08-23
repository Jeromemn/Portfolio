"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import play from "../images/play.svg";
import { youTubeDark, youTubeSans } from "../styles/setFonts";

// import projects from "/projects.png";
// import contactImage from "../images/contactImage.png";
// import about from "../images/about.png";

const headerList = [
  // { id: 1, name: "Home", path: "/", image: '/projects.png'},
  { id: 2, name: "About", path: "/about", image: '/about.png'},
  { id: 3, name: "Contact", path: "/contact", image: '/contactImage.png' },
  { id: 4, name: "Projects", path: "/projects", image: '/projects.png' },
];

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  /* height: 100%; */
  /* padding-left: 4rem; */
  padding-right: 4rem;
`;

const NavigationContainer = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  /* align-items: space-between; */
  flex-direction: column;
  height: 100%;
  width: 100%;
  /* position: fixed; */
  /* z-index: 1; */
`;


const HeaderTitle = styled.h2`
  color: white;
  padding: 1rem 0rem 1rem 0rem;
  /* padding-left: 0.5rem; */
`;


const HeaderItemWrapper = styled.div`
  display: flex;
  align-content: center;
  border-bottom: 1px grey solid;
  padding: 1rem 0rem;
  gap: 1.5rem;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  
  `;

const HeaderItems = styled.p`
  /* margin: 0 1rem; */
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: white;
  /* padding: 0.5rem; */
  line-height: 1.2rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 60px;


`;

const AlbumCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  border-radius: 25%;
  overflow: hidden;
  /* position: relative; */
`;

// const PlayCover = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 40px;
//   border-radius: 25%;
//   overflow: hidden;
// `;
const PlayImage = styled(Image)`
display:none;
width: 40px;
height: 40px;

${HeaderItemWrapper}:hover & {
  display: block;
}
`;

const AlbumImage = styled(Image)`
${HeaderItemWrapper}:hover & {
  display: none;
}

`;

const ItemSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 10rem;

`;

const ArtistName = styled.p`
color: rgba(255, 255, 255, 0.7);
font-size: 16px;
font-weight: 400;
line-height: 19.2px;

`;

// font color for p tag jerome

// rgba(255, 255, 255, 0.7)

// 

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
              <PlayImage src={play} alt="play" />
            </AlbumCover>
            {/* <PlayCover> */}
            {/* </PlayCover> */}
            <ItemSection>
              
            <Link href={`${path}`}>
              <HeaderItems>{name}</HeaderItems>
            </Link>
            <ArtistName> Jerome </ArtistName>
            </ItemSection>
          </HeaderItemWrapper>
        ))}
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
