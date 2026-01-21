import { useState } from 'react'
import './App.css'
import Header from './Header'
import Body from './Body'
import Item from './Item'


function App() {


  return (
    <div style={{ display: 'flex', flexDirection: "column", gap: "15px", width:"100%" , height:"100%" }}>

      <Header />

      <Body />

      

    </div>
  )
}

export default App
