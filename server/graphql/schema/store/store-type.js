const gql = require('graphql-tag');

const storeType = gql`
  type StoreType {
    _id: ID
    storeName: String
    address: String
    phone: String
    website: String
    signatureBagel: String
    storePhoto: String
  }

  input StoreInput {
    id: ID
    storeName: String
    address: String
    phone: String
    website: String
    signatureBagel: String
    storePhoto: String
  }

  type Mutation {
    addStore(input: StoreInput): StoreType
    editStore(input: StoreInput): StoreType
    deleteStore(id: ID): StoreType
  }
`;

module.exports = storeType;