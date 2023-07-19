import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Auth from '../pages/auth/Auth'
import Dashboard from '../pages/dashboard/Dashboard'
import Stream from '../pages/stream/Stream'

function Template() {
  return (
    <div>
      <h1> Stream Yard Clone</h1>
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/stream' element={<Stream />} />
    </Routes>
    </div>
  )
}

export default Template