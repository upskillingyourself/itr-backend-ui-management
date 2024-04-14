import React from 'react'
import Footer from '../../shared/Footer'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import Features from '../../components/Features'
import Faq from '../../components/Faq'
import Hero from '../../components/Hero'

import Auth from '../../components/Auth'
import Contact from '../../components/Contact'
import About from '../../components/About'


const Home = () => {
    return (
        <>
           <Hero/>
           <Features/>
           <Faq/>
           <Contact/>
           <About/>

           {/* <Auth/> */}
        </>
    )
}

export default Home
