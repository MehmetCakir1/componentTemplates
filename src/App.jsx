import React from 'react'
import "./App.css"
import ProgressBar from './components/1-Progress-Bar/ProgressBar'
import Accordion from './components/2-Accordion/Accordion'
import Image from './components/3-Image/Image'
import Datepicker from './components/4-Date Picker/Datepicker'

const App = () => {
  return (
    <div>
      <ProgressBar/>
      <Accordion/>
      <Image/>
      <Datepicker/>
      </div>
  )
}

export default App