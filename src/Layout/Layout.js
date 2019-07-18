import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../theme/components';

const StyledLayout = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }) => (
  <React.Fragment>
    <NavBar />
    <StyledLayout>{children}</StyledLayout>
  </React.Fragment>
);

export default Layout;
