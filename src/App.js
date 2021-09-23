import React from 'react';


import {Home} from './components/pages/Home'


// global style prefix
import GlobalStyle from './components/GlobalStyles'


// Navbar Component
import {Navbar} from './components/NavBar'
import {Footer} from './components/Footer'

import {Route} from 'react-router-dom';

import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion';

const App = () => {

  return (
    <AppContainer>
    <GlobalStyle />
    <Navbar />
    
    <Route exact path={['/', '/game/:id']}>
      <Home />
    </Route>

    {/* <Route  path={['/creators', '/creator/:id']}>
      <Creators />
    </Route> */}

    <Footer />
    </AppContainer>
  )
}

const AppContainer = styled.div`
min-height: 100%;
display: grid;
grid-template-rows: auto 1fr auto;
grid-template-columns: 100%;
`

export default App;
