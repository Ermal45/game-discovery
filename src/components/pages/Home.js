import React, {useEffect, useRef, useState, useCallback} from 'react'



import { useDispatch, useSelector} from 'react-redux'

import {useParams, useHistory} from 'react-router-dom'


// reusable components


import {GameCard} from '../reusable/GameCard'

import {GameDetail} from '../DetailComponents/GameDetail'

import {Filters} from '../reusable/Filters'

// url
import {scrollToTop, scrollToContainer} from '../../helper/utils'

// game reducer actions
import {fetchGamesData, fetchNextPreviousPage, fetchFiltered} from '../stateManagment/actions/games_actions'

import { fetchGameCreators } from '../stateManagment/actions/games_actions'

// more reducer actions
import {fetchDevelopers, fetchTags, fetchPublishers, fetchGenres} from '../stateManagment/actions/more_actions'

import {ReactComponent as Ball} from '../../assets/loading-ball.svg'

import {Loader, Container, BtnContainer, Button, List} from '../Basicstyles'

import {AnimatePresence} from 'framer-motion' 

import {useFilters} from '../reusable/useFilters'

import styled from 'styled-components'
import {animateList} from '../animations'
import axios from 'axios'

export const Home = () => {

    // set the hook to a variable
    const dispatch = useDispatch()

  // extract state from globalStore
  const { games:{game, loading}, games} = useSelector(state => state)

  const param = useParams()
   
  const history = useHistory()

  const ListRef = useRef()
  const initialRender = useRef(false)


  const filteredResultSection = useRef()
  

  useEffect(() => {
   const currRoute = history.location.pathname 
   const getParam = currRoute.split('/')[1]
   if (!getParam) {
     document.body.style.overflow = 'auto'
   } 
  }, [history.location.pathname])

  


  // const filteredResultsSection = useRef()


  // function for switching next/previous page
 const switchPages = (e, previousOrNext) => {
   const prop = e.target.name;
   const innerProp = e.target.value;
   const nextOrPeviousURL = games[prop][innerProp][previousOrNext];
   dispatch(fetchNextPreviousPage(prop, innerProp,  nextOrPeviousURL))
 }

 const {filters, changeFilters, handleChange} = useFilters(fetchFiltered, {route: 'games', prop: 'game', innerProp: 'filtered'})
 
 // when component mounts we dispatch actions 
 useEffect(() => {
   dispatch(fetchDevelopers())
    dispatch(fetchGenres())
    dispatch(fetchTags())
    dispatch(fetchPublishers())
    dispatch(fetchGamesData())
    const getListOffset = ListRef.current && ListRef.current.offsetTop;
    window.scrollTo({
      top: getListOffset,
      behavior: 'smooth'
    })
 }, []) 

 
 useEffect(() => {
   // skip inital render
   if (initialRender.current) {
     changeFilters()
   }
   else {
     initialRender.current = true
   }
 }, [filters])

 useEffect(() => {
   if (game.filtered.result.length > 0) {
      window.scrollTo({
        top: filteredResultSection.current.offsetTop - 150,
        behavior: 'smooth'
      })
    }
 }, [game.filtered.result])

 

 

  return ( 
  <AnimatedList variants={animateList} initial='hidden' animate='visible'>
   {param.id &&  <GameDetail  />}
   <Filters placeHolder='search for games' route='games' enableDropdown={true} handleEvent={handleChange} />
   {loading ? <Loader> <Ball /> </Loader> : 
   <section ref={ListRef}>

   <>
    
    {game.filtered.result.length > 0 &&
  <div className='filteredResults'> 
   <h1> Filtered Results </h1>
   <p> Number of results: {game.filtered.result.length} </p>
   <Container ref={filteredResultSection}  className='filtered'>
     <AnimatePresence exitBeforeEnter>
      {game.filtered.result.map(game => {
        return <GameCard {...game} key={game.id} identifier='gamePage' />
      })}
      </AnimatePresence>
   </Container>
   <BtnContainer previous={game.filtered.previous}>
      {game.filtered.previous && <Button name='game' value='filtered' onClick={(e) => {
        return switchPages(e, 'previous'),
        scrollToContainer(e)
      }}> Previous Page </Button>}
      <Button name='game' value='filtered' onClick={(e) => {
        return switchPages(e, 'next'),
        scrollToContainer(e)
      }}> Next Page </Button>
    </BtnContainer> 
    </div>
  }
    
    <h1> Upcoming games </h1>
    <Container className='upcoming' >
      <AnimatePresence exitBeforeEnter>
      { game.upcoming.result.map(game => {
        return <GameCard {...game} key={game.id} identifier='gamePage' />
      }) }
      </AnimatePresence>
    </Container>
    <BtnContainer previous={game.upcoming.previous}>
      {game.upcoming.previous && <Button name='game' value='upcoming' onClick={(e) => {
        return switchPages(e, 'previous'),
        scrollToContainer(e)
      }}> Previous Page </Button>}
      <Button  name='game' value='upcoming' onClick={(e) => {
        return switchPages(e, 'next'),
        scrollToContainer(e)
      }}> Next Page </Button>
    </BtnContainer>


    
    
    


    
    <h1> Popular games </h1>
    <Container className='popular'>
      { game.popular.result.map(game => {
        return <GameCard {...game} key={game.id} identifier='gamePage' />
      }) }

    </Container>
    <BtnContainer  previous={game.popular.previous} >
      {game.popular.previous && <Button name='game' value='popular' onClick={(e) => {
        return switchPages(e, 'previous'),
        scrollToContainer(e)  
      }}> Previous Page </Button>}
      <Button name='game' value='popular' onClick={(e) => {
        return switchPages(e, 'next'),
        scrollToContainer(e)       
      }}> Next Page </Button>
    </BtnContainer>



    <h1> New games </h1>
    <Container className='newgames'>
      { game.newgames.result.map(game => {
        return <GameCard {...game} key={game.id} identifier='gamePage' />
      }) }
    </Container>
    <BtnContainer previous={game.newgames.previous} >
      {game.newgames.previous && <Button name='game' value='newgames' onClick={(e) => {
        return switchPages(e, 'previous'),
        scrollToContainer(e)
      }}> Previous Page </Button>}
      <Button  name='game' value='newgames' onClick={(e) => {
        return switchPages(e, 'next'),
        scrollToContainer(e)
      }}> Next Page </Button>
    </BtnContainer>
  </>
   
   </section>
   }
     </AnimatedList>
  )
}


const AnimatedList = styled(List)`


p {
  padding-bottom: 1rem;
}

h1 {
  padding: 1.5em 0rem;
}


`


