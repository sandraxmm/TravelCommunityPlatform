import React, { useState } from 'react';

import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';



const PostForm = () => {
    const [postText, setPostText] = useState('');
    const [postLocation, setPostLocation] = useState('');
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

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(!previewSource) return;
        uploadImage(previewSource);
    };

    const uploadImage = async (base64EncodedImage) => {
        console.log(base64EncodedImage);
        try {
            await fetch ('/api/upload', {
                method: 'POST',
                body: JSON.stringify({data: base64EncodedImage}),
                headers: {'Content-type': 'application/json'}
            })
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'postText' && value.length <= 300) {
            setPostText(value);
            setCharacterCount(value.length);
        } else if (name === 'postLocation' && value.length <= 50) {
            setPostLocation(value);
            setCharacterCount(value.length);
        }
    };


const [fileInputState, setFileInputState] = useState('');
const [previewSource, setPreviewSource ] = useState('');
const [selectedFile, setSelectedFile] = useState('');
    
const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
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
                    <input name='image' 
                    type='file' onChange={handleFileInputChange} value={fileInputState} className='form-input'
                    />
                    <button type='submit'> Upload </button>
                </div>
            </form>

            {previewSource && (
                <img src={previewSource} alt='chosen'
                style={{height: '300px' }}
                />
            )}

            {/* <Image style={{width:200}} cloudName='dk8rcb4sl' publicId='https://res.cloudinary.com/dk8rcb4sl/image/upload/v1665115588/bwv886mltk9hxfdy6v4m.webp'/> */}
        </div>
    );
};

export default PostForm;