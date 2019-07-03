import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/map.svg';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  font-size: 2rem;
  letter-spacing .1rem;
  color: var(--color-grey);
  margin-left: 2rem;
`;

const Img = styled.img`
  height: 30px;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Img alt="logo" src={logo} />
      <Span>Traveller</Span>
    </LogoWrapper>
  );
};

export default Logo;
