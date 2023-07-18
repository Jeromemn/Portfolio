"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import play from "../images/play.svg";
import projectImage from "../images/projectImage.png";
import contactImage from "../images/contactImage.png";
import about from "../images/about.png";

const headerList = [
  { id: 1, name: "Home", path: "/", image: projectImage },
  { id: 2, name: "About", path: "/about", image: about },
  { id: 3, name: "Contact", path: "/contact", image: contactImage },
  { id: 4, name: "Projects", path: "/projects", image: projectImage },
];

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  height: 100%;
  padding-left: 4rem;
  padding-right: 4rem;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* align-items: space-between; */
  flex-direction: column;
  height: 100%;
  width: 100%;
  /* position: fixed; */
  /* z-index: 1; */
`;


const HeaderTitle = styled.h2`
  color: white;
  /* padding-left: 0.5rem; */
`;


const HeaderItemWrapper = styled.div`
  display: flex;
  align-content: center;
  border-bottom: 1px grey solid;
  padding: 0.5rem 0rem;
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


const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Popular</HeaderTitle>
      <NavigationContainer>
        {headerList.map(({ id, name, path, image }) => (
          <HeaderItemWrapper key={id}>
            <AlbumCover>
              <AlbumImage
                src={image}
                alt={name}
                quality={100}
                width={40}
                height={40}
               
              />
              <PlayImage src={play} alt="play" />
            </AlbumCover>
            {/* <PlayCover> */}
            {/* </PlayCover> */}
            <Link href={path}>
              <HeaderItems>{name}</HeaderItems>
            </Link>
          </HeaderItemWrapper>
        ))}
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
