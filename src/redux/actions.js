import {
    COMMENT_CREATE,
    COMMENT_DELETE,
    COMMENT_UPDATE,
    COMMENTS_LOAD,
    DECREMENT,
    INCREMENT,
    INPUT_TEXT,
    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF
} from "./types";

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

export const commentUpdate = (text, id) => {
    return {
        type: COMMENT_UPDATE,
        data: {
            text, id
        }

    }
}
export const commentDelete = (id) => {
    return {
        type: COMMENT_DELETE,
        id
    }
}

export const loaderOn = () => {
    return {
        type: LOADER_DISPLAY_ON
    }
}

export const loaderOff = () => {
    return {
        type: LOADER_DISPLAY_OFF
    }
}


export const errorOn = (text) => {
    return dispatch => {
        dispatch({
            type: ERROR_DISPLAY_ON,
            text
        })
        setTimeout(() =>{
            dispatch(errorOFF())
        },2000)
    }


}

export const errorOFF = () => {
    return {
        type: ERROR_DISPLAY_OFF

    }
}

export const commentsLoad = () => {

    return async dispatch => {
        try {
            dispatch(loaderOn())
            const response = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
            const jsonData = await response.json()
            dispatch({
                type: COMMENTS_LOAD,
                data: jsonData
            })
            dispatch(loaderOff())
        }

catch (e){
dispatch(errorOn("exception API"))
}
    }
}