import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css'

// Set Root as the root route's element
import Root from "./routes/root";

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
