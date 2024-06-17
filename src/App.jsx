 import React from 'react'
 import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
 import HomePage from "./pages/HomePage"
 import MainLayout from './layout/mainLayout'
 import NotFoundPage from './pages/NotFoundPage'
 import JobsPage from './pages/JobsPage'
import JobListings from './components/JobListing'
 
 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobspage'  element={<JobsPage/>}/>
      <Route path='*'  element={<NotFoundPage/>}/>
    </Route>
 )
)
const App = () => { 
  return <RouterProvider router={router}/>
 }
 export default App