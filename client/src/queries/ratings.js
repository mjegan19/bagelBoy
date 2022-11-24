import { gql } from '@apollo/client';

export const ADD_RATING = gql`
mutation AddRating(
  $feedback: String,
  $rating: Int,
  $store: ID
  ){
  addRating(input: {
    feedback: $feedback,
		rating: $rating,
    store: $store
  }) {
    _id
    feedback
    rating
    store
    store_relate {
      storeName
      streetAddress
    }
  }
}
`;

export const GET_RATING_BY_ID = gql`
  query rating($id: ID) {
    rating(id: $id) {
      _id
      feedback
      rating
      store
      store_relate {
        _id
        storeName
      }
    }
  }
`;

export const EDIT_RATING = gql`
  mutation EditRating(
    $id: ID
    $feedback: String,
    $rating: Int,
    $store: ID
  ) {
    editRating(input: {
      _id: $id
      feedback: $feedback
      rating: $rating
      store: $store
    }) {
      _id
      feedback
      rating
      store
      store_relate {
        storeName
      }
    }
  }
`;

export const DELETE_RATING = gql`
mutation DeleteRating($id: ID){
  deleteRating(id: $id){
    _id
    feedback
    rating
    store
    store_relate{
      storeName
    }
  }
}
`;