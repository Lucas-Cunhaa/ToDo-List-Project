import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import ToDoPage from './pages/ToDoPage.tsx'
import FormAddMember from './components/FormAddMember.tsx'
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
    element: <ToDoPage />
  } ,
  {
    path: "/toDo",
    element: <FormAddMember />
  }
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
