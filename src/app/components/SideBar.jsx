'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useOnClickOutside from '../hooks/useOnOutsideClick';
import { mq } from '../styles/mixins';
import styled, { keyframes } from 'styled-components';
import { YouTubeHome, ProfileIcon, SubscriptionsYT, ContactIcon, MobileMenuBurger, CloseIcon } from '../icons';
import ButtonBase from './ButtonBase';

const SidePanel = styled.div`
  height: calc(100vh - 72px);
  justify-content: center;
  width: 72px;

  ${mq.largeMobile(`
    display: none;
  `)}
`;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  //
  // changes made from relative to fixed to allow overflow scroll on home page
  position: relative;
  top: 72px;

  ${mq.mobile(`
    display: none;
  `)}

  ${mq.largeMobile(`
    display: none;
  `)}
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
  justify-content: center;
  padding: 12px 0;
  width: 56px;
  cursor: pointer;
  z-index: 100;

  ${mq.largeMobile(`
    width: 42px;
    height: 42px;
    padding: 0;
  `)}
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 8px;
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
  }
`;

const MobileMenuWrapper = styled.div`
  display: none;
  width: 40px;
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 580;
  padding: 1rem;

  ${mq.largeMobile(`
    display: flex;
  `)}
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0%);
    visibility: visible;
  }
`;

const MobileSideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0);
  position: absolute;
  top: 0;
  z-index: 590;
  border-right: 1px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  animation: ${slideInLeft} 0.3s ease-in;
  padding: 1rem;
  gap: 1rem;
`;

const SideBar = () => {
  const pathname = usePathname();
  const isPathActive = (href) => (pathname === href ? 'active' : null);

  return (
    <SidePanel>
      <SideBarWrapper>
        <Link href="/">
          <SidebarButton className={isPathActive('/')}>
            <YouTubeHome color="white" width={24} height={24} /> Home
          </SidebarButton>
        </Link>
        <Link href="/about">
          <SidebarButton className={isPathActive('/about')}>
            <ProfileIcon color="white" width={24} height={24} /> About
          </SidebarButton>
        </Link>
        <Link href="/projects">
          <SidebarButton className={isPathActive('/projects')}>
            <SubscriptionsYT color="white" width={24} height={24} /> Projects
          </SidebarButton>
        </Link>
        <Link href="/contact">
          <SidebarButton className={isPathActive('/contact')}>
            <ContactIcon color="white" width={24} height={24} /> Contact
          </SidebarButton>
        </Link>
      </SideBarWrapper>
    </SidePanel>
  );
};

export default SideBar;

export const MobileSideBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const MobileMenuRef = useRef();
  useOnClickOutside(MobileMenuRef, () => setOpen(false));

  const isPathActive = (href) => (pathname === href ? 'active' : null);

  const toggleOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };
  return (
    <MobileMenuWrapper $open={open}>
      <ButtonBase variant="icon" onClick={toggleOpen}>
        <MobileMenuBurger color="white" width={30} height={30} />
      </ButtonBase>
      {open && (
        <MobileSideBarWrapper ref={MobileMenuRef}>
          <ButtonBase variant="icon" onClick={toggleOpen}>
            <CloseIcon color="white" width={30} height={30} />
          </ButtonBase>
          <Link href="/">
            <SidebarButton className={isPathActive('/')} onClick={toggleOpen}>
              <YouTubeHome color="white" width={24} height={24} /> Home
            </SidebarButton>
          </Link>
          <Link href="/about">
            <SidebarButton className={isPathActive('/about')} onClick={toggleOpen}>
              <ProfileIcon color="white" width={24} height={24} /> About
            </SidebarButton>
          </Link>
          <Link href="/projects">
            <SidebarButton className={isPathActive('/projects')} onClick={toggleOpen}>
              <SubscriptionsYT color="white" width={24} height={24} /> Projects
            </SidebarButton>
          </Link>
          <Link href="/contact">
            <SidebarButton className={isPathActive('/contact')} onClick={toggleOpen}>
              <ContactIcon color="white" width={24} height={24} /> Contact
            </SidebarButton>
          </Link>
        </MobileSideBarWrapper>
      )}
    </MobileMenuWrapper>
  );
};
