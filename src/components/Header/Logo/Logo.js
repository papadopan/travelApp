import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/map.svg';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 40px;
  margin-right: 3rem;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <LogoImg src={logo} />
    </StyledLogo>
  );
};

export default Logo;
