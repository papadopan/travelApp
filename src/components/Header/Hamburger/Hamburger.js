import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.div`
  width: 30px;
  position: relative;
  right: 5rem;
  top: 3.3rem;
  cursor: pointer;
  padding: 1rem;
  display: none;

  @media ${props => props.theme.mediaQueries.medium} {
    display: block;
  }
}

  & span{
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: var(--color-secondary);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.2s ease-in-out;

  &:nth-child(1) {
    transform-origin: left center;
    top: ${props => (props.open ? '-7px' : '0')};
    left: ${props => (props.open ? '8x' : '0')};
    transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0deg)')};
  }

  &:nth-child(2) {
    top: ${props => (props.open ? '15px' : '15px')};
    width: ${props => (props.open ? '0' : '100%')};
    opacity: ${props => (props.open ? '0' : '1')};
  }

  &:nth-child(3) {
    transform-origin: left center;
    top: ${props => (props.open ? '30px' : '30px')};
    left: ${props => (props.open ? '2x' : '0')};
    transform: ${props => (props.open ? 'rotate(-48deg)' : 'rotate(0deg)')};
  }
}
`;

const Hamburger = ({ open, clicked }) => {
  return (
    <StyledHamburger open={open} onClick={clicked}>
      <span />
      <span />
      <span />
    </StyledHamburger>
  );
};

export default Hamburger;
