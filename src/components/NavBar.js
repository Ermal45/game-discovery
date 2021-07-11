import React from 'react'

import styled from 'styled-components'

import { ReactComponent as  Logo} from '../assets/Logo.svg'


import NavgiationLinks from '../helper/navigation-links'

export const Navbar = () => {
    return (
        <NavBarWrapper>
        <Container>
            <LogoContainer>
              <Logo />
              <h1> GameDiscovery </h1>
              <div className='line'></div>
            </LogoContainer>
        </Container>
        </NavBarWrapper>
    )
}


const LogoContainer = styled.div`

svg {
    width: 3rem;
    height: 3rem;
    fill: var(--clr-white);
}

.line {
    background-color: var(--clr-dropdown-title);
    height: 0.020rem;
    width: 100%;
}

h1 {
    padding: 0.10rem  0 0.20rem 0;
    font-size: 1.3rem;
    color: var(--clr-orange);
    font-family: popbold;
}

text-align: center;


@media screen and (min-width: 600px) {
    svg {
        width: 4rem;
        height: 4rem;
    }
    h1 {
        font-size: 1.5rem;
    }
}

`



const NavBarWrapper = styled.nav`
background-color: var(--clr-purple-light);
min-height: 25vh;
width: 100%;
padding: 0 5%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (min-width: 1200px) {
    padding: 0 10rem;
}
`


const Container = styled.div`

ul {
    width: 15rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.2rem;
    text-align: center;
}

a {
        font-size: 0.80rem;
        color: var(--clr-navigation-links);
        font-family: popregular;
    }

@media screen and (min-width: 600px) {
    a {
        font-size: 1rem;
    }
}

`