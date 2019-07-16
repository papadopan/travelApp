import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as actions from '../../store/actions';

const Users = gql`
  query {
    users {
      email
      username
      password
      _id
    }
  }
`;

const ProfileContainer = ({ loadingOn, loadingOff }) => {
  return (
    <Query query={Users}>
      {({ data, loading, error }) => {
        console.log('loading', loading);
        if (loading) {
          loadingOn();
          return loading;
        }

        if (error) {
          return `Error .... ${error.message}`;
        }

        if (data) {
          console.log(data);
        }
        loadingOff();
        return <Profile />;
      }}
    </Query>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loadingOn: () => dispatch(actions.requestStart()),
  loadingOff: () => dispatch(actions.requestEnd())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
