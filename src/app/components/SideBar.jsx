"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import {
  YouTubeHome,
  ProfileIcon,
  SubscriptionsYT,
  ContactIcon,
} from "../icons";

const SidePanel = styled.div`
  display: inline-block;
  height: calc(100vh - 72px);
  position: fixed;
  top: 72px;
  left: 1px;
  justify-content: center;
  width: 72px;
`;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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

const SideBar = () => {
  const pathname = usePathname();

  const isPathActive = (href) => (pathname === href ? "active" : '');
  console.log(isPathActive);

  return (
    <SidePanel>
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
