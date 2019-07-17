import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Ul = styled.ul`
  dipslay: flex;
`;

const LogOut = ({ logOut }) => (
  <Ul>
    <div
      role="button"
      onClick={() => {
        logOut();
        localStorage.removeItem('token');
      }}
    >
      log out
    </div>
  </Ul>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(actions.logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut);
