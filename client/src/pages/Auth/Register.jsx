import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Joi from 'joi';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';

import AuthCard from '../../components/common/AuthCard';

import { ADD_USER } from '../../queries/users';

const Register = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    username: "",
    password: "",
  });

  const { firstName, lastName, emailAddress, username, password } = userData;

  const [addUser, { data, loading, error }] = useMutation(ADD_USER);
  
  const [errors, setErrors] = useState("");

  const handleFormFieldUpdate = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }
  
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await addUser({
        variables: {
          firstName: firstName,
          lastName: lastName,
          emailAddress: emailAddress,
          username: username,
          password: password,
        }
      });
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error?.response);
      window.scroll({top: 0, behavior: 'smooth'});
    }
  }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <AuthCard header="Create Account">
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="input" 
            placeholder="Enter first name"
            name="firstName"
            value={firstName}
            onChange={handleFormFieldUpdate}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="input" 
            placeholder="Enter last name"
            name="lastName"
            value={lastName}
            onChange={handleFormFieldUpdate}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email" 
            placeholder="Enter email"
            name="emailAddress"
            value={emailAddress}
            onChange={handleFormFieldUpdate} 
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="input" 
            placeholder="Create username"
            name="username"
            value={username}
            onChange={handleFormFieldUpdate} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            name="password"
            value={password}
            onChange={handleFormFieldUpdate}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </AuthCard>
  )
}

export default Register;