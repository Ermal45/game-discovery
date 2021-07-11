import React, {useState} from 'react'

import {useDispatch} from 'react-redux'

import {base_url, api_key} from '../../helper/utils'

export const useFilters = (filteredList, {route, prop, innerProp}) => {
    
    const [filters,setFilters] = useState({ genres: "all", publishers: "all", developers: "all", tags: "all", search: "" })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFilters({...filters, [name]: value})
    }

    const changeFilters = () => {
        let url = `${base_url}${route}?key=${api_key}`

    let {genres, tags, developers, publishers, search} = filters

    if (genres !== 'all') {
        url = url + `&genres=${genres}`
    }  

    if (publishers !== 'all') {
        url = url + `&publishers=${publishers}`
    }  

    if (tags !== 'all') {
        url = url + `&tags=${tags}`
    }  

    if (developers !== 'all') {
        url = url + `&developers=${developers}`
    }

    if (search !== "") {
        url = url + `&search=${search}`
    }
  
    if (!url.includes("&")) url = ""

    dispatch(filteredList(url, prop, innerProp));

    }

    return {handleChange, changeFilters, filters}
}
