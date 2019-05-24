import { ADD_ARTICLE } from "../constant/action-type";

const initialState = {
    articles: [],
    remoteArticles: []
}

function rootReducer(state = initialState, action) {
    /* if (action.type === ADD_ARTICLE) {
        return [...state].articles.push(action.payload);
      }
      return state; */
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type === "DATA_LOADED") {
        console.log("Loaded--->")
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }
    return state;
}


export default rootReducer;