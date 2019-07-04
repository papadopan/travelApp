import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import NavItem from '../NavItem';

const NavWrapprer = styled.nav`
  display: flex;
  padding-right: 5rem;

  @media ${props => props.theme.mediaQueries.medium} {
    opacity: ${props => (props.mobile ? '1' : '0')};
  }
`;

const UL = styled.ul`
  display: flex;
  flex-direction: ${props => (props.mobile ? 'column' : 'row')};
`;

const Menu = ({ isMobile }) => {
  return (
    <NavWrapprer mobile={isMobile}>
      <UL mobile={isMobile}>
        <NavItem link="/" mobile={isMobile}>
          <FormattedMessage id="header.menu" defaultMessage="Good Morning" />
        </NavItem>
        <NavItem link="/settings" mobile={isMobile}>
          <FormattedMessage id="header.countries" defaultMessage="Countries" />
        </NavItem>
        <NavItem link="/vjhbj" mobile={isMobile}>
          <FormattedMessage id="header.mymap" defaultMessage="My Map" />
        </NavItem>
      </UL>
    </NavWrapprer>
  );
};

export default Menu;
