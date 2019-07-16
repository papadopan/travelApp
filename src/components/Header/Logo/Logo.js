import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import logo from '../../../assets/map.svg';
import * as actions from '../../../store/actions';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 40px;
  margin-right: 3rem;
`;

const Logo = ({ turnOn }) => {
  return (
    <StyledLogo>
      <LogoImg src={logo} onClick={() => turnOn()} />
    </StyledLogo>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  turnOn: () => dispatch(actions.requestStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logo);
