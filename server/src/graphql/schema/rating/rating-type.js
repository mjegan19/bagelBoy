const gql = require('graphql-tag');

const ratingType = gql`
  type RatingType {
    _id: ID
    feedback: String
    rating: Int
    store: ID
    store_relate: StoreType
  }

  input RatingInput {
    _id: ID
    feedback: String
    rating: Int
    store: ID
  }

  type Query {
    rating(id: ID): RatingType
    ratings: [RatingType]
  }

  type Mutation {
    addRating(input: RatingInput): RatingType
    editRating(input: RatingInput): RatingType
    deleteRating(id: ID): RatingType
  }
`;

module.exports = ratingType;