import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "./context/userContext";
import About from "./pages/about";
import Home from "./pages/home";

function App() {

  //router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/home",
      element: <Home />
    },
  ])

  return (
    <UserContext.Provider value={{}}>
      <RouterProvider router={router} />
    </UserContext.Provider>

  )
}

export default App
