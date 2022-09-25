import React, {useState} from 'react'
import Contacto from '../components/Contacto/Contacto';
import { Footer } from '../components/Footer';

import Hero from '../components/Hero/Hero'

import Navbar from '../components/Navbar'
import Nosotros from '../components/Nosotros/Nosotros';
import Productos from '../components/Productos/Productos';

import Sidebar from '../components/SideBar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero/>
      <Nosotros/>
      <Productos/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default Home
