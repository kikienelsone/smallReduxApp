import React, {useState} from 'react';
import SingleComment from "../SingleComment/SingleComment";

const Comments = (props) => {

    const [textComment, setTextComment] = useState("")

    const handleChange = (event) => {
        setTextComment(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(textComment)

    }
    
    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" value={textComment} onChange={handleChange}/>
                <input type="submit" hidden/>
            </form>
            <SingleComment/>
        </div>
    );
};

export default Comments;