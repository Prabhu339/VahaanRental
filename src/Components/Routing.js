import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import SportsbikeView from './Sport'
import Cruciers from './Cruciers'
import Electric from './Electric'
import Scooter from './Scooter'
import About from './About'
import Contact from './Contact'
import Bolg from './Bolg'
import AddBlog from './AddBlog'
import Join from './Join'
import AddScooter from './AddScooter'
import AddCruiser from './AddCruiser'
import AddElectric from './AddElectric'
import AddSports from './AddSport'
import CruiserView from './CruiserView'
import ElectricView from './ElectricView'
import ScooterView from './ScooterView'
import SportsView from './SportsView'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sports" element={<SportsbikeView/>}/>
            <Route path="/cruciers" element={<Cruciers/>}/>
            <Route path="/electric" element={<Electric/>}/>
            <Route path="/scooter" element={<Scooter/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/blog" element={<Bolg/>}/>
            <Route path="/addblog" element={<AddBlog/>}/>
            <Route path="/join" element={<Join/>}/>
            <Route path="/cruiserview/:_id" element={<CruiserView/>}/>
            <Route path="/addscooter" element={<AddScooter/>}/>
            <Route path="/addcruiser" element={<AddCruiser/>}/>
            <Route path="/addelectric" element={<AddElectric/>}/>
            <Route path="/addsport" element={<AddSports/>}/>
            <Route path="/electricview/:_id" element={<ElectricView/>}/>
            <Route path="/sportview/:_id" element={<SportsView/>}/>
            <Route path="/scooterview/:_id" element={<ScooterView/>}/>
        </Routes>
    </div>
  )
}

export default Routing