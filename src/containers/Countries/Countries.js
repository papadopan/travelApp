import React from 'react';
import styled from 'styled-components';
import { Button } from '../../theme/components';

const StyledCountries = styled.div``;
const Countries = () => {
  return (
    <StyledCountries>
      <p>Countries</p>
      <Button color="secondary" size="large" variant="contained">
        Antonios
      </Button>
    </StyledCountries>
  );
};

export default Countries;
