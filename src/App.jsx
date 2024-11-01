import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Supplier from './components/Supplier/Supplier'
import PetrolImages from './components/Petrolimages/PetrolImages'
import Services from './components/Services/Services'
import Learn from './components/Learn/Learn'
import Logos from './components/Logos/Logos'
import ReadBlog from './components/ReadBlog/ReadBlog'
import Location from './components/Location/Location'
import Join from './components/Join/Join'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
      <PetrolImages />
      <Services />
      <Learn/>
      <Logos/>
      <ReadBlog/>
      <Location/>
      <Join/>
    </>
  )
}

export default App
