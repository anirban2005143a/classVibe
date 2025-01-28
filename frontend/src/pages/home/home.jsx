import React, { useEffect, useRef } from 'react'
import studyDeskImg from "../../assets/imgs/studyDesk.png"
import gsap from 'gsap'
import Loader from '../../components/loader/Loader'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {


  useEffect(() => {
    gsap.from("#home .introHeading", {
      x: -100,
      opacity: 0,
      duration: 0.5,
      delay: 0.2
    })
    gsap.from("#home .introPara", {
      x: 100,
      opacity: 0,
      duration: 0.5,
      delay: 0.4
    })
    gsap.from("#home .startButton", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      delay: 0.5
    })
    gsap.from("#home .studyDeskImg", {
      scale: 0,
      duration: 0.5
    })

  }, [])

  return (
    <>
      <div id="home">
        <Navbar/>
        <div id="landingPage" className=' py-7 relative min-h-screen w-full bg-[#fff1e4] ' >
          <div className='studyDeskImg  py-7  w-full h-full flex justify-end items-center'>
            <div className='md:w-6/12 sm:w-8/12 w-11/12 overflow-x-hidden'>
              <img src={studyDeskImg} alt="studyDesk" className='object-cover h-full' />
            </div>
          </div>

          <div className=' intro absolute w-full h-full top-0 left-0 flex justify-start items-center'>
            <div className=' p-4 md:w-5/12 sm:w-8/12 w-full '>
              <h2 className=' introHeading nunito text-5xl font-bold p-4'>
                <span className=' bg-[#fff1e4]'>CLASS VIBE</span>
              </h2>
              <p className='introPara nunito text-base p-4'>
                <span className=' bg-[#fff1e4]'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae numquam pariatur, voluptates sequi nostrum
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae numquam pariatur, voluptates sequi nostrum
                </span>
              </p>

              <div className='startButton'>
                <button
                  className="relative  m-4 flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                >
                  <span
                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                  >
                    <span
                      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#fff1e4]"
                    ></span>
                  </span>
                  <span
                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                  >
                    <span
                      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#fff1e4]"
                    ></span>
                  </span>
                  <span
                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                  ></span>
                  <span
                    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                  >Get Started</span
                  >
                </button>
              </div>

            </div>
          </div>
        </div>

        <div className="features">
          <div className="liveClasses"></div>
          <div className="graphAndChart"></div>
          <div className="3dModels"></div>
          <div className="chatBox"></div>
        </div>
      </div>

    </>
  )
}

export default Home