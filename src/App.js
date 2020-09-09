import React, { useState } from 'react'
import './App.scss'
import MapComponent from './components/MapComponent'
import Header from './components/Header'
import useMap from './hooks/useMap'

function App() {
  const [query, setQuery] = useState('')

  const data = useMap(query)

  return (
    <div className='App'>
      <Header data={data} setQuery={setQuery} />
      <MapComponent data={data} />
    </div>
  )
}

export default App
