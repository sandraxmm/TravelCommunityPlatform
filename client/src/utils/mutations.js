import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_POST = gql`
  mutation savePost($input: PostInput) {
    savePost(input: $input) {
      _id
      username
      savedPosts{
        postId
        user
        description
        location
        image
        likeCount
  }
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($input: PostInput) {
    removedPost (input: $input) {
      _id
      username
      savedPosts {
        postId
        user
        description
        location
        image
        likeCount
      }
    }
  }
`;