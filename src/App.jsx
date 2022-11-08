import React from 'react'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import "./components/5-Calendar/calendar.css"
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
      <Calendar/>
      </div>
  )
}

export default App