

import styled from 'styled-components';
import {motion} from 'framer-motion'


export const GameCard = styled.div`
  /* min-height: 20vh; */
  overflow: hidden;
  img {
    width: 20rem;
    border-radius: var(--card-radius);
    object-fit: cover;
    height: 15rem;
  }
  footer span {
    font-size: 1.2rem;
  }
`

export const GameCardModified = styled(GameCard)`
  img {
      width: 100%;
  }

  footer span {
      padding: 1em 0em;
      color: #474646;
      font-size: 1.45rem;
      font-family: popregular;
  }
`

export const FooterContainer = styled.div`
padding: 1rem 1rem 0 1rem;
background: var(--clr-card-description-bg);
min-height: 20vh;
margin-top: -8px;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;

span {
    font-size: 1rem;
    color: var(--clr-black);
    font-family: popregular;
}

small {
    color: var(--clr-text);
    font-family: popregular;
    padding-top: 1rem;
    font-size: 0.92rem;
}
`

export const DarkBG = styled.div`
background-color: var(--modal-bg-dark);
position: fixed;
width: 100%;
min-height: 100vh;
z-index: 999;
top: 0;
left: 0;
overflow-y: scroll;

a {
    font-size: 0.90rem;
    color: var(--clr-btn-next-previous);
    font-family: popregular;
}

h2 {
    color: var(--clr-black);
    font-size: 1.6rem;
    font-family: popregular;
}

h3 {
    font-family: poplight;
    font-size: 1rem;
}

h4 {
    font-family: poplight;
    font-size: 1.4rem;
    padding-bottom: 1.4rem;
}

@media screen and (min-width: 1000px) {
    h4 {
        font-size: 1.8rem;
    }
}

h3,h2 {
    padding-bottom: 1rem;
}
`

export const Modal = styled(motion.div)`
padding: 1rem 1rem;
background-color: var(--clr-white);
width: 100%;
position: absolute;
z-index: 2;

@media screen and (min-width: 1000px) {
    padding: 1rem 10rem;
    left: 10%;
    width: 80%;
}
`


export const AboutGame = styled.section`
display: grid;
grid-template-columns: 1fr;
gap: 3rem;
text-align: center;
padding-top: 2rem;

h4 {
    color: var(--clr-dropdown-title);
    font-size: 0.90rem;
}

@media screen and (min-width: 800px) {
    grid-template-columns: repeat(2,1fr);
}

@media screen and (min-width: 1100px) {
    grid-template-columns: repeat(3,1fr);
}


img {
    width: 2rem;
    height: 2rem;
    padding: 0.30rem;
}

`

export const ImageBanner = styled.div`
display: flex;
justify-content: center;
align-items: center;
img {
    max-width: 100%;
    border-radius: var(--card-radius);
    object-fit: cover;
}
padding-top: 7rem;
`

export const TagsContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px,1fr));
width: 100%;
row-gap: 1rem;
text-align: center;
/* justify-content: center;
place-items: center; */
`

export const TagContainer = styled.div`
padding: 0.45rem 0.50rem;
background: var(--clr-navigation-links);
border-radius: var(--card-radius);
width: 7rem;
`

export const Tag = styled.span`
font-size: 0.80rem;
color: var(--clr-black);
font-family: popregular;
`

export const GameDescription = styled.div`
padding-top: 7rem;
p {
    text-align: center;
}
@media screen and (min-width: 600px) {
    p {
        text-align: left;
    }
}
`


export const CloseBtn = styled.div`
display: flex;
width: 100%;
z-index: 999;
justify-content: flex-end;


position: ${(prop) => prop.ypos >= 500 ? "sticky" : ""};

top: 0;
width: 100%;
padding: 1rem 0.75rem;
box-shadow: var(--card-box-shadow);
background-color: var(--clr-white);

img {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
}

@media screen and (min-width: 1000px) {
    display: none;
}

`

export const Metacritic = styled.div`
span {
        font-size: 1.1rem;
        font-family: popbold;
        color: var(--clr-white);
        padding: 0.45rem 1rem;
        border-radius: var(--card-radius);
        background-color: ${({checkMetacritic}) => checkMetacritic};
    }
`

export const Highlighted = styled(Metacritic)`
span {
        font-size: 1.1rem;
        font-family: popbold;
        color: var(--clr-white);
        padding: 0.45rem 1rem;
        border-radius: var(--card-radius);
        background-color: var(--metacritic-outline-orange);
    }
`

export const GridAutoFit = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 1rem;
`

export const Loader = styled.div`
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;

svg {
  width: 10rem;
  height: 10rem;
}

`



export const StyledWrapper = styled.div`
display: block;
/* img {
    height: 10rem;
    object-fit: cover;
    object-position: center;
    width: 20rem;
} */
padding-top: 7rem;
`

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 1.2rem;
`

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 3rem;

@media screen and (min-width: 600px) {
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
}

`

export const BtnContainer = styled.div`
padding: 1rem 0rem;
width: 100%;
display: flex;
justify-content: ${props => !props.previous ? 'flex-end' : 'space-between'};
align-items: center;
min-height: 15vh;
`

export const Button = styled.button`
padding: 0.50rem 1rem;
height: 3rem;
outline: none;
border: none;
display: block;
color: var(--clr-white);
background-color: var(--clr-btn-next-previous);
transition: var(--main-transition);
font-family: popregular;
font-size: 1rem; 
border-radius: var(--card-radius);
cursor: pointer;

/* :hover {
  opacity: 0.5
} */

`

export const List = styled(motion.div)`
padding: 0 5%;
h1 {
  padding: 3rem 0rem;
}

`

