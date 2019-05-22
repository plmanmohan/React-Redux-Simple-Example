import { ADD_ARTICLE } from "../constant/action-type";

const forbiddenWord = ["spam", "money"];

export function forbiddenMiddleware( { dispatch }) {
    return function(next) {
        return function (action) {
            if (action.type === ADD_ARTICLE) {
                const foundWord = forbiddenWord.filter(word => 
                    action.payload.title.includes(word)
                );
                if (foundWord.length) {
                    return dispatch( { type: "FOUND_BAD_WORD"});
                }
            }
            return next(action);
        }
    }
}