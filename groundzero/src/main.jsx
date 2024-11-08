import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MentorPage from './pages/MentorPage'
import About from './components/About'
import Timeline from './components/Timeline'
import Prizes from './components/Prizes'
import Eligibility from './components/Eligibility'
import EventSchedule from './pages/EventSchedule'
import Benefits from './components/Benefits'
import FAQ from './components/Faq';
import ContactUs from './components/ContactUsTemp'
import PartnersBeforeEvent from './pages/PartnersBeforeEvent'

import StatementDetails from './components/ProblemStatements/problem-statement-components/StatementDetails'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Partners } from './components'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/problems/:id",
    element: <StatementDetails />,
  },
  {
    path: "/mentors",
    element: <MentorPage />,
  },
  {
    path: "/aboutus",
    element: <About />,

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
    path: "/benefits",
    element: <Benefits/>
  },
  {
    path: "/faq",
    element: <FAQ/>
  }, 
  {
    path: "/contactus",
    element: <ContactUs/>
  },
  {
    path: "/partners",
    element: <PartnersBeforeEvent/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
