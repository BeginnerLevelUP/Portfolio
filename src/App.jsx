import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
//importing all my components
import Header from './components/header';
import Navbar from './components/Navbar';

import Footer from './components/footer';
function App() {
return(
    <>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
    </>
)

}

export default App
