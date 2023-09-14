"use client";
import React from "react";
import styled from "styled-components";
import { mq } from "../styles/mixins";

const CenterContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;

  ${mq.mobile(`
    width: 95%;
  `)}

  ${mq.largeMobile(`
    width: 90%;
  `)}
`;

const CenterContent = ({ children }) => {
  return <CenterContentWrapper>{children}</CenterContentWrapper>;
};

export default CenterContent;
