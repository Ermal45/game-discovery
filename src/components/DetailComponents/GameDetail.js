import React from 'react'

import {useSelector} from 'react-redux'
import {motion} from 'framer-motion'

import styled from 'styled-components'

import {useHistory} from 'react-router-dom'

import {platformImage, starRating, resizeImage, EsrbRating, exitModal, checkMetacritic, showClickEvent} from '../../helper/utils';

import CloseIcon from '../../assets/close-modal-icon.svg'

import {
    
    GameCard, 
    FooterContainer, 
    StyledWrapper, 
    Grid, 
    Modal, 
    DarkBG, 
    AboutGame, 
    ImageBanner, 
    CloseBtn,
    GameDescription,
    Metacritic

} from '../Basicstyles';

export const GameDetail = () => {

    const history = useHistory()

    const {games:{game, loadingDetails}} = useSelector(state => state)

    let {details, devteam, screenshots, samegameserie, gametrailers} = game

    const exitModal = (e) => {
        if (e.target.classList.contains('dark-bg')) {
            history.push('/')
            document.body.style.overflow = 'auto'
        }
    }

   return (
    !loadingDetails &&    
        <DarkBG onMouseOver={showClickEvent} onClick={exitModal} className='dark-bg'>
            <Modal>
             <CloseBtn>
                 <img onClick={(e) => exitModal(e, history, '/')} src={CloseIcon} className='dark-bg' alt='close-icon' />
             </CloseBtn>
            <AboutGame>
            <div>
                <h2>{details.name}</h2>
                {starRating(details.rating)}
            </div>

            <div>
                <h3> Platforms </h3>
                {details.platforms.map((system) => {
                    return <img src={platformImage(system.platform.name)} alt={system.platform.name} key={system.platform.id} />
                })}
            </div>

            <Metacritic checkMetacritic={() => checkMetacritic(details)}> 
                <h3>Metacritic</h3>
                { details.metacritic ? <span>{details.metacritic}</span> : <small> No information collected yet </small> }
                
            </Metacritic>


            <div>
                <h3>ESRB Rating</h3>
                {details.esrb_rating ? <img src={EsrbRating(details.esrb_rating.name)} alt={details.esrb_rating.name} /> : <small> No information collected yet </small>}
            </div>

            
            <div>
                <h3>Release date</h3>
                <h4>{details.released || 'No information collected yet'}</h4>
            </div>

            <div>
                <h3>Website</h3>
                { details.website ? <a target="_blank" rel='noopener noreferer' href={details.website}>{details.website}</a> : <small> No information yet </small> }
            </div>


            </AboutGame>

            <ImageBanner>
                <img src={resizeImage(details.background_image || details.background_image)} alt={details.name} />
            </ImageBanner>
            
            <TagsContainer>
                {details.tags.map((tag) => {
                    return (
                        <TagContainer key={tag.id}>
                            <Tag> {tag.slug} </Tag>
                        </TagContainer>
                    )
                })}
            </TagsContainer>
            <GameDescription>
             <p>{details.description_raw || 'No information collected yet'}</p>
            </GameDescription>


             {screenshots.length > 0 && 
                 <StyledWrapper>
                 <h4>Screenshots</h4>
                 <Gallery>
                 {screenshots.map((screenshot) => {
                     return <img key={screenshot.id} src={resizeImage(screenshot.image)} alt={game.name} />
                 })}
                 </Gallery>
             </StyledWrapper>
                 }
             
             
             {/* {devteam.length > 0 && 
             <StyledWrapper>
                 <h4>Developers</h4> 
                 <Grid>
                 <GameCard>
                     <img src={resizeImage(devteam[0].image_background)} alt={game.name} />
                     <FooterContainer>
                         {devteam.map((developer) => {
                             return <span key={developer.id}> {developer.name} </span>
                         })}
                     </FooterContainer>
                 </GameCard>
                 </Grid>
             </StyledWrapper>
             } */}

             {details.publishers.length > 0 && 
             <StyledWrapper>
                 <h4>Publishers</h4> 
                 <Grid>
                 <GameCard>
                     <img src={resizeImage(details.publishers[0].image_background)} alt={details.name} />
                     <footer>
                         {details.publishers.map((publisher) => {
                             return <span key={publisher.id}> {publisher.name} </span>
                         })}
                     </footer>
                 </GameCard>
                 </Grid>
             </StyledWrapper>
             }

             <StyledWrapper>
                 <h4>Genres</h4>
                 <Grid>
                 {details.genres.map((genre) => {
                     return (
                         <GameCard key={genre.id}>
                             <img src={resizeImage(genre.image_background)} alt={genre.name} />
                              <footer>
                                  <span>{genre.name}</span>
                              </footer>
                         </GameCard>
                     )
                 })}
                 </Grid>
             </StyledWrapper>
             
             {devteam.length > 0 && 
             <StyledWrapper>
                <h4>Some of the developers who worked in the game:</h4>
                <Grid>
                {devteam.map((person) => {
                    return (
                        <GameCard key={person.id}>
                          <img  src={person.image || resizeImage(person.image_background)} alt={person.name} />
                          <footer>
                              <span>{person.name}</span>
                          </footer>
                        </GameCard>
                    )
                })}
                </Grid>
            </StyledWrapper>
             }

            {samegameserie.length > 0 &&  
            <StyledWrapper>
             <h4> Games that are part of the same serie </h4>
             <Grid>
             {samegameserie.map((serie) => {
                 return (
                     <GameCard key={serie.id}>
                          <img  src={resizeImage(serie.background_image)} alt={serie.name} />
                          <footer>
                              <span>{serie.name}</span>
                          </footer>
                        </GameCard>
                 )
             })}
             </Grid>
            </StyledWrapper>
}
             </Modal>
        </DarkBG>
   )
}



const Gallery = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
gap: 1rem;
img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
}
`


const TagsContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
gap: 1rem;
width: 100%;
text-align: center;
padding-top: 3rem;
`


const TagContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0.30rem 0.10rem;
background: var(--clr-navigation-links);
border-radius: var(--card-radius);
`

const Tag = styled.span`
font-size: 0.80rem;
color: var(--clr-black);
font-family: popregular;
`











