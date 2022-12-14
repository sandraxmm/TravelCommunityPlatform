import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_COMMENT } from "../../utils/mutations";

import Auth from "../../utils/auth";

const CommentForm = ({postId}) => {
    const [commentText, setCommentText] = useState("");
    const [characterCount, setCharacterCount] = useState(0);

    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleFormSubmit = async(event) => {
        event.preventDefault();

        try {
            const { data } = await addComment({
                variables: {
                    postId,
                    commentText,
                    commentAuthor: Auth.getProfile().data.username,
                },
            });
            setCommentText("");
        } catch(err) {
            console.error(err);
        }
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'commentText' && value.length <= 280) {
            setCommentText(value);
            setCharacterCount(value.length);
        }
    };
    return (
        <div>
            <h4>Comment on this post...</h4>

            {Auth.loggedIn() ? (
                <>
                 <p className={`m-0 ${ characterCount === 280 || error ? 'text-danger' : ''}`}>
                    Character Count: {characterCount}/280
                    {error && <span className="ml-2">{error.message}</span>}
                </p>
                <form className='' onSubmit={handleFormSubmit}>
                    <div className=''>
                        <textarea 
                        name= "commentText"
                        placeholder="Add your comment..."
                        value={commentText}
                        className="form-input w-100"
                        style={{ lineHeight: '1.5', resize: 'vertical' }}
                        onChange={handleInputChange}
                        >
                        </textarea>
                    </div>

                    <div className="">
                        <button className="btn btn-primary btn-block py-3" type="submit">
                            Add Comment
                        </button>
                    </div>
                </form>
                </>
            ) : (
                <p>
                    You need to be logged in to share your comment. Please{' '}
                    <Link to="/">login</Link> or <Link to="/">signup.</Link>
                 </p>
            )}
        </div>
    );
};
export default CommentForm;