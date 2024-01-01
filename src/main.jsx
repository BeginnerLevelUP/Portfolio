import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import './index.css'

//Pages
import AboutMePage from './pages/AboutMePage.jsx';
import ContactPage from './pages/contactPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ResumePage from './pages/resumePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

//Routes
const  router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        errorElement: <ErrorPage />,
        children:[
            {
                index:true,
                element:<AboutMePage />
            },
            {
                path:'/portfolio',
                element:<PortfolioPage />
            }, 
            {
                path: '/resume',
                element: <ResumePage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
        ]
    }
])

//Render
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

