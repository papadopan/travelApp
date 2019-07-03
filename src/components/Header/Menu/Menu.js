import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
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
        <NavItem link="/">
          <FormattedMessage id="dash" defaultMessage="Good Morning" />
        </NavItem>
        <NavItem link="/settings">Menu</NavItem>
        <NavItem link="/vjhbj">Countries</NavItem>
      </UL>
    </NavWrapprer>
  );
};

export default Menu;
