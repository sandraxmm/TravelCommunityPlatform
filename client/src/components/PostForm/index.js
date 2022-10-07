import React, { useState } from 'react';

import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';
import Axios from 'axios';

import {Image} from 'cloudinary-react';


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
            const { me } = cache.readQueary({ query: QUERY_ME });
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
        if (name === 'postText' && value.length <= 300) {
            setPostText(value);
            setCharacterCount(value.length);
        }
    };

const [imageSelected, setImageSelected] = useState();

    const uploadImage = () => {
        const formData= new FormData()
        formData.append('file', imageSelected)
        formData.append('upload_preset', 'b5saqj0f')

        Axios.post('https://api.cloudinary.com/v1_1/dk8rcb4sl/image/upload', formData)
        .then((response) => {
            console.log(response);
        });
    };


    return (
        <div className={`${characterCount === 300 || error ? 'text-danger' : ''}`}>
            <form className='flex-row justify-center justify-space-between-md align-center' 
                    onSubmit={handleFormSubmit}>
                <div className=''>
                    <textarea
                        name='postText'
                        placeholder='Create a new post'
                        value={postText}
                        className=''
                        style={{ lineHeight: '1.5', resize: 'vertical' }}
                        onChange={handleChange}
                        charactercount='300'
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
                        charactercount='50'
                    ></textarea>
                </div>
                <div className=''>
                    <button className='btn btn-info' type='submit'>
                        Post
                    </button>
                    <input className='upload' 
                    type='file'
                    onChange={(event) => {
                        setImageSelected(event.target.files[0]);
                    }}
                    />
                    <button onClick={uploadImage}> Upload </button>
                </div>
            </form>

            <Image style={{width:200}} cloudName='dk8rcb4sl' publicId='https://res.cloudinary.com/dk8rcb4sl/image/upload/v1665115588/bwv886mltk9hxfdy6v4m.webp'/>
        </div>
    );
};

export default PostForm;