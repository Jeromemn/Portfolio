"use client";
import React from "react";
import styled from "styled-components";

const CenterContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
`;

const CenterContent = ({ children }) => {
  return <CenterContentWrapper>{children}</CenterContentWrapper>;
};

export default CenterContent;
