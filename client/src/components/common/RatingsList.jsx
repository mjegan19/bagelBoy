// The purpose of this component is to query the database for reviews related to the selected store,
// return and render the results onto the screen.

// Import Core Modules
import React, { useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

// Import Styled Components.
import styled from 'styled-components';

// Import Bootstrap Component
import Button from 'react-bootstrap/Button'

// Import Query Strings
import { GET_STORE_RATINGS_BY_ID } from '../../queries/stores';
import { DELETE_RATING } from '../../queries/ratings';


// Using Styled Components - overwrite default styling of elements within component.
const RatingsBody = styled.div`
  h3 {
    color: var(--dark-background);
  }

.eachRating {
    display: grid;
    grid-template-columns: 0.5fr 4fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #A3E4D7;
    
    div {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    div:nth-child(3) {
      justify-self: end;
    }
  }
`;


const RatingsList = ({ id, storeName }) => {  // Load in props needed for query
  const navigate = useNavigate();  // Assign variable to navigate hook
  
  // Send query to server, fetch data and load into deconstructed variables
  const { loading, error, data, refetch } = useQuery(GET_STORE_RATINGS_BY_ID, {
    variables:
    {id: `${id}`}
  });

  // Load Query into variable to link to on click action
  const [deleteRating] = useMutation(DELETE_RATING);

  // Listener event to reload data should it change
  useEffect(() => {
    refetch();
  }, [])

  // onClick function to perform deletion of rating document.
  // prepares a variable of id to load into the gql query
  const handleDelete = async (e) => {
    try {
      const result = await deleteRating({
        variables: {
          id: e,
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
 
  // Set load & error handling for query
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <RatingsBody>
        {/* Map over ratings results, dynamically generate output for each result in array */}
        {data.store.ratings.map((rating) => (
          <div className="eachRating" key={rating._id}>
            <div>Rating: {rating.rating} / 5</div>
            <div>{rating.feedback}</div>
            <div>
              <Button 
                type="button" 
                className="btn btn-sm btn-info me-1" 
                onClick={() => {navigate(`/reviews/edit/${rating._id}`)}}
              >
                Edit Review
              </Button>
              <Button 
                type="button" 
                className="btn btn-sm btn-danger ms-1" 
                onClick={()=>{handleDelete(rating._id)}}
              >
                Delete Review
              </Button>
            </div>
          </div>
        ))
      }

      {/* Error handler in event of data returning no results. */}
      {!data.store && 
        <div>
          <p>No ratings for {storeName} have currently been submitted.</p>
          <p>Click the "Add a Review" button above to leave one.</p>
        </div>
      }



    </RatingsBody>
  )
}

export default RatingsList;