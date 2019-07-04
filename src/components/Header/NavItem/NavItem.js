import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const NavLinkWrapper = styled(NavLink)`
  font-size: ${props => (props.isMobile ? '2rem' : '1.7rem')};
  color: var(--color-secondary);
  padding: ${props => (props.isMobile ? '3rem' : '1rem')};
  margin: 0 1rem;
  border: ${props =>
    props.isMobile ? '1px solid var(--color-main)' : '1px solid var(--color-main)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weigth: light;

  &:hover {
    border-bottom: 1px solid var(--color-secondary);
    cursor: pointer;
  }
`;

const NavItem = ({ link, children, mobile }) => {
  return (
    <NavItemWrapper>
      <NavLinkWrapper isMobile={mobile} to={link}>
        {children}
      </NavLinkWrapper>
    </NavItemWrapper>
  );
};

export default NavItem;
