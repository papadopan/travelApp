import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Logo from './Logo';
import NavBar from './NavBar';
import Menu from './Menu';
import LogOut from './Logout';

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

const Header = ({ loggedIn }) => {
  return (
    <StyledHeader>
      <LeftWrapper>
        <Logo />
        {loggedIn && <NavBar />}
      </LeftWrapper>
      {!loggedIn && <Menu />}
      {loggedIn && <LogOut />}
    </StyledHeader>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
