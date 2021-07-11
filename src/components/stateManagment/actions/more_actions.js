import {base_url, api_key} from '../../../helper/utils'
import axios from 'axios'
import {FETCH_DEVELOPERS_LIST, FETCH_PUBLISHERS_LIST, FETCH_GENRES_LIST, FETCH_TAGS_LIST} from './action_variables'


const developersURL = () => `${base_url}developers?key=${api_key}&page_size=50`
const publishersURL = () => `${base_url}publishers?key=${api_key}&page_size=50`
const genresURL = () => `${base_url}genres?key=${api_key}&page_size=50`
const tagsURL = () => `${base_url}tags?key=${api_key}&page_size=50`


// action to fetch dev list
export const fetchDevelopers = () => async (dispatch) => {
    const developersData = await axios.get(developersURL())
    dispatch({
     type: FETCH_DEVELOPERS_LIST,
     payload: {
         developers: developersData.data.results
     }
    })
}


// action to fetch tags list
export const fetchTags = () => async (dispatch) => {
    const tagsData = await axios.get(tagsURL())
    dispatch({
     type: FETCH_TAGS_LIST,
     payload: {
         tags: tagsData.data.results
     }
    })
}


// action to fetch publishers list
export const fetchPublishers = () => async (dispatch) => {
    const publishersData = await axios.get(publishersURL())
    dispatch({
     type: FETCH_PUBLISHERS_LIST,
     payload: {
         publishers: publishersData.data.results
     }
    })
}


// action to fetch genres list
export const fetchGenres = () => async (dispatch) => {
    const genresData = await axios.get(genresURL())
    dispatch({
     type: FETCH_GENRES_LIST,
     payload: {
         genres: genresData.data.results
     }
    })
}


