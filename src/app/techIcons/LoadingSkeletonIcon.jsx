import Image from 'next/image';
import LoadSkel from '../../../public/LoadSkel.svg';

// Load skel icon has issues as svg for mobile devices
const LoadingSkeletonIcon = () => (
  <Image src={LoadSkel} alt={"loading skeleton icon"} width={40} height={40} />

);

export default LoadingSkeletonIcon;