import styled from 'styled-components';
import TopBar from '@/app/components/TopBar';
import { MobileSearch } from '@/app/components/Search';
import { MobileSideBar } from '@/app/components/SideBar';
import { mq } from '../styles/mixins';

const MobileHeaderContainer = styled.div`
  display: none;

  ${mq.largeMobile(`
    display: flex;
`)}
`;

const MobileHeader = () => {
  return (
    <MobileHeaderContainer>
      <MobileSideBar />
      <TopBar />
      <MobileSearch />
    </MobileHeaderContainer>
  );
};

export default MobileHeader;
