import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import Joi from 'joi';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';

import AuthCard from '../../components/common/AuthCard';

// Queries
import { EDIT_RATING } from '../../queries/ratings';
import { GET_RATING_BY_ID } from '../../queries/ratings';


const EditRating = () => {

  const navigate = useNavigate();

  const params = useParams();

  
  // State
  const { 
    data: currentRatingData, 
    loading: currentRatingLoading, 
    error: currentRatingError
  } = useQuery(GET_RATING_BY_ID, {
    variables: { id: params.id }
  });
  
  const [newRatingData, setNewRatingData] = useState({
    feedback: "",
    rating: 0,
  });
  
  const { feedback, rating } = newRatingData;
  
  const [editRating] = useMutation(EDIT_RATING);
  
  const [errors, setErrors] = useState("");

  // Joi Validation
  const schema = Joi.object({
    feedback: Joi.string().min(2).max(5000).required(),
    rating: Joi.number().required(),
  });

  const handleFormFieldUpdate = (e) => {
    const { name, value } = e.target;
    setNewRatingData({
      ...newRatingData,
      [name]: value
    });
    console.log(newRatingData.feedback)
  }

  function validateRatingFormData(schema, data) {
    setErrors(null);
    const result = schema.validate(data, { abortEarly: false });
    console.log(result);
    const { error } = result;
    if (!error) {
      return null;
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      setErrors(errorData);
      console.log(errors);
      return errorData;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateRatingFormData(schema, { 
      feedback: feedback,
      rating: rating,
    })) {
      return;
    }
    
    try {
      
      const result = await editRating({
        variables: {
          id: params.id,
          feedback: feedback,
          rating: Number(rating),
          store: currentRatingData.rating.store_relate._id
        }
      });
      console.log(typeof(params.id) + ": " + params.id);
      console.log(typeof(feedback) + ": " + feedback);
      console.log(typeof(rating) + ": " + rating);
      console.log(result);
      navigate(`/bagels/stores/${currentRatingData.rating.store_relate._id}`);
    } catch (error) {
      console.log(error);
      window.scroll({top: 0, behavior: 'smooth'});
    }
  }

  if (currentRatingLoading) return 'Submitting...';
  
  
  if (currentRatingError) {
    return (
      <Alert variant="danger" dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }

  return (
    <AuthCard header="Edit review for " storeName={`${currentRatingData.rating.store_relate.storeName}`}>
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Store Review</Form.Label>
        <Form.Control 
          as="textarea"
          rows={3} 
          name="feedback"
          value={feedback}
          onChange={handleFormFieldUpdate}
          />
          {/* {errors.feedback &&
            <Alert color={"danger"}>{errors.feedback}</Alert>  
          } */}
      </Form.Group>

      <Form.Group>
        <Form.Label>Add your rating [ 1 = Poor ... 5 = Outstanding ]</Form.Label>
        <div className="mb-3">
          <Form.Check
            inline
            label="1"
            value="1"
            name="rating"
            type="radio"
            id="1"
            onChange={handleFormFieldUpdate}
          />
          <Form.Check
            inline
            label="2"
            value="2"
            name="rating"
            type="radio"
            id="2"
            onChange={handleFormFieldUpdate}
          />
          <Form.Check
            inline
            label="3"
            value="3"
            name="rating"
            type="radio"
            id="3"
            onChange={handleFormFieldUpdate}
          />
          <Form.Check
            inline
            label="4"
            value="4"
            name="rating"
            type="radio"
            id="4"
            onChange={handleFormFieldUpdate}
          />
          <Form.Check
            inline
            label="5"
            value="5"
            name="rating"
            type="radio"
            id="5"
            onChange={handleFormFieldUpdate}
          />
        </div>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </AuthCard>
  )
}

export default EditRating;