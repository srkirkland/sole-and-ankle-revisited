/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import "@reach/dialog/styles.css";

import { BREAKPOINTS, COLORS, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay
      isOpen={isOpen}
      onDismiss={onDismiss}
      style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
    >
      <DialogContent
        aria-label="Mobile menu"
        style={{
          boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
          margin: "auto 0px auto auto",
          height: "100%",
          width: "85%"
        }}
      >
        <Wrapper>
          <CloseWrapper>
            <UnstyledButton onClick={onDismiss}>X</UnstyledButton>
          </CloseWrapper>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Wrapper>
      </DialogContent>
    </DialogOverlay>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const CloseWrapper = styled.div`
  margin: 0 0 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  gap: 14px;

  a {
    text-decoration: none;
    color: ${COLORS.gray[700]};
  }
`;

export default MobileMenu;
