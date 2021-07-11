import React from 'react'

import styled from 'styled-components'

import {motion} from 'framer-motion'
import {animationCard} from '../animations';

import NOIMAGE from '../../assets/platform_images/NOIMAGE.png'

// detail actions
import {fetchGameDetails} from '../stateManagment/actions/games_actions'
import {fetchCreatorDetails} from '../stateManagment/actions/games_actions'

// get id from url-param
import { useHistory} from 'react-router-dom'

// utils
import {resizeImage} from '../../helper/utils'

// react-redux

import { useDispatch } from 'react-redux'


export const GameCard = ({ background_image, image, name, positions, released, id, identifier }) => {



   const history = useHistory()
   const dispatch = useDispatch()

    const fireActions = () => {
        document.body.style.overflow = 'hidden'
        // dispatch(fetchGameDetails(id, name))
        //  history.push(`/game/${id}`)
        if (identifier === 'gamePage') {
             return dispatch(fetchGameDetails(id, name)),
             history.push(`/game/${id}`)
        } 
        else {
             return dispatch(fetchCreatorDetails(id)),
             history.push(`/creator/${id}`)
        }
    }

    

    

    return (
        // <GameCardStyled variants={animationCard} initial='hidden' animate='visible' exit='leave' layoutId={id} onClick={fireActions} >
        //     <motion.img layoutId={`img-${id}`} src={resizeImage(background_image) || image || NOIMAGE} alt={name} />
        //   <FooterStyled> 
        //       <motion.span layoutId={`title ${id}`}>{name}</motion.span>
        //       <motion.small layoutId={`release ${id}`}> {returnReleaseDate()} </motion.small>
        //      </FooterStyled>
        // </GameCardStyled>

        <GameCardStyled onClick={fireActions}>
            <img src={resizeImage(background_image) || image || NOIMAGE} alt={name} />
          {/* <FooterStyled> 
              <span>{name}</span>
              <small> {returnReleaseDate()} </small>
             </FooterStyled> */}
             <FooterStyled>
                 <span>{name}</span>
             </FooterStyled>
        </GameCardStyled>
    )
}



const GameCardStyled = styled.div`


animation: animateCard 0.7s 1 normal;

transition: all 0.3s ease;

@keyframes animateCard {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}



/* box-shadow: var(--card-box-shadow); */
cursor: pointer;
img {
    height: 20rem;
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--card-radius);
}
overflow: hidden;
`



const FooterStyled = styled.div`
padding-top: 1rem;
height: 3rem;
/* text-align: center;
background-color: var(--clr-card-description-bg); */

span {
    color: var(--clr-black);
    font-size: 1.2rem;
    display: block;
    font-family: popregular;
}

/* small {
    color: var(--clr-text);
    font-size: 0.90rem;
    padding-top: 1rem;
    font-family: poplight;
} */

`
