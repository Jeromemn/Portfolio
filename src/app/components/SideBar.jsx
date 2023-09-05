"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mq } from "../styles/mixins";
import styled from "styled-components";
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

  /* ${mq.mobile(`
  height: 50%;
  display: flex;

  `)} */
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
  background-color: rgba(0, 0, 0, 0);

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
  ${mq.mobile(`
    display: flex;
    padding: 1rem;
    z-index: 100;
    
    `)}
    
    
    
      ${({ $open }) =>
      $open &&
     `
     width: 80px;
      position: absolute;
      justify-content: flex-start;
    
     `}
`;

const MobileSideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0);
  position: relative;
  z-index: 100;
  border-right: 1px solid rgba(255,255,255,0.15);
  box-sizing: border-box;
`;

const SideBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  console.log(open);

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
          <MobileSideBarWrapper>
            <ButtonBase variant="icon" onClick={toggleOpen}>
              <CloseIcon color="white" width={30} height={30} />
            </ButtonBase>
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
                <SubscriptionsYT color="white" width={24} height={24} />{" "}
                Projects
              </SidebarButton>
            </Link>
            <Link href="/contact">
              <SidebarButton className={isPathActive("/contact")}>
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
