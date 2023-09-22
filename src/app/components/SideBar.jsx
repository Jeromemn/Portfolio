"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useOnClickOutside from "../hooks/useOnOutsideClick";
import { mq } from "../styles/mixins";
import styled, { keyframes } from "styled-components";
import {
  YouTubeHome,
  ProfileIcon,
  SubscriptionsYT,
  ContactIcon,
  MobileMenuBurger,
  CloseIcon,
} from "../icons";
import ButtonBase from "./ButtonBase";

const SidePanel = styled.div`
  display: inline-block;
  height: calc(100vh - 72px);
  position: fixed;
  top: 0px;
  left: 1px;
  justify-content: center;
  width: 72px;

  ${mq.largeMobile(`
    z-index: 250;
  `)}
  ${mq.mobile(`
  height: 50%;
  display: flex;
  z-index: auto;
  justify-content: flex-start;

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
  /* background-color: rgba(0, 0, 0, 0); */

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

  ${mq.largeMobile(`
    display: flex;
    padding: 1rem;
    position: absolute;
    margin-right: 1rem;
    max-width: 70px;
  `)}

  ${mq.mobile(`
    display: flex;
    padding: 1rem;
    position: absolute;
    margin-right: 0;
    max-width: 70px;

  `)}

    
      ${({ $open }) =>
    $open &&
    `
    ${mq.mobile(`
    padding: 1rem 0 0 1rem;
    `)}
      width: 80px;
      position: absolute;
      justify-content: flex-start;
      z-index: 900;
    
     `}
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
  position: relative;
  z-index: 590;
  border-right: 1px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  animation: ${slideInLeft} 0.3s ease-in;
  
  ${mq.largeMobile(`
    padding: 1rem 1rem 1rem 1rem;
     margin-left: -1rem;
     margin-top: -1rem;
     gap: 1rem;
  `)}

  ${mq.mobile(`
    padding: 0 1rem 1rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    margin-left: -1rem;
     margin-top: 0;
  `)}
  ${mq.smallMobile(`
  padding: 0 1rem 1rem 1rem;
  margin-left: -1rem;
  `)}
  
`;

const SideBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  console.log(open);
  const MobileMenuRef = useRef();
  useOnClickOutside(MobileMenuRef, () => setOpen(false));

  const isPathActive = (href) => (pathname === href ? "active" : null);

  const toggleOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  return (
    <SidePanel>
      <MobileMenuWrapper $open={open}>
        {!open && (
          <ButtonBase variant="icon" onClick={toggleOpen}>
            <MobileMenuBurger color="white" width={30} height={30} />
          </ButtonBase>
        )}
        {open && (
          <MobileSideBarWrapper ref={MobileMenuRef}>
            <ButtonBase variant="icon" onClick={toggleOpen}>
              <CloseIcon color="white" width={30} height={30} />
            </ButtonBase>
            <Link href="/">
              <SidebarButton className={isPathActive("/")} onClick={toggleOpen}>
                <YouTubeHome color="white" width={24} height={24} /> Home
              </SidebarButton>
            </Link>
            <Link href="/about">
              <SidebarButton
                className={isPathActive("/about")}
                onClick={toggleOpen}
              >
                <ProfileIcon color="white" width={24} height={24} /> About
              </SidebarButton>
            </Link>
            <Link href="/projects">
              <SidebarButton
                className={isPathActive("/projects")}
                onClick={toggleOpen}
              >
                <SubscriptionsYT color="white" width={24} height={24} />{" "}
                Projects
              </SidebarButton>
            </Link>
            <Link href="/contact">
              <SidebarButton
                className={isPathActive("/contact")}
                onClick={toggleOpen}
              >
                <ContactIcon color="white" width={24} height={24} /> Contact
              </SidebarButton>
            </Link>
          </MobileSideBarWrapper>
        )}
      </MobileMenuWrapper>
      <SideBarWrapper>
        <Link href="/">
          <SidebarButton className={isPathActive("/")}>
            <YouTubeHome color="white" width={24} height={24} /> Home
          </SidebarButton>
        </Link>
        <Link href="/about">
          <SidebarButton className={isPathActive("/about")}>
            <ProfileIcon color="white" width={24} height={24} /> About
          </SidebarButton>
        </Link>
        <Link href="/projects">
          <SidebarButton className={isPathActive("/projects")}>
            <SubscriptionsYT color="white" width={24} height={24} /> Projects
          </SidebarButton>
        </Link>
        <Link href="/contact">
          <SidebarButton className={isPathActive("/contact")}>
            <ContactIcon color="white" width={24} height={24} /> Contact
          </SidebarButton>
        </Link>
      </SideBarWrapper>
    </SidePanel>
  );
};

export default SideBar;
