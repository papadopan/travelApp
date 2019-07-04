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
  z-index: 100;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 320rem;
  margin: 0 auto;
`;

const MobileMenu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background: var(--color-main);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.open ? '1' : '0')};
  transition: 0.5s ease-in-out;
  transform: ${props => (props.open ? 'translate(0)' : 'translateY(-100%)')};
`;

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <React.Fragment>
      <HeaderWrapper>
        <StyledHeader>
          <Logo />
          <Menu />
          <Hamburger open={isOpened} clicked={() => setIsOpened(!isOpened)} />
        </StyledHeader>
      </HeaderWrapper>
      <MobileMenu open={isOpened}>
        <Menu isMobile />
      </MobileMenu>
    </React.Fragment>
  );
};
export default Header;
