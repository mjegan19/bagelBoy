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

// Variable H2 Render based on Props Input
const AuthCard = ({ header, storeName, children }) => {
  let pageHeading;
  if (storeName === null) {
    pageHeading = <h2>{header}</h2>;
  } else {
    pageHeading = <h2>{header}<br />{storeName}</h2>
  }


  return (
    <ComponentCntr>
      <StyledCard>
        <div className="card-header">
          {pageHeading}
        </div>
        {children}
      </StyledCard>
    </ComponentCntr>
  )
}

export default AuthCard;