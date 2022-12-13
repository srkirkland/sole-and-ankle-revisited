import React from "react";
import styled from "styled-components/macro";

import { BREAKPOINTS, COLORS } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
  return (
    <SuperWrapper>
      <MiniBar />
      <Wrapper>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </Wrapper>
    </SuperWrapper>
  );
};

const SuperWrapper = styled.div``;

const MiniBar = styled.div`
  @media (max-width: ${BREAKPOINTS.laptop}rem) {
    display: flex;
    color: ${COLORS.gray[300]};
    background-color: ${COLORS.gray[900]};
    height: 4px;
    width: 100%;
  }
`;
const Wrapper = styled.div`
  @media (max-width: ${BREAKPOINTS.laptop}rem) {
    display: none;
  }

  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
