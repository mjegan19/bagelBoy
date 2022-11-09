import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Joi from 'joi';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';

import AuthCard from '../../components/common/AuthCard';

// Queries
import { ADD_STORE } from '../../queries/stores';

const AddStore = () => {


  const navigate = useNavigate();

  // State
  const [storeData, setStoreData] = useState({
    storeName: "",
    address: "",
    phone: "",
    website: "",
    signatureBagel: "",
    storePhoto: "",
  });
  
  const { storeName, address, phone, website, signatureBagel, storePhoto } = storeData;
  
  const [addStore, { data, loading, error }] = useMutation(ADD_STORE);
  
  const [errors, setErrors] = useState("");

  // Joi Validation
  const schema = Joi.object({
    storeName: Joi.string().min(2).max(150).required(),
    address: Joi.string().min(2).max(250).required(),
    phone: Joi.string().min(2).max(10).required(),
    website: Joi.string().min(2).max(250).required(),
    signatureBagel: Joi.string().min(2).max(100).required(),
    storePhoto: Joi.string().min(2).max(1000).required(),
  });

  const handleFormFieldUpdate = (e) => {
    const { name, value } = e.target;
    setStoreData({
      ...storeData,
      [name]: value
    });
  }

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

  const handleSubmit = async (e) => {
    if (validateStoreFormData(schema, { 
      storeName: storeName,
      address: address,
      phone: phone,
      website: website,
      signatureBagel: signatureBagel,
      storePhoto: storePhoto
    })) {
      return;
    }

    try {
      e.preventDefault();
      const result = await addStore({
        variables: {
          storeName: storeName,
          address: address,
          phone: phone,
          website: website,
          signatureBagel: signatureBagel,
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

      <Form.Group className="mb-3" controlId="formStoreAddress">
        <Form.Label>Store Address</Form.Label>
        <Form.Control
        type="input" 
        placeholder="Enter bagel store's address"
        name="address"
        value={address}
        onChange={handleFormFieldUpdate}
      />
        {errors.address &&
          <Alert color={"danger"}>{errors.address}</Alert>  
        }
      </Form.Group>
      
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </AuthCard>
  )
}

export default AddStore;