import {
    
    FETCH_DEVELOPERS_LIST, 
    FETCH_PUBLISHERS_LIST, 
    FETCH_GENRES_LIST, 
    FETCH_TAGS_LIST

} from '../actions/action_variables'

const initState = {
    developers: [],
    tags: [],
    genres: [],
    publishers: [],
}

export const MoreDataReducer = (state=initState, action) => {
    switch(action.type) {
        case FETCH_DEVELOPERS_LIST:
            return { ...state, developers: action.payload.developers }
            case FETCH_PUBLISHERS_LIST:
            return { ...state, publishers: action.payload.publishers }
            case FETCH_GENRES_LIST:
            return { ...state, genres: action.payload.genres }
            case FETCH_TAGS_LIST:
            return { ...state, tags: action.payload.tags }

            default:
                return {...state}
    }
}

