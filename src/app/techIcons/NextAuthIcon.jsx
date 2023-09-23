import Image from "next/image";
import nextAuthIcon from "../../../public/nextAuthIcon.svg";
const NextAuthIcon = () => (
    <Image src={nextAuthIcon} alt={"next auth icon"} width={40} height={40} />
)

export default NextAuthIcon;