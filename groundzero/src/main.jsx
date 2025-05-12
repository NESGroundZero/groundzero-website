import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Eligibility, StakeholdersPage, About, Timeline, Prizes, EventSchedule, ContactUs, SponsorsPage, Faq } from './components'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/stakeholders",
    element: <StakeholdersPage />,
  },
  {
    path: "/aboutus",
    element: <About />,
  },
  {
    path: "/eligibility",
    element: <Eligibility />,
  },
  {
    path:"/timeline",
    element: <Timeline/>
  },
  {
    path:"/prizes",
    element: <Prizes/>
  },
  {
    path:"/eventschedule",
    element: <EventSchedule/>
  },
  {
    path: "/faq",
    element: <Faq/>
  }, 
  {
    path: "/contactus",
    element: <ContactUs/>
  },
  {
    path: "/partners",
    element: <SponsorsPage/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
