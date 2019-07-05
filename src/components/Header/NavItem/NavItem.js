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

  &:hover {
    border-bottom: 1px solid var(--color-secondary);
  }
`;

const NavItem = ({ children, link }) => {
  return (
    <StyledNavItem>
      <StyledLink to={link}>{children}</StyledLink>
    </StyledNavItem>
  );
};

export default NavItem;
