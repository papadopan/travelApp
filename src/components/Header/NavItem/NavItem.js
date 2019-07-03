import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavItemWrapper = styled.li`
  display: flex;
  height: 100%;
`;

const NavLinkWrapper = styled(NavLink)`
  font-size: 1.7rem;
  color: var(--color-white);
  padding: 1rem;
  margin: 0 1rem;
  border: 1px solid var(--color-main);
  display: flex;
  align-items: center;
  font-weigth: light;

  &:hover {
    border-bottom: 1px solid var(--color-white);
    cursor: pointer;
  }
  &.active {
    color: blue;
  }
`;

const NavItem = ({ link, children }) => {
  return (
    <NavItemWrapper>
      <NavLinkWrapper activeClassName="active" to={link}>
        {children}
      </NavLinkWrapper>
    </NavItemWrapper>
  );
};

export default NavItem;
