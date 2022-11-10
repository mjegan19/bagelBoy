import React from 'react';
import styled from 'styled-components';

import ComponentCntr from '../layout/ComponentCntr';

const StyledCard = styled.div`

  margin: 2rem;
  padding: 2rem 3rem;
  width: 450px;
  border: 1px solid #D0D3D4;
  border-radius: 0px;
  background-color: #FFFFFF;

  .card-header {
    text-align: center;

    p {
      font-size: 2rem;
    }
  }
`;


const AuthCard = ({ header, children }) => {
  return (
    <ComponentCntr>
      <StyledCard>
        <div className="card-header">
          <h2>{header}</h2>
        </div>
        {children}
      </StyledCard>
    </ComponentCntr>
  )
}

export default AuthCard;