import React from 'react';
import styled from 'styled-components';
import NavItem from '../NavItem';

const StyledNavBar = styled.div``;

const Ul = styled.ul`
  display: flex;
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <Ul>
        <NavItem link="home">Home</NavItem>
        <NavItem link="countries">Countries</NavItem>
        <NavItem link="profile">Profile</NavItem>
      </Ul>
    </StyledNavBar>
  );
};

export default NavBar;
