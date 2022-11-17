import React from 'react'
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import { GET_STORE_RATINGS_BY_ID } from '../../queries/stores';


const RatingRow = styled(Row)`
padding: 0.5rem 0 0.5rem;
background-color: #FFFFFF;
border-bottom: 1px solid #A3E4D7;
color: var(--dark-black);
`;

const RatingsList = ({id}) => {
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_STORE_RATINGS_BY_ID, {
    variables:
    {id: `${id}`}
  });

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      { data.store.ratings.map(( rating ) => (
        <RatingRow key={rating._id}>
          <Col>{rating.rating} / 5</Col>
          <Col>
            <p>{rating.feedback}</p>
            <p>Submitted by: Username</p>
          </Col>
          <Col>
            <Button 
              type="button" 
              className="btn btn-sm btn-info me-1" 
              onClick={() => {navigate(`/reviews/edit/${rating._id}`)}}
            >
              Edit
            </Button>
            <Button 
              type="button" 
              className="btn btn-sm btn-danger ms-1" 
              onClick={() => {navigate(`/reviews/${rating._id}`)}}
            >
              Delete
            </Button>
          </Col>
        </RatingRow>
      ))}
    </div>
  )
}

export default RatingsList;