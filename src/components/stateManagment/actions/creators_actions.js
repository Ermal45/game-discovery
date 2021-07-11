import {base_url, api_key} from '../../../helper/utils'
import 
{
    FETCH_INITIAL_CREATORS,
    FETCH_CREATOR_DETAILS,

    // FETCH_NEXT_PREVIOUS_CREATORS_PAGE,
    // FETCH_FILTERED_CREATORS, LOADING_CREATOR,
    // LOADING_CREATORS, EMPTY_CREATORS_LIST
}
 from './action_variables'
import axios from 'axios'



const creatorsURL = () => `${base_url}creators?key=${api_key}&page_size=30`

const creatorDetailsURL = (id) => `${base_url}creators/${id}?key=${api_key}` 

const creatorGamesURL = (id) => `${base_url}games?key=${api_key}&creators=${id}&page=1&page_size=10`


//action for fetching game creators

export const fetchGameCreators = (LOADING) => async (dispatch) => {
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


//action for fetching creator detail
export const fetchCreatorDetails = (id, LOADING_DETAILS) => async (dispatch) => {
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


// //action for switching creator pages
// export const fetchNextPreviousPage = (prop, url) => async (dispatch) => {
//     const nexOrPrev = await axios.get(url)
//     dispatch({
//      type: FETCH_NEXT_PREVIOUS_CREATORS_PAGE,
//      payload: {
//          prop,
//          [prop]: {
//              result: nexOrPrev.data.results,
//              next: nexOrPrev.data.next,
//              previous: nexOrPrev.data.previous
//          }
//      }
//     })
// }

// const EmptyTheList = (dispatch) => {
//     dispatch({
//         type: EMPTY_CREATORS_LIST,
//         payload: {
//             result: [],
//             next: "",
//             previous: ""
//         }
//     })
// }



// // action for fetching games based on selected filters
// export const fetchFilteredCreators = (url) => async (dispatch) => {
//     console.log(url);
//     if (!url) {
//         return EmptyTheList(dispatch)
//     }
//     else {
//     const filteredData = await axios.get(url)
//     dispatch({
//      type: FETCH_FILTERED_CREATORS,
//      payload: {
//          filteredCreators: {
//              result: filteredData.data.results,
//              next: filteredData.data.next,
//              previous: filteredData.data.previous
//          }
//      }
//     })
// }
// }