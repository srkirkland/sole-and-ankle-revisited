import React from "react";
import styled from "styled-components/macro";

import { BREAKPOINTS, COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <NavLink href="/sale">
            <Icon id="shopping-bag" strokeWidth={1} />
          </NavLink>
          <NavLink href="/sale">
            <Icon id="search" strokeWidth={1} />
          </NavLink>
          <MobileNavButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
          </MobileNavButton>
        </MobileNav>
        <EndSide />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  justify-content: space-between;
`;

const MobileNavButton = styled.button`
  background-color: transparent;
  border: none;
`;

const MobileNav = styled.nav`
  @media (min-width: ${BREAKPOINTS.laptop}rem) {
    display: none;
  }

  display: flex;
  justify-content: flex-end;
  gap: 5vw;
`;

const Nav = styled.nav`
  @media (max-width: ${BREAKPOINTS.laptop}rem) {
    display: none;
  }

  display: flex;
  gap: 48px;
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const EndSide = styled.div`
  @media (max-width: ${BREAKPOINTS.laptop}rem) {
    display: none;
  }

  flex: 1;
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

export default Header;
