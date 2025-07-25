import { useState } from 'react'
import NavBar from './assets/components/Navbar/NavBar'
import HeroSec from './assets/components/Hero/HeroSec'
import Porto from './assets/components/Portofolio/Porto'
import About from './assets/components/About/About'
import Contact from './assets/components/Contact/Contact'
import Footer from './assets/components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import NotFound from './assets/components/NotFound/NotFound'
import Home from './assets/components/HomePage/Home'
function App() {
  return (
    <>
<NavBar/>
<Routes>
<Route path='/' element={<Home/>
}></Route>
<Route path='/portfolio' element={<Porto/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='*' element={<NotFound/>}></Route>
</Routes>

<Footer/>
    </>
  )
}

export default App
