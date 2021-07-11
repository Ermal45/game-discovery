
import React, {useEffect, useState} from 'react'

import {base_url, api_key} from '../../helper/utils'


import {SelectDropdown} from '../reusable/SelectDropdown'
import {InputField} from '../reusable/InputField'

import {useDispatch, useSelector} from 'react-redux'

import styled from 'styled-components'

import {GridAutoFit} from '../Basicstyles'

import {EMPTY_GAMES_LIST} from '../stateManagment/actions/action_variables'

import {EmptyFilteredGames, fetchFilteredGames} from '../stateManagment/actions/games_actions'


export const Filters = ({ route, enableDropdown, handleEvent,  placeHolder }) => {



    const {dropdown} = useSelector(state => state)

    


    return (
        <FiltersContainer>
            {enableDropdown ? 
            <>
            <InputField handleEvent={handleEvent} placeHolder={placeHolder} name='search'  />
            <GridStyled>
                <Filter>
                    <h3> Filter by developers </h3>
                    <SelectDropdown results={dropdown.developers} name='developers' handleEvent={handleEvent} />
                </Filter>
                <Filter>
                    <h3> Filter by publishers </h3>
                 <SelectDropdown results={dropdown.publishers} name='publishers' handleEvent={handleEvent} />
                </Filter>
                <Filter>
                    <h3> Filter by tags </h3>
<SelectDropdown results={dropdown.tags} name='tags' handleEvent={handleEvent} />
                </Filter>
                <Filter>
                    <h3> Filter by genres </h3>
<SelectDropdown results={dropdown.genres} name='genres' handleEvent={handleEvent} />
                </Filter>
            </GridStyled>
            </>
            :
            <>
            <InputField handleEvent={handleEvent} placeHolder={placeHolder} name='search' />
            </>
            }
        </FiltersContainer>
    )
}


const Filter = styled.div`
h3 {
    display: block;
    padding-bottom: 1rem;
    font-size: 0.95rem;
    width: 100%;
    color: var(--clr-dropdown-title);
    font-family: popbold;
}
`


const FiltersContainer = styled.div`
padding: 3rem 0rem;
/* @media screen and (min-width: 1200px) {
    padding: 5%;
} */
`

const GridStyled = styled(GridAutoFit)`
/* min-height: 20vh; */
padding-top: 1rem;
justify-content: center;
align-items: center;
gap: 3rem;
`


