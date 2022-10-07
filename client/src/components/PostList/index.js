import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({
    posts,
    postlocation,
    showLocation = true,
    showUsername = true,
}) => {
    if (!posts.length) {
        return <h3>No Posts Yet</h3>;
    }
    return (
        <div>
            {showLocation && <h3>{postlocation}</h3>}
            {posts &&
                posts.map((post) => (
                <div key={post._id} className=''>
                    <h4 className=''>
                        {showUsername ? (
                            <Link className='' to={`/profiles/${post.postAuthor}`}>
                                {post.postAuthor} <br />
                                <span style={{fontSize: '1rem' }}>
                                    posted this on {post.createdAt}
                                </span>
                            </Link>
                        ) : (
                            <>
                                <span style={{ fontSize: '1rem' }}>
                                    You posted this on {post.createdAt}
                                </span>
                            </>
                        )}
                    </h4>
                    <div className=''>
                        <p>{post.postText}</p>
                    </div>
                    <Link className='' to={`/posts/${post._id}`}></Link>
                </div>    
            ))}
        </div>
    );
};

export default PostList;