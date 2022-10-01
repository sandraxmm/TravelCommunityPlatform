import React from 'react';

const PostList = ({
    posts,
    postlocation,
    showLocation = true,
    showUsername = true,
}) => {
    if (!posts.lengh) {
        return <h3>No Posts Yet</h3>;
    }
    return (
        <div>
            {showLocation && <h3>{postlocation}</h3>}
            {posts &&
            posts.map((post) => (
                <div key={thought._id} className=''>
                    
            ))}
        </div>

    )
}