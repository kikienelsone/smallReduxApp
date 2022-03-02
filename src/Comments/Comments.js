import React from 'react';
import SingleComment from "../SingleComment/SingleComment";

const Comments = (props) => {
    return (
        <div className="card-comments">
            <form className="comments-item-create">
                <input type="text"/>
                <input type="submit" hidden/>
            </form>
            <SingleComment/>
        </div>
    );
};

export default Comments;