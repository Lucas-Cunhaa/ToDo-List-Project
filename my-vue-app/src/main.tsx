import './index.css'
import { TaskProvider } from './components/useContext.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import HomePage from './pages/HomePage.tsx'
import ToDoPage from './pages/ToDoPage.tsx'

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
    path: "/tasks",
    element: <ToDoPage />
  } ,
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskProvider> <RouterProvider router={router}/> </TaskProvider>
  </React.StrictMode>,
)
