import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "./context/userContext";
import Home from "./pages/home/home";

function App() {

  //router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
  ])

  return (
    <UserContext.Provider value={{}}>
      <RouterProvider router={router} />
    </UserContext.Provider>

  )
}

export default App
