import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Menu from './Menu';
import Hamburger from './Hamburger';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 10rem;
  width: 100%;
  background: var(--color-main);
  padding: 0 3rem;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 320rem;
  margin: 0 auto;
`;

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <HeaderWrapper>
      <StyledHeader>
        <Logo />
        <Menu />
        <Hamburger open={isOpened} clicked={() => setIsOpened(!isOpened)} />
      </StyledHeader>
    </HeaderWrapper>
  );
};
export default Header;
