// Import Core Modules
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// Import Validation Library
import Joi from 'joi';

// Import Bootstrap Components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';

// Import custom component
import AuthCard from '../../components/common/AuthCard';

// Queries
import { ADD_STORE } from '../../queries/stores';

const AddStore = () => {

  // Load navigate hook into variable to allow internal routing
  const navigate = useNavigate();

  // Create state to hold store data and specify variables initial value.
  const [storeData, setStoreData] = useState({
    storeName: "",
    streetAddress: "",
    city: "",
    phone: "",
    website: "",
    signatureBagel: "",
    description: "",
    storePhoto: "",
  });
  
  // Deconstruct store data variables
  const { storeName, streetAddress, city, phone, website, signatureBagel, description, storePhoto } = storeData;
  
  // Load mutation into variable to prepare data for transmission to server
  const [addStore, { data, loading, error }] = useMutation(ADD_STORE);
  
  // Declare error variables and define initial state
  const [errors, setErrors] = useState("");

  // Joi Validation
  const schema = Joi.object({
    storeName: Joi.string().min(2).max(150).required(),
    streetAddress: Joi.string().min(2).max(250).required(),
    city: Joi.string().min(2).max(100).required(),
    phone: Joi.string().min(2).max(10).required(),
    website: Joi.string().min(2).max(250).required(),
    signatureBagel: Joi.string().min(2).max(100).required(),
    description: Joi.string().min(2).max(5000).required(),
    storePhoto: Joi.string().min(2).max(1000).required(),
  });

  // onClick event to update form input to correct storeData variable.
  const handleFormFieldUpdate = (e) => {
    const { name, value } = e.target;
    setStoreData({
      ...storeData,
      [name]: value
    });
  }

  // Function to validate form data against Joi validation before transmitting to server.  Return error response if validation fails.
  function validateStoreFormData(schema, data) {
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

  // onclick form submit handler.  Query validate function, if successful, run add query to push data to the server.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStoreFormData(schema, { 
      storeName: storeName,
      streetAddress: streetAddress,
      city: city,
      phone: phone,
      website: website,
      signatureBagel: signatureBagel,
      description: description,
      storePhoto: storePhoto
    })) {
      return;
    }
    
    try {
      
      const result = await addStore({
        variables: {
          storeName: storeName,
          streetAddress: streetAddress,
          city: city,
          phone: phone,
          website: website,
          signatureBagel: signatureBagel,
          description: description,
          storePhoto: storePhoto
        }
      });
      console.log(result);
      navigate("/bagels/stores");
    } catch (error) {
      console.log(error?.response);
      window.scroll({top: 0, behavior: 'smooth'});
    }
  }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <AuthCard header="Add a Bagel Store">
    <Form onSubmit={handleSubmit}>

      {/* Store Name Input */}
      <Form.Group className="mb-3" controlId="formStoreName">
        <Form.Label>Store Name</Form.Label>
        <Form.Control
          type="input"
          placeholder="Enter store name"
          name="storeName"
          value={storeName}
          onChange={handleFormFieldUpdate}
        />
        {errors.storeName &&
            <Alert color={"danger"}>{errors.storeName}</Alert>  
        }
      </Form.Group>

      {/* Store Address Input */}
      <Form.Group className="mb-3" controlId="formStoreAddress">
        <Form.Label>Enter store's street address</Form.Label>
        <Form.Control
        type="input" 
        placeholder="eg. 123 Fake Street"
        name="streetAddress"
        value={streetAddress}
        onChange={handleFormFieldUpdate}
      />
        {errors.streetAddress &&
          <Alert color={"danger"}>{errors.streetAddress}</Alert>  
        }
      </Form.Group>

      {/* Store City Input */}
      <Form.Group className="mb-3" controlId="formStoreAddress">
        <Form.Label>In which city is the store located?</Form.Label>
        <Form.Control
        type="input" 
        placeholder="eg. Melbourne"
        name="city"
        value={city}
        onChange={handleFormFieldUpdate}
      />
        {errors.city &&
          <Alert color={"danger"}>{errors.city}</Alert>  
        }
      </Form.Group>
      
      {/* Store Phone Number Input */}
      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control 
          type="input" 
          placeholder="Enter store's phone number"
          name="phone"
          value={phone}
          onChange={handleFormFieldUpdate}
        />
        {errors.phone &&
          <Alert color={"danger"}>{errors.phone}</Alert>  
        }
      </Form.Group>

      {/* Store Website Address Input */}
      <Form.Group className="mb-3" controlId="formWebAddress">
        <Form.Label>Website Address</Form.Label>
        <Form.Control 
          type="input" 
          placeholder="Enter store's website address"
          name="website"
          value={website}
          onChange={handleFormFieldUpdate}
        />
        {errors.website &&
          <Alert color={"danger"}>{errors.website}</Alert>  
        }
      </Form.Group>

      {/* Store Bagel Question Input */}
      <Form.Group className="mb-3" controlId="formSignatureBagel">
        <Form.Label>What is the store's signature bagel?</Form.Label>
        <Form.Control 
          type="input" 
          placeholder="eg. Smoked Salmon & Cream Cheese"
          name="signatureBagel"
          value={signatureBagel}
          onChange={handleFormFieldUpdate}
          />
        {errors.signatureBagel &&
          <Alert color={"danger"}>{errors.signatureBagel}</Alert>  
        }
      </Form.Group>

      {/* Store Description Input */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Store Description</Form.Label>
        <Form.Control 
          as="textarea"
          rows={3} 
          name="description"
          value={description}
          onChange={handleFormFieldUpdate}
          />
          {errors.description &&
            <Alert color={"danger"}>{errors.description}</Alert>  
          }
      </Form.Group>

      {/* Store Photo Link Input */}
      <Form.Group className="mb-3" controlId="formStorePhoto">
        <Form.Label>Add a store photo...</Form.Label>
        <Form.Control 
          type="input" 
          placeholder="eg. http://www.bagelboy.com/bagel2.jpg"
          name="storePhoto"
          value={storePhoto}
          onChange={handleFormFieldUpdate}  
        />
        {errors.storePhoto &&
          <Alert color={"danger"}>{errors.storePhoto}</Alert>  
        }
      </Form.Group>

      {/* Form Submit Button */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </AuthCard>
  )
}

export default AddStore;