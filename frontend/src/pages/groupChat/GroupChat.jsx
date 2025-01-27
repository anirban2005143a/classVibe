import React from 'react'
import sendIcon from "../../assets/imgs/send-message.png"

const GroupChat = () => {
  return (
    <div id='GroupChat' className='z-10 md:w-4/12 w-full h-full pt-2 px-2 flex flex-col'>
        <div className='allChats h-full w-full bg-slate-300'></div>
        <div className='textInput w-full flex items-center'>
            <input className='w-full p-2 m-2 ms-0 text-base border-[2px]' placeholder="write message" />
            <button className='sendChat'>
                <img src={sendIcon} alt="Send" className='w-7'/>
            </button>
        </div>
    </div>
  )
}

export default GroupChat