const gql = require('graphql-tag')//gql A JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL 
//graphql-tag - Lets us separate our TypeDefs instead of having one giant file
//https://www.npmjs.com/package/graphql-tag
const userType = gql`
  type UserType{
    _id:ID
    firstName:String
    lastName:String
    emailAddress:String
    username:String
    password:String
  }
  input UserInput {
    id:ID
    firstName:String
    lastName:String
    emailAddress:String
    username:String
    password:String
  }
  type Query {
    user(id:ID):UserType
    users:[UserType]
  }
  type Mutation{
      addUser(input:UserInput):UserType
      editUser(input:UserInput):UserType
      deleteUser(id:ID):UserType
    }
    `;
    
    module.exports = userType;