import { gql } from "@apollo/client";

export const ADD_RATING = gql`
  mutation AddUser(
    $firstName: String, 
    $lastName: String, 
    $emailAddress: String, 
    $username: String, 
    $password: String
  ) {
    addUser(input: { 
      firstName: $firstName, 
      lastName: $lastName, 
      emailAddress: $emailAddress, 
      username: $username, 
      password: $password
  }) {
      _id
      firstName
      lastName
      emailAddress
      username
      password
    }
  }
`;