 import React from 'react'
 import Navbar from './components/Navbar'
 import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
 
 const App = () => {
   return (
    <>
    <Navbar/>
    <Hero  title = 'Become a React Dev Anywhere'
    subtitle = 'Find the React job that fits your skill set'/>
    <HomeCards/>

    </>
     
   )
 }
 
 export default App