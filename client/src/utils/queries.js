import { gql } from "@apollo/client";

export const QUERY_THOUGHTS = gql`
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
