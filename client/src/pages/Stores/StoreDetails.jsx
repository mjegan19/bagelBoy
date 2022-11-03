import React from 'react';
import { useQuery } from '@apollo/client';
import { Card, Button } from 'react-bootstrap'

import { GET_STORES } from '../../queries/stores';

const StoreDetails = () => {

  const { loading, error, data } = useQuery(GET_STORES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <div>
      {data.stores.map((store) => (
      <Card style={{ width: '18rem' }} key={store.id}>
        <Card.Img variant="top" src={store.storePhoto} />
        <Card.Body>
          <Card.Title>{store.storeName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{store.address}</Card.Subtitle>
          <Card.Text>
            {store.storeName}'s signature bagel is the {store.signatureBagel}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">{store.phone}</Card.Subtitle>
          <Card.Footer>
          <small className="text-muted"><a href={store.website} target="_blank" rel="noreferrer">Vist {store.storeName}'s website</a></small>
        </Card.Footer>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      ))}
    </div>
  )
}

export default StoreDetails;