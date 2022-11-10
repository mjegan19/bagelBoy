const gql = require('graphql-tag');

const storeType = gql`
  type StoreType {
    _id: ID
    storeName: String
    streetAddress: String
    city: String
    phone: String
    website: String
    signatureBagel: String
    description: String
    storePhoto: String
  }

  input StoreInput {
    id: ID
    storeName: String
    streetAddress: String
    city: String
    phone: String
    website: String
    signatureBagel: String
    description: String
    storePhoto: String
  }

  type Query {
    store(id: ID): StoreType
    stores: [StoreType]
  }

  type Mutation {
    addStore(input: StoreInput): StoreType
    editStore(input: StoreInput): StoreType
    deleteStore(id: ID): StoreType
  }
`;

module.exports = storeType;