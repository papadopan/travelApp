import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh-10rem);
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <MainWrapper>{children}</MainWrapper>
    </React.Fragment>
  );
};

export default Layout;
