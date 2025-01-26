import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "./context/userContext";
import Home from "./pages/home/home";
import ImgGen from "./pages/ImgGen/ImgGen";
import VideoCall from "./pages/videoCall/VideoCall";

function App() {

  //router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/imggen",
      element: <ImgGen />
    },
    {
      path: "/videoCall",
      element: <VideoCall />
    },
  ])

  return (
    <UserContext.Provider value={{}}>
      <RouterProvider router={router} />
    </UserContext.Provider>

  )
}

export default App
