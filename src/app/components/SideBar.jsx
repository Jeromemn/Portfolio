'use client';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { YouTubeHome } from '../icons';

const SideBarWrapper = styled.div`
display: inline-block;
flex-direction: column;
background: transparent;
position: fixed;
top: 72px;
left: 0;
width: 72px;
padding: 1rem;
`;

const SidebarButton = styled.button`
background-color: transparent;
color: white;
border: none;
font-size: 10px;
line-height: 12px;
text-align: center;
font-weight: 500;
display: flex;
flex-direction: column;
white-space: nowrap;
align-items: center;


/*  if selected 
background-color: rgba(255,255,255,0.1); */
`;

const SideBar = () => {
  return (
    <SideBarWrapper>
      <Link href="/">
        <SidebarButton>
          <YouTubeHome color='white' width={24} height={24}/> Home
        </SidebarButton>
        </Link>
      {/* <Link to="/search">Search</Link> */}
      </SideBarWrapper>
  )
}

export default SideBar;