import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from "./components/Entry";

function App() {
  return (
    <>
      <Header/>
      <Entry/>
      <Entry/>
    </>
  )
}

export default App
