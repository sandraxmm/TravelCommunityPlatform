import React from 'react';
import PostList from '../../components/PostList/index'
import PostForm from '../../components/PostForm/index'

import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';


const Timeline = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main>
      <div className="container">
        <div className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <PostForm />
        </div>
        <div className="col-12 col-md-10 mb-3 p-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
              showLocation
              />
          )}
        </div>
      </div>
    </main>
  );
};

export default Timeline;