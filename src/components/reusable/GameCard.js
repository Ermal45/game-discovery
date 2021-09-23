import React from 'react'

import styled from 'styled-components'

import {motion, AnimatePresence} from 'framer-motion'
import {animationCard} from '../animations';

import NOIMAGE from '../../assets/platform_images/NOIMAGE.png'

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
         return history.push(`/game/${id}`)
    }

    

    

    return (
        // <GameCardStyled variants={animationCard} initial='hidden' animate='visible' exit='leave' layoutId={id} onClick={fireActions} >
        //     <motion.img layoutId={`img-${id}`} src={resizeImage(background_image) || image || NOIMAGE} alt={name} />
        //   <FooterStyled> 
        //       <motion.span layoutId={`title ${id}`}>{name}</motion.span>
        //       <motion.small layoutId={`release ${id}`}> {returnReleaseDate()} </motion.small>
        //      </FooterStyled>
        // </GameCardStyled>
      <GameCardStyled  variants={animationCard} initial='hidden' animate='visible' exit='leave' onClick={fireActions} key={id}> 
            <motion.img src={resizeImage(background_image) || image || NOIMAGE} alt={name} />
             <FooterStyled>
                 <span>{name}</span>
             </FooterStyled>
        </GameCardStyled>
    )
}



const GameCardStyled = styled(motion.div)`

/* animation: animateCard 0.7s 1 normal;

transition: all 0.3s ease;

@keyframes animateCard {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
} */



/* box-shadow: var(--card-box-shadow); */
cursor: pointer;
img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--card-radius);
}
overflow: hidden;
`



const FooterStyled = styled.div`
padding: 2.5rem 0;
span {
    color: #1f1414;
    font-size: 1.2rem;
    display: block;
    font-family: popregular;
}

@media (min-width: 600px) {
  span {
    font-size: 1.55rem;
  }
}

`
