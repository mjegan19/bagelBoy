import React from 'react';
import styled from 'styled-components';

const StyledCmpntCntr = styled.div`
  margin: auto;
`;

const ComponentCntr = ({ children }) => {
  return (
    <StyledCmpntCntr>{children}</StyledCmpntCntr>
  )
}

export default ComponentCntr;