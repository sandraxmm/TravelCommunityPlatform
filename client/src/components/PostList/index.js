import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';

const PostList = ({
    posts,
    postLocation,
    showLocation = true,
    showUsername = true,
}) => {
    const [imageIds, setImageIds] = useState();

    const loadImages = async () => {
        try{
            const res = await fetch('/api/images');
            const data = await res.json();
            console.log(data);
            setImageIds(data);
        }catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        loadImages();
    }, [])
    if (!posts.length) {
        return <h3>No Posts Yet</h3>;
    }  
    return (
      <div>
        {showLocation && <h3>{postLocation}</h3>}
        {posts &&
          posts.map((post) => (
            <div key={post._id} className="card mb-3">
              <h4 className="card-header bg-primary text-light p-2 m-0">
                {showUsername ? (
                  <Link
                    className="text-light"
                    to={`/profiles/${post.postAuthor}`}
                  >
                    {post.postAuthor} <br />
                    <span style={{ fontSize: "1rem" }}>
                      posted this on {post.createdAt}
                    </span>
                  </Link>
                ) : (
                  <>
                    <span style={{ fontSize: "1rem" }}>
                      You posted this on {post.createdAt}
                    </span>
                  </>
                )}
              </h4>
              {imageIds &&
                imageIds.map((imageId, index) => (
                  <Image
                    key={index}
                    cloudName="dk8rcb4sl"
                    publicId={imageId}
                    width="300"
                    crop="scale"
                  />
                ))}
              <div className="card-body bg-light p-2">
                <p>{post.postText}</p>
              </div>
              <Link
                className="btn btn-primary btn-block btn-squared"
                to={`/posts/${post._id}`}
              >Join the discussion...</Link>
            </div>
          ))}
      </div>
    );
};

export default PostList;