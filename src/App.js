import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App