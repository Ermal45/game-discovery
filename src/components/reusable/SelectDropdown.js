import React from 'react'
import styled from 'styled-components';

export const SelectDropdown = ({ handleEvent, results, name }) => {
    return (
        <Dropdown name={name} onChange={handleEvent}>
            <option value="all">all</option>
            {results.map((result) => {
                return (
                    <option key={result.id} value={result.id}> {result.name} </option>
                )
            })}
            </Dropdown>
    )
}






const Dropdown = styled.select`
padding: 0.3rem 1rem;
font-size: 1rem;
border-radius: var(--card-radius);
outline: none;
background-color: transparent;

font-family: popregular;
text-transform: capitalize;
border: 1px solid var(--clr-navigation-links);
width: 100%;
`