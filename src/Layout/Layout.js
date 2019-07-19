import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../theme/components';

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => (
  <React.Fragment>
    <NavBar />
    <StyledLayout>{children}</StyledLayout>
  </React.Fragment>
);

export default Layout;
