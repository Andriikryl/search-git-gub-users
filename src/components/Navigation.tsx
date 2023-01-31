import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <nav>
      <h3 >Github Search</h3>

      <span>
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </span>
    </nav>
  )
}