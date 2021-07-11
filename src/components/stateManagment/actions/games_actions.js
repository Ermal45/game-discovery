import {base_url, api_key} from '../../../helper/utils'
import {
    FETCH_INITIAL_GAMES, 
    FETCH_GAME_DETAILS, 
    FETCH_NEXT_PREVIOUS_PAGE, 
    FETCH_FILTERED_LIST, 
    LOADING,
    LOADING_DETAILS,
    EMPTY_FILTERED_LIST,
    
    // creators action variables
    FETCH_INITIAL_CREATORS,
    FETCH_CREATOR_DETAILS
} from './action_variables'
import axios from 'axios'

// dates
const getYear = () => {
    let year = new Date().getFullYear()
    return year
}


const getMonth  = () => {
    const month = new Date().getMonth() + 1
    if (month < '10') {
        return `0${month}`
    }
    else {
        return month
    }
    // const month = 12
    // return month
}


const currentYear = `${getYear()}-${getMonth()}`
const lastYear = `${getYear() - 1}-${getMonth()}`
const nextYear = `${getYear() + 1}-${getMonth()}`

// games api calls

const newGamesURL = () => `${base_url}games?key=${api_key}&dates=${lastYear},${currentYear}&ordering=-released`
const UpcomingGamesURL = () => `${base_url}games?key=${api_key}&dates=${currentYear},${nextYear}`
const PopularGamesURL = () => `${base_url}games?key=${api_key}&dates=${lastYear},${currentYear}`

const gameDetails = (id) => `${base_url}games/${id}?key=${api_key}`
const gameDevelopers = (id) => `${base_url}games/${id}/development-team?key=${api_key}`
const gameSeries = (id) => `${base_url}games/${id}/game-series?key=${api_key}`
const gameScr = (id) => `${base_url}games/${id}/screenshots?key=${api_key}`


// creators api calls
const creatorsURL = () => `${base_url}creators?key=${api_key}&page_size=30`

const creatorDetailsURL = (id) => `${base_url}creators/${id}?key=${api_key}` 

const creatorGamesURL = (id) => `${base_url}games?key=${api_key}&creators=${id}&page=1&page_size=10`





// action for fetching rated games, upcoming games, popular games

export const fetchGamesData = () => async (dispatch) => {
    dispatch({ type: LOADING })
    const newgames = await axios.get(newGamesURL())
    const upcominggames = await axios.get(UpcomingGamesURL())
    const populargames = await axios.get(PopularGamesURL())
    console.log(newgames);
    dispatch({ 
        type: FETCH_INITIAL_GAMES,
        payload: {
            
            newGames: {
                result: newgames.data.results,
                next: newgames.data.next,
                previous: newgames.data.previous
            },


            upcoming: {
                result: upcominggames.data.results,
                next: upcominggames.data.next,
                previous: upcominggames.data.previous
            },

            popular: {
                result: populargames.data.results,
                next: populargames.data.next,
                previous: populargames.data.previous
            }
            
        }
     })
}


// action for fetching game details(including developers details,screenshots, trailers etc)

export const fetchGameDetails = (id, name) => async (dispatch) => {


dispatch({ type: LOADING_DETAILS })

  const gameDetail = await axios.get(gameDetails(id))


  const devsDetails = await axios.get(gameDevelopers(id))
  const sameGameSerie = await axios.get(gameSeries(id))
  const gameScreenshots = await axios.get(gameScr(id))

//   const API_KEY = `${process.env.REACT_APP_GOOGLE}`

//   const gameTrailers = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${name}&type=video&videoEmbeddable=true&key=${process.env.GOOGLE_YT_TK}`)

  const gameTrailers = {data: {items: []}}
  

  dispatch({ 
      type: FETCH_GAME_DETAILS,
      payload: {
          game: gameDetail.data,
          devTeam: devsDetails.data.results,
          sameSeries: sameGameSerie.data.results,
          screenshots: gameScreenshots.data.results,
          trailers: gameTrailers.data.items
      }
   })
}



// action for switching next and previous page of results

export const fetchNextPreviousPage = (prop, innerProp, url) => async (dispatch) => {
    const fetchNextOrPrev = await axios.get(url)
    dispatch({
        type: FETCH_NEXT_PREVIOUS_PAGE,
        payload: {
            prop,
            innerProp,
            results: {
                result: fetchNextOrPrev.data.results,
                next: fetchNextOrPrev.data.next,
                previous: fetchNextOrPrev.data.previous,
            }
        }
    })
}


// action for emptying filtered array

export const EmptyList = (dispatch, prop, innerProp) => {
    dispatch({
        type: EMPTY_FILTERED_LIST,
        payload: {
            prop,
            innerProp,
            filtered: {
               result: [],
            next: "",
            previous: ""
            }
        }
    })
}


// action for fetching games/others based on selected filters

export const fetchFiltered = (url, prop, innerProp) => async (dispatch) => {

     if (!url) {
         return EmptyList(dispatch, prop, innerProp)
     }

     else {
     const filteredRes = await axios.get(url)
    dispatch({
        type: FETCH_FILTERED_LIST,
        payload: {
            prop,
            innerProp,
            filtered: {
                result: filteredRes.data.results,
                next: filteredRes.data.next,
                previous: filteredRes.data.previous
            }
        }
    })
     }
}




// <-- CREATORS ACTIONS --> //

export const fetchGameCreators = () => async (dispatch) => {
    dispatch({ type: LOADING })
    const creators = await axios.get(creatorsURL())
    dispatch({
     type: FETCH_INITIAL_CREATORS,
     payload: {
         creators: {
             result: creators.data.results,
             next: creators.data.next,
             previous: creators.data.previous
         }
     }
    })
}


export const fetchCreatorDetails = (id) => async (dispatch) => {
    dispatch({ type: LOADING_DETAILS })
    const creatorData = await axios.get(creatorDetailsURL(id))
    const gamesData = await axios.get(creatorGamesURL(id))
    dispatch({
     type: FETCH_CREATOR_DETAILS,
     payload: {
         details: creatorData.data,
         games: gamesData.data.results,
     }
    })
}





