import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import NavBar from './NavBar';
import Menu from './Menu';

const StyledHeader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 10rem;
  background: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <LeftWrapper>
        <Logo />
        <NavBar />
      </LeftWrapper>
      <Menu />
    </StyledHeader>
  );
};

export default Header;
