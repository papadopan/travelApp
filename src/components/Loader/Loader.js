import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import loader from '../../assets/loading.gif';

const StyledLoader = styled.div`
  width: 100%;
  background: red;
  position: absolute;
  margin-top: 10rem;
  height: calc(100vh - 10rem);
  z-index: 100;
  display: ${props => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.5);
`;

const Img = styled.img`
  height: 100px;
`;
const Loader = ({ loading }) => (
  <StyledLoader show={loading}>
    <Img src={loader} />
  </StyledLoader>
);

const mapStateToProps = state => ({
  loading: state.loading
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader);
