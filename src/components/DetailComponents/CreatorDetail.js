import React from 'react'

import {DarkBG, Modal, AboutGame, ImageBanner, TagsContainer, TagContainer, Tag, GameDescription,  FooterContainer,   GameCard, CloseBtn,  StyledWrapper, Grid} from '../Basicstyles'

import CloseIcon from '../../assets/close-modal-icon.svg';

import styled from 'styled-components'

import {useSelector} from 'react-redux'

import {starRating, platformImage, resizeImage, exitModal, showClickEvent} from '../../helper/utils'

import {useHistory} from 'react-router-dom'

import {removePtag} from '../../helper/utils'

export const CreatorDetail = () => {

   const {games:{creators:{games,details},loadingDetails}} = useSelector(state => state)

   const history = useHistory()

    return (
        !loadingDetails && 
        <DarkBG onMouseOver={showClickEvent} onClick={(e) => exitModal(e, history, '/')} className='dark-bg' >
            <Modal> 
                <CloseBtn>
                    <img className='dark-bg' onClick={(e) => exitModal(e, history, '/')} src={CloseIcon} alt='close-icon-modal' />
                </CloseBtn>
                <AboutGame>
                    <div>
                        <h2>{details.name}</h2>
                        {starRating(details.rating)}
                    </div>
                    <div>
                        <h3>Platforms</h3>
                        {details.platforms.results ? details.platforms.results.map(system => {
                            return <img src={platformImage(system.platform.name)} alt={system.platform.name} key={system.platform.id} />
                        }) : <small> no information yet </small>}
                        
                    </div>
                    <GamesCount>
                        <h3>Games Count</h3>
                        <span> {details.games_count} </span>
                    </GamesCount>
                    <div>
                        <h3>Positions</h3>
                        <TagsContainer platformLength={details.positions.length}>
                            {details.positions.map((position) => {
                                return (
                                    <TagContainer key={position.id}>
                                        <Tag> {position.name} </Tag>
                                    </TagContainer>
                                )
                            })}
                        </TagsContainer>
                    </div>
                </AboutGame>
                <Gallery>
                    <img  src={details.image || details.image_background} alt={details.name} />
                </Gallery>
                <GameDescription>
                    <p>{removePtag(details.description)}</p>
                </GameDescription>
                <StyledWrapper>
                    <h3>Games created by {details.name}</h3>
                    <Grid>
                    {games.map((game) => {
                        return (
                            <GameCard key={game.id}>
                             <img src={resizeImage(game.background_image)} alt={game.name} />
                             <footer>
                                 <span>{game.name}</span>
                             </footer>
                            </GameCard>
                        )
                    })}
                    </Grid>
                </StyledWrapper>
             </Modal>
        </DarkBG>
    )
}


const GamesCount = styled.div`
span {
    font-size: 1.1rem;
        font-family: popbold;
        color: var(--clr-dropdown-title);
        padding: 0.45rem 1rem;
}
`

const Gallery = styled(ImageBanner)`
 img {
     width: 80%;
     height: 30rem;
     object-fit: cover;

     @media screen and (min-width: 1400px) {
         width: 50%;
     }
 }
`



// const CreatorGames = styled.div`
// padding-top: 3rem;
// h4 {
//     font-family: poplight;
//     font-size: 1.2rem;
//     padding-bottom: 1.4rem;
// }

// `


