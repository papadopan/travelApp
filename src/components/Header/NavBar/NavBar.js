import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import NavItem from '../NavItem';

const StyledNavBar = styled.div``;

const Ul = styled.ul`
  display: flex;
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <Ul>
        <NavItem link="home">
          <FormattedMessage defaultMessage="Home" id="header.menu" />
        </NavItem>
        <NavItem link="countries">
          <FormattedMessage defaultMessage="Countries" id="header.countries" />
        </NavItem>
        <NavItem link="profile">
          <FormattedMessage defaultMessage="Profile" id="header.profile" />
        </NavItem>
      </Ul>
    </StyledNavBar>
  );
};

export default NavBar;
