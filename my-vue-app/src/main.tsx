import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import HomePage from './pages/HomePage.tsx'
import FormAddList from './components/FormAddList.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    
   
  },
  {
    path: "/register",
    element: <RegisterPage />
  } ,
  {
    path: "/home",
    element: <HomePage />
  } ,
  {
    path: "/addList",
    element: <FormAddList />
  }
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
