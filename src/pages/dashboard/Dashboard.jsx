import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to='/stream'>
        <button>Start Streaming</button>
      </Link>
    </div>
  )
}

export default Dashboard