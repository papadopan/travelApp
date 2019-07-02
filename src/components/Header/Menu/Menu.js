import React from 'react';
import styled from 'styled-components';

const NavWrapprer = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 5rem;
`;

const UL = styled.ul`
  display: flex;
`;

const Menu = () => {
  return (
    <NavWrapprer>
      <UL>
        <li>Home</li>
        <li>Menu</li>
        <li>Countries</li>
      </UL>
    </NavWrapprer>
  );
};

export default Menu;
