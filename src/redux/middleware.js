import {COMMENT_CREATE} from "./types";
import {errorOn} from "./actions";

const badWords = ["fuck"]

export const spamFilter = ({dispatch}) => {
    return function (next) {
        return function (action) {
            if (action.type === COMMENT_CREATE) {
                console.log(action.data.text)
                const isBadWords = badWords.some(bad => action.data.text.includes(bad))
                if(isBadWords){
                    return dispatch(errorOn("NO"))
                }
            }
            return (next.action)
        }
    }
}