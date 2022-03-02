import React, {useEffect, useState} from 'react';
import SingleComment from "../SingleComment/SingleComment";
import {useDispatch, useSelector} from "react-redux";
import uniqid from "uniqid";
import {commentCreate, commentsLoad} from "../redux/actions";

const Comments = (props) => {

    const comments = useSelector(state => {
        const {commentsReducer} = state
        return commentsReducer.comments
    })
    const dispatch = useDispatch()
    const [textComment, setTextComment] = useState("")

    useEffect(() =>{
        dispatch(commentsLoad())
    },[])

    const handleInput = (event) => {
        setTextComment(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
    }

    return (

        <div className='card-comments'>
            <form onSubmit={handleSubmit} className='comments-item-create'>
                <input type='text' value={textComment} onChange={handleInput} placeholder="your comment here"/>
                <input type='submit' hidden />
            </form>
            {!!comments.length && comments.map(res => {
                return <SingleComment key={res.id} data={res}/>
            })}
        </div>
    );
};

export default Comments;