
import {
    FETCH_INITIAL_GAMES,
    FETCH_GAME_DETAILS,
    FETCH_INITIAL_CREATORS,
    FETCH_CREATOR_DETAILS,
    FETCH_FILTERED_LIST,
    FETCH_NEXT_PREVIOUS_PAGE,
    EMPTY_FILTERED_LIST,
    LOADING,
    LOADING_DETAILS
} from '../actions/action_variables'


const initState = {
    
    // details: {},
    // devteam: {},
    // screenshots: {},
    // samegameserie: {},
    // gametrailers: []

    loading: true,
    loadingDetails: true,

     game: {
     details: {},
    devteam: {},
    screenshots: {},
    samegameserie: {},
    gametrailers: [],
    filtered: {next: "", previous: "",  result: [] },
    newgames: { next: "", previous: "", result: [] },
     popular: { next: "", previous: "", result: [] },
     upcoming: { next: "", previous: "", result: [] },
   },

    creators: {
        results: {
            result: [],
        next: "",
        previous: "",
        },
        details: {},
        games: {},
        filtered: { result: [], next: "", previous: "" }
    }
    
}

export const GameReducer = (state=initState,action) => {
    switch(action.type) {
        case LOADING:
            return {...state, loading: true}
        case LOADING_DETAILS:
            return {...state, loadingDetails: true}
            
           case FETCH_INITIAL_GAMES:
               return { ...state, game: {...state.game, popular: { next: action.payload.popular.next, previous: action.payload.popular.previous, result: action.payload.popular.result }, upcoming: { next: action.payload.upcoming.next, previous: action.payload.upcoming.previous, result: action.payload.upcoming.result }, newgames: { next: action.payload.newGames.next, previous: action.payload.newGames.previous, result: action.payload.newGames.result }}, loading: false }


                    case FETCH_NEXT_PREVIOUS_PAGE:
                        return {...state, [action.payload.prop]: {...state[action.payload.prop], [action.payload.innerProp]: { result: action.payload.results.result, next: action.payload.results.next, previous: action.payload.results.previous } }}

                        case FETCH_GAME_DETAILS:
                            return {...state, game: { ...state.game, details: action.payload.game, devteam: action.payload.devTeam, screenshots: action.payload.screenshots, samegameserie: action.payload.sameSeries, gametrailers: action.payload.trailers }, loadingDetails: false}

                            case FETCH_FILTERED_LIST:
                                return { ...state, [action.payload.prop]: {...state[action.payload.prop], [action.payload.innerProp]:  { result: action.payload.filtered.result, next: action.payload.filtered.next, previous: action.payload.filtered.previous,}  } }

                                case EMPTY_FILTERED_LIST:
                                    return { ...state, [action.payload.prop]: {...state[action.payload.prop], [action.payload.innerProp]: {next: action.payload.filtered.next, previous: action.payload.filtered.previous, result: action.payload.filtered.result}   } }

                                    case FETCH_INITIAL_CREATORS: 
                                    return { ...state, creators: {...state.creators, results: { result: action.payload.creators.result, next: action.payload.creators.next, previous: action.payload.creators.previous }}, loading: false}

                                    case FETCH_CREATOR_DETAILS: 
                                    return { ...state, creators: {...state.creators, details: action.payload.details, games: action.payload.games }, loadingDetails: false }

                                    // case EMPTY_GAMES_LIST:
                                    //     return {...state, gameData: {...state.gameData, filtered: { next: action.payload.next, previous: action.payload.previous, result: action.payload.result }} }

            default:
                return { ...state }
    }
}