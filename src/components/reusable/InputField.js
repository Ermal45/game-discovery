import React, { useState } from 'react'
import styled from 'styled-components'

export const InputField = ({   placeHolder, handleEvent, name }) => {

         
      const [searchText, setSearchText] = useState("")

    const handleInput = (e) => {
       setSearchText(e.target.value)
    }

    const emptySearchField = () => {
      setSearchText("")
    }

    return (
        <Container>
        <Input onChange={handleInput} name={name} value={searchText}  type='text' placeholder={placeHolder} />
        <Button name={name} value={searchText} onClick={(e) => {
          return handleEvent(e),
          emptySearchField()
        } }> Search </Button>
        </Container>
    )
}


const Button = styled.button`
padding: 0.5rem 0.65rem;
color: var(--clr-white);
background-color: black;
outline: none;
border: none;
font-size: 0.95rem;
cursor: pointer;
font-family: popmedium;
transition: var(--main-transition);

:hover {
  opacity: 0.5;
}

@media screen and (min-width: 500px) {
  padding: 0.5rem 2rem;
}

`

const Container = styled.div`
display: flex;
justify-content: center;
padding: 3rem 0;
`

const Input = styled.input`
padding: 0.5rem 0.65rem;
font-size: 1rem;
outline: none;
border: 1px solid var(--clr-navigation-links);
color: var(--clr-search-text);
font-family: poplight;
width: 100%;

@media screen and (min-width: 500px) {
  padding: 0.5rem 2rem;
  max-width: 500px;
}
`