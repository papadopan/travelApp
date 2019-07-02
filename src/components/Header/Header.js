import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Menu from './Menu';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 10rem;
  width: 100%;
  background: var(--color-main);
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
`;

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Menu />
  </HeaderWrapper>
);
export default Header;
