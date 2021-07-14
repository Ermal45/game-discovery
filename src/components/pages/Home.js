import React, {useEffect, useRef, useState, useCallback} from 'react'



import {connectAdvanced, useDispatch, useSelector} from 'react-redux'

import {useParams, useHistory} from 'react-router-dom'


// reusable components


import {GameCard} from '../reusable/GameCard'

import {GameDetail} from '../DetailComponents/GameDetail'
import {CreatorDetail} from '../DetailComponents/CreatorDetail'

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

import {AnimatePresence, AnimateSharedLayout, motion} from 'framer-motion' 

import {base_url, api_key} from '../../helper/utils'

// import {GameCard, FooterContainer} from '../Basicstyles'

// import {animateList} from '../animations'

import {useFilters} from '../reusable/useFilters'

import styled from 'styled-components'

export const Home = () => {

    // set the hook to a variable
    const dispatch = useDispatch()

    

  // extract state from globalStore
  const { games:{game, creators, loading}, games} = useSelector(state => state)

  const param = useParams()
   
  const history = useHistory()

  

  useEffect(() => {
   const currRoute = history.location.pathname 
   const getParam = currRoute.split('/')[1]
   if (!getParam) {
     document.body.style.overflow = 'auto'
   } 
  }, [history.location.pathname])

  


  // const filteredResultsSection = useRef()
  const ListRef = useRef()


  // function for switching next/previous page
 const switchPages = (e, previousOrNext) => {
   const prop = e.target.name;
   const innerProp = e.target.value;
   const nextOrPeviousURL = games[prop][innerProp][previousOrNext];
   dispatch(fetchNextPreviousPage(prop, innerProp,  nextOrPeviousURL))
 }


//  const checkForLoading = () => {
//    if (loadingInitial) {
//      return document.body.style.overflow = 'hidden'
//    }
//    else {
//      return document.body.style.overflow = 'auto'
//    }
//  }

 const [currentFetch, setCurrentFetch] = useState('games')

 const {filters, changeFilters, handleChange} = useFilters(fetchFiltered, currentFetch === 'games' ? {route: 'games', prop: 'game', innerProp: 'filtered'} : {route: 'creators', prop: 'creators', innerProp: 'filtered'})
 
 // when component mounts we dispatch actions 
 useEffect(() => {
   dispatch(fetchDevelopers())
    dispatch(fetchGenres())
    dispatch(fetchTags())
    dispatch(fetchPublishers())
    const getListOffset = ListRef.current && ListRef.current.offsetTop;
    window.scrollTo({
      top: getListOffset,
      behavior: 'smooth'
    })
    if (currentFetch === 'games') {
      dispatch(fetchGamesData())
    }
    else {
      dispatch(fetchGameCreators())
    }
 }, [currentFetch]) 

//  useEffect(() => {
//    checkForLoading()
//  }, [loadingInitial])


 const filteredResultSection = useRef()

 
 useEffect(() => {
   changeFilters()
  //  filteredResultSection()
   // scroll to filtered results section
   if (game.filtered.result.length > 0 || creators.filtered.result.length > 0) {

     window.scrollTo({
     top: filteredResultSection.current.offsetTop - 100,
     behavior: 'smooth'
   })
   }
   
 }, [filters, game.filtered.result.length, creators.filtered.result.length])
  

 

 const handleCurr = (e) => {
   const getId = e.target.id
   setCurrentFetch(getId)
 }

 

  return ( 
  <AnimatedList>
     
   {param.id && currentFetch === 'games' && <GameDetail />}
   {param.id && currentFetch === 'creators' && <CreatorDetail />}
 
    <SwitchWrapper prop={currentFetch}>
     <SwitchContainer>
       <span  className={currentFetch === 'games' ? 'active' : ''} onClick={handleCurr} id='games'>Games</span>
       <span className={currentFetch === 'creators' ? 'active' : ''} onClick={handleCurr} id='creators'>Creators</span>
       <div className='switch-btn'></div>
     </SwitchContainer>
    </SwitchWrapper>

   {
     currentFetch === 'games' ? <Filters placeHolder='search for games' route='games' enableDropdown={true} handleEvent={handleChange} /> : <Filters placeHolder='search for creators' route='creators' enableDropdown={false} handleEvent={handleChange} />
   }

   {loading ? <Loader> <Ball /> </Loader> : 
   <section ref={ListRef}>

   {currentFetch === 'games' ? 
  <>
   {game.filtered.result.length > 0 &&
  <div className='filteredResults'> 
   <h1> Filtered Results </h1>
   <p> Number of results: {game.filtered.result.length} </p>
   <Container ref={filteredResultSection}  className='filtered'>
      {game.filtered.result.map(game => {
        return <GameCard {...game} key={game.id} identifier='gamePage' />
      })}
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
      { game.upcoming.result.map(game => {
        return <GameCard {...game} key={game.id} identifier='gamePage' />
      }) }
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
  :
  
  <>
  {creators.filtered.result.length > 0 &&
  <div className='filteredResults'> 
   <h1> Filtered Results </h1>
   <Container ref={filteredResultSection}  className='filtered'>
      {creators.filtered.result.map(game => {
        return <GameCard {...game} key={game.id} identifier='creatorPage' />
      })}
   </Container>
   <BtnContainer previous={creators.filtered.previous}>
      {creators.filtered.previous && <Button name='creators' value='filtered' onClick={(e) => {
        return switchPages(e, 'previous'),
        scrollToContainer(e)
      }}> Previous Page </Button>}
      <Button name='creators' value='filtered' onClick={(e) => {
        return switchPages(e, 'next'),
        scrollToContainer(e)
      }}> Next Page </Button>
    </BtnContainer> 
    </div>
  }
    <h1> Creators </h1>
    <Container className='results'>
      { creators.results.result.map(creator => {
        return <GameCard {...creator} key={creator.id} identifier='creatorPage' />
      }) }
    </Container>
    <BtnContainer previous={creators.results.previous}>
      {creators.results.previous && <Button name='creators' value='results' onClick={(e) => {
        return switchPages(e, 'previous'),
        scrollToContainer(e)
      }}> Previous Page </Button>}
      <Button  name='creators' value='results' onClick={(e) => {
        return switchPages(e, 'next'),
        scrollToContainer(e)
      }}> Next Page </Button>
    </BtnContainer> 
    </>
  }
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
  padding: 1rem 0rem;
}

animation: listAnim 1s 1 normal;

transition: all 0.3 ease;

@keyframes listAnim {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

`


const SwitchWrapper = styled.section `
min-height: 20vh;
display: flex;
justify-content: center;
align-items: center;
.switch-btn {
  position: absolute;
  top: 13px;
  left: ${props => props.prop === 'games' ? '0%' : '50%'};
  width: 6rem;
  height: 1rem;
  padding: 1rem;
  background: var(--clr-purple-dark);
  pointer-events: none;
  z-index: -1;
  border-radius: var(--card-radius);
  display: block;
}
span {
  color: black;
  cursor: pointer;
}
.active {
  color: white;
}
`

const SwitchContainer = styled.div `
width: 13rem;
padding: 1rem;
border: 1px solid #D8D8D8;
border-radius: var(--card-radius);
display: flex;
justify-content: space-between;
position: relative;
`


