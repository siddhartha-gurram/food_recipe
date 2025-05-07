import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'; // adjust the path as needed
import Footer from './Footer';



export default function MainNavigation() {
    return (
        <> 
         <Navbar/>
         <Outlet/>
         <Footer/>
        </>
    )
}