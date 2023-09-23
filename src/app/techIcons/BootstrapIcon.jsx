import Image from "next/image";
import bootstrapLogo from "../../../public/bootstrapLogo.svg";

const BootstrapIcon = () => (
  <Image src={bootstrapLogo} alt={"bootstrap icon"} width={40} height={40} />
);

export default BootstrapIcon;