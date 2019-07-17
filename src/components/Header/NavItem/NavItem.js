import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavItem = styled.li`
  margin-right: 1rem;
`;

const StyledLink = styled(NavLink)`
  color: var(--color-secondary);
  font-size: 1.7rem;
  letter-spacing: 1px;
  padding: 1rem;
  border-bottom: 0px solid var(--color-secondary);

  &.active {
    border-bottom: 1px solid var(--color-secondary);
  }

  &:hover {
    box-shadow: -1px -2px 22px -9px rgba(0, 0, 0, 0.75);
  }
`;

const NavItem = ({ children, link }) => {
  return (
    <StyledNavItem>
      <StyledLink exact activeClassName="active" to={`/${link}`}>
        {children}
      </StyledLink>
    </StyledNavItem>
  );
};

export default NavItem;
