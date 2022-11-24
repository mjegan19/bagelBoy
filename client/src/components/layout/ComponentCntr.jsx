import React from 'react';
import styled from 'styled-components';

const StyledCmpntCntr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ComponentCntr = ({ children }) => {
  return (
    <StyledCmpntCntr>{children}</StyledCmpntCntr>
  )
}

export default ComponentCntr;