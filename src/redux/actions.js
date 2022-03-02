import {COMMENT_CREATE, DECREMENT, INCREMENT, INPUT_TEXT} from "./types";

export const incrementLikes = () => {
    return {
        type: INCREMENT
    }
}

export const decrementLikes = () => {
    return {
        type: DECREMENT
    }
}

export const inputText = (text) => {
    return {
        type: INPUT_TEXT,
        text
    }
}

export const commentCreate = (text, id) => {
    return {
        type: COMMENT_CREATE,
        data: {
            text, id
        }

    }
}