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