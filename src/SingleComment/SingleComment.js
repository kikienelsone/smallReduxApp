import React, {useEffect, useState} from 'react';
import {commentDelete, commentUpdate} from "../redux/actions";
import {useDispatch} from "react-redux";

const SingleComment = ({data}) => {
    const [commentText, setCommentText] = useState("")
    const {text, id} = data
    const dispatch = useDispatch()

    useEffect(() => {
        if (text) {
            setCommentText(text)
        }
    }, [text])

    const handleInput = (event) => {
        setCommentText(event.target.value)
    }

    const handleUpdate = (event) => {
        event.preventDefault()
        dispatch(commentUpdate(commentText, id))
    }
    
    const handleDelete = (event) => {
        dispatch(commentDelete(id))
      event.preventDefault()
    }

    return (
        <form onSubmit={handleUpdate} className="comments-item">
            <div onClick={handleDelete} className="comments-item-delete">&times;</div>
            <input type="text" value={commentText} onChange={handleInput}/>
            <input type="submit" hidden/>
        </form>
    );
};

export default SingleComment;