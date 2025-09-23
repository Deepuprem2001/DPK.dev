import React from 'react'
import NavigationBar from './sections/NavigationBar'
import MainSection from './sections/MainSection'
import AboutMe from './sections/AboutMe'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import ScrollAnimation from './component/ScrollAnimation'
import Journey from './sections/Journey'
import ContactMe from './sections/ContactMe'
import './css/App.css'


function App() {
  return (
    <div>
      <NavigationBar />
      <section id='mainsection'><MainSection /></section>

      <ScrollAnimation direction='up'><section id="about"><AboutMe /></section></ScrollAnimation>
      <ScrollAnimation direction='up'><section id="experience"><Experience /></section></ScrollAnimation>
      <ScrollAnimation direction='up'><section id="skills"><Skills /></section></ScrollAnimation>
      <ScrollAnimation direction='up'><section id="projects"><Projects /></section></ScrollAnimation>
      <ScrollAnimation direction='up'><section id="journey"><Journey /></section></ScrollAnimation>
      <ScrollAnimation direction='up'><section id="contact"><ContactMe /></section></ScrollAnimation>
    </div>
  )
}

export default App
