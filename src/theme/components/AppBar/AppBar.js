import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '../ToolBar';

const NavBar = ({ children }) => (
  <AppBar>
    <Toolbar>{children}</Toolbar>
  </AppBar>
);

export default NavBar;
