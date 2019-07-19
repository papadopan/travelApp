import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledTheme } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import theme from '../../../utils/theme';

const MuiTheme = createMuiTheme({
  palette: {
    error: {
      main: '#A9A9A9'
    },
    primary: {
      main: '#F02B67'
    },
    secondary: {
      main: '#202637'
    }
  },
  status: {
    danger: 'orange'
  }
});

const ThemeProvider = ({ children }) => (
  <StyledTheme theme={theme}>
    <MuiThemeProvider theme={MuiTheme}>{children}</MuiThemeProvider>
  </StyledTheme>
);

export default ThemeProvider;
