'use client'
import Image from "next/image";
import mainImage from "../images/mainImage.jpg";
import styled from "styled-components";

// const ImageContainer = styled.div`
//   display: flex;
//   /* justify-content: center; */
//   /* align-items: center; */
//   /* margin: 0 auto; */
//   width: 100%;
//   height: 80%;
//   /* object-fit: contain; */
//   position: fixed;
//   z-index: -1;
//   overflow: hidden;
// `;

const ArtistCover = () => {
  return (
    // <ImageContainer>
      <Image
        src={mainImage}
        alt="Picture of the artist"
        // width={100}
        // height={500}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "fill", position: "absolute", color: "transparent", inset: "0px"}}
      />
    // </ImageContainer>
  );
};

export default ArtistCover;
