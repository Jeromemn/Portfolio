'use client';
import styled from 'styled-components';
import { mq } from '../styles/mixins';

const CenterContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;

  ${mq.largeMobile(`
    width: 90%;
  `)}

  ${mq.mobile(`
    width: 95%;
  `)}
`;

// const CenterContent = ({ children }) => {
//   return <CenterContentWrapper>{children}</CenterContentWrapper>;
// };

export default CenterContent;
