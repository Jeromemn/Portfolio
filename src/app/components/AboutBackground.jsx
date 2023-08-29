import Image from "next/image";
import cropped from "/public/cropped.png";

const styles = {
  position: "relative",
  // opacity: "0.5",
  
};

const AboutBackground = () => {
  return (
      <Image src={cropped} alt="background image" style={styles}/>
  );
};

export default AboutBackground;