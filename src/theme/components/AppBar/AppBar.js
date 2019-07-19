import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import styled, { css } from 'styled-components';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';
import LogoIcon from '@material-ui/icons/LocationOn';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Toolbar from '../ToolBar';
import { Menu, IconButton, MenuItem } from '../index';
import * as actions from '../../../store/actions';

const StyledLink = styled(Link)`
  ${({ theme }) => css`
    color: var(--color-secondary);
    font-size: 1rem;
    letter-spacing: 1px;
    padding: 1rem;
    border-bottom: 0px solid var(--color-secondary);
    underline: none;
    &.active {
      border-bottom: 1px solid var(--color-secondary);
    }

    &:hover {
      underline: none;
    }
  `}
`;

const StyledToolBar = styled(Toolbar)`
  justify-content: space-between;
`;

const NavBar = ({ logOut, loggedIn }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const removeSession = () => {
    handleClose();
    logOut();
    localStorage.removeItem('token');
  };
  return (
    <AppBar>
      <StyledToolBar>
        <div>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <LogoIcon />
          </IconButton>
          {loggedIn && (
            <StyledLink component={NavLink} to="/countries" color="secondary" underline="none">
              <FormattedMessage defaultMessage="Countries" id="header.countries" />
            </StyledLink>
          )}
          {loggedIn && (
            <StyledLink component={NavLink} to="/profile" color="secondary" underline="none">
              <FormattedMessage defaultMessage="Profile" id="header.profile" />
            </StyledLink>
          )}
        </div>
        {loggedIn && (
          <div>
            <IconButton
              aria-label="More"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={() => removeSession()}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </StyledToolBar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(actions.logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
