import React, { useState } from 'react';

import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

//import Auth from '../../utils/auth';

const PostForm = () => {
    const [postText, setPostText] = useState('');
    const [postLocation, setPostLocation] = useState ('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            try {
                const { posts } = cache.readQueary({ query: QUERY_POSTS });
                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [addPost, ...posts] },
                });
            } catch (err) {
                console.error(err);
            }
            const { me } = catche.readQueary({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, posts: [...me.posts, addPost] } },
            });
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addPost({
                variables: {
                    postText,
                    postAuthor: Auth.getProfile().data.username,
                    postLocation,
                },
            });
            setPostText('');
            setPostLocation('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'postText' && value.length <= 280) {
            setPostText(value);
            setCharacterCount(value.length);
        }
    };

    return (
        <div className={`${characterCount === 300 || error ? 'text-danger' : ''}`}>
            <form className='' onSubmit={handleFormSubmit}>
                <div className=''>
                    <textarea
                        name='postText'
                        placeholder='Create a new post'
                        value={postText}
                        className=''
                        style={{ lineHeight: '1.5', resize: 'vertical' }}
                        onChange={handleChange}
                        characterCount='300'
                    ></textarea>
                </div>
                <div className=''>
                    <textarea
                        name='postLocation'
                        placeholder='Add location'
                        value={postLocation}
                        className=''
                        style={{ lineHeight: '1.5', resize: 'vertical' }}
                        onChange={handleChange}
                        characterCount='50'
                    ></textarea>
                </div>
                <div className=''>
                    <button className='' type='submit'>
                        Post
                    </button>

                </div>

            </form>
        </div>
    );
};

export default PostForm;