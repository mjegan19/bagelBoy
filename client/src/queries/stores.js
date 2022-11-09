import { gql } from '@apollo/client';

export const GET_STORES = gql`
  query {
    stores {
      _id
      storeName
      address
      phone
      website
      signatureBagel
      storePhoto
    }
  }
`;

export const ADD_STORE = gql`
  mutation AddStore(
    $storeName: String,
    $address: String,
    $phone: String,
    $website: String,
    $signatureBagel: String,
    $storePhoto: String
    ) {
      addStore(input: {
        storeName: $storeName,
        address: $address,
        phone: $phone,
        website: $website,
        signatureBagel: $signatureBagel,
        storePhoto: $storePhoto        
    }) {
      _id
      storeName,
      address,
      phone,
      website,
      signatureBagel,
      storePhoto
    }
  }
`;