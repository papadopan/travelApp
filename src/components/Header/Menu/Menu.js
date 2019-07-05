import React from 'react';
import styled from 'styled-components';
import NavItem from '../NavItem';

const Ul = styled.ul`
  display: flex;
`;

const Menu = () => {
  return (
    <Ul>
      <NavItem link="login">Log In</NavItem>
      <NavItem link="signup">Sign Up</NavItem>
    </Ul>
  );
};

export default Menu;
