import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {FavouritesPage} from './pages/FavouritesPage'
import {Navigation} from './components/Navigation'
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Container maxWidth="sm">
      <Navigation />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/favourites" element={ <FavouritesPage /> } />
      </Routes>
      </Container>
    </>
  )
}

export default App
