import React from 'react'
// import StudyDesk from './StudyDesk'
import studyDeskImg from "../../assets/studyDesk.png"

const Home = () => {
  console.log(window.innerWidth)
  return (
    <>
      <div id="home">
        <div id="landingPage" className=' relative overflow-x-hidden w-full h-screen bg-[#fff1e4] ' >
          <div className='studyDeskImg w-full h-full flex justify-end items-center'>
            <img src={studyDeskImg} alt="studyDesk" className='md:w-6/12 sm:w-8/12 w-11/12 object-cover ' />
          </div>

          <div className=' absolute w-full h-full top-0 left-0 flex justify-start items-center'>
            <div className=' p-4 md:w-7/12 sm:w-10/12 w-full '>
              <h2 className=' lora text-5xl font-bold'>CLASS VIBE</h2>
              <p className='nunito text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae numquam pariatur, voluptates sequi nostrum </p>

              <button
                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
              >
                <span
                  className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                >
                  <span
                    className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                  ></span>
                </span>
                <span
                  className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                >
                  <span
                    className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
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

    </>
  )
}

export default Home