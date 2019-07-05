import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const StyledLayout = styled.div`
  min-height: calc(100vh - 10rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <StyledLayout>{children}</StyledLayout>
  </React.Fragment>
);

export default Layout;
