import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
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
