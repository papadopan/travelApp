import React from 'react';
import styled from 'styled-components';

import NavItem from '../NavItem';

const NavWrapprer = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 5rem;

  @media ${props => props.theme.mediaQueries.medium} {
    opacity: 0;
  }
`;

const UL = styled.ul`
  display: flex;
  align-items: center;
`;

const Menu = () => {
  return (
    <NavWrapprer>
      <UL>
        <NavItem link="/">Home</NavItem>
        <NavItem link="/settings">Menu</NavItem>
        <NavItem link="/vjhbj">Countries</NavItem>
      </UL>
    </NavWrapprer>
  );
};

export default Menu;
