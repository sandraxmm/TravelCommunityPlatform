const { gql } = require("apollo-server-express");

// ！means that the field is non-nullable.
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Post {
    postId: String!
    user: [String]
    description: String
    location: String
    image: String
    likeCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  input PostInput {
    PostId: String!
    user: String
    description: String
    image: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePost(input: PostInput): User
    removePost(PostId: String!): User
  }
`;

module.exports = typeDefs;
