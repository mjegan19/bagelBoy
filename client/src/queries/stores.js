import { gql } from '@apollo/client';

export const GET_STORES = gql`
  query {
    stores {
      _id
      storeName
      streetAddress
      city
      phone
      website
      signatureBagel
      description
      storePhoto
    }
  }
`;

export const GET_STORE_BY_ID = gql`
  query store($id: ID) {
    store(id: $id) {
      _id
      storeName
      streetAddress
      city
      phone
      website
      signatureBagel
      description
      storePhoto
    }
  }
`;

export const ADD_STORE = gql`
  mutation AddStore(
    $storeName: String,
    $streetAddress: String,
    $city: String,
    $phone: String,
    $website: String,
    $signatureBagel: String,
    $description: String,
    $storePhoto: String
    ) {
      addStore(input: {
        storeName: $storeName,
        streetAddress: $streetAddress,
        city: $city,
        phone: $phone,
        website: $website,
        signatureBagel: $signatureBagel,
        description: $description,
        storePhoto: $storePhoto        
    }) {
      _id
      storeName,
      streetAddress,
      city,
      phone,
      website,
      signatureBagel,
      description,
      storePhoto
    }
  }
`;