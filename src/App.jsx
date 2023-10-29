import { useState } from 'react'
import React from 'react';
import './sass/App.scss'
import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error';
import Project from './pages/Project';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import ProjectAll from './pages/ProjectAll';
import ProjectAll2 from './pages/ProjectAll2';
import ProjectAll3 from './pages/ProjectAll3';
const DAshboard = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <DAshboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project",
        element: <Project/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contacts", 
        element: <Contacts/>,
      },
      {
        path: "/project/all",
        element: <ProjectAll/>,
      },
      {
        path: "/project/all2",
        element: <ProjectAll2/>,
      },
      {
        path: "/project/all3",
        element: <ProjectAll3/>,
      },
    ]
  },
  {
    path: "*",
    element: <Error />,
  }
])



function App() {

  return (
    <div className="wrapper">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
