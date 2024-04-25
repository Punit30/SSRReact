import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      home
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Home
