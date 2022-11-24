import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

  const HeaderRow = styled(Row)`
    /* margin-bottom: 0.5rem; */
    padding: 0.2rem 0 0.2rem;
    background-color: var(--dark-background);
    color: var(--light-white);
  `;

  const BodyRow = styled(Row)`
    /* margin-bottom: 0.5rem; */
    padding: 0.5rem 0 0.5rem;
    background-color: #FFFFFF;
    border-bottom: 1px solid #A3E4D7;
    color: var(--dark-black);
  `;


const IndividualStore = (props) => {

  return (
    <div>
      <h1>Current Store Reviews</h1>
      <HeaderRow>
        <Col>Store Name</Col>
        <Col>Located</Col>
        <Col>Rating</Col>
        <Col>Website</Col>
      </HeaderRow>
      { props.stores.map(( store ) => (
        <BodyRow key={store._id}>
          <Col>
            <Link 
              to={`/bagels/stores/${store._id}`}
              details={store}
            >
              {store.storeName}
            </Link>
          </Col>
          <Col>{store.city}</Col>
          <Col>⭐️⭐️⭐️⭐️⭐️</Col>
          <Col><a href={store.website} target="_blank" rel="noreferrer">Visit {store.storeName}'s website.</a></Col>
        </BodyRow>
      ))}
    </div>
  )
}

export default IndividualStore;