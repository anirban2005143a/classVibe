import Navbar from '../../components/navbar/Navbar'
import React, { useEffect, useRef, useState } from 'react'
import muteImg from "../../assets/imgs/volume-mute.png"
import stopCamera from "../../assets/imgs/no-video.png"
import endCallImg from "../../assets/imgs/end-call-icon.png"
import GroupChat from '../groupChat/GroupChat'

import { io } from 'socket.io-client'

const VideoCall = () => {

    const ownerVideoRef = useRef(null)
    const [stream, setstream] = useState(null)
    const [isowner, setisowner] = useState(null)
    const socket = io(`${import.meta.env.VITE_REACT_BACKEND_URL}`)

    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).
            then((mediaStream) => {
                document.querySelector("video").srcObject = mediaStream
                setstream(mediaStream)
                console.log(mediaStream)
            })
    }

    const createRoom = ()=>{
        const roomNo = window.location.pathname.split("?")[1]
        socket.emit("createRoom" , {roomNo , peerId : 123})
        setisowner(true)
    }

    const joinRoom = ()=>{
        const roomNo = window.location.pathname.split("?")[1]
        socket.emit("joinRoom" , roomNo)
    }

    useEffect(() => {
        if (ownerVideoRef.current) {
            startVideo()
        }
    }, [ownerVideoRef.current])


    return (
        <div id='VideoCall'>
            <Navbar />

            <div className='flex md:flex-row flex-col items-start justify-center h-screen'>
                <div className='mx-auto w-full md:p-2 px-2 py-4 h-full stream'>
                    <div className="video w-full h-[90%]">
                        <video ref={ownerVideoRef} id='ownerVideo' autoPlay muted className=' relative z-[1] object-cover w-full h-full'></video>
                    </div>
                    <div className="controlers w-[300px] my-4 py-2 px-6 rounded-lg flex justify-between items-center bg-slate-200">

                        <button className="mute">
                            <img src={muteImg} alt="Mute Yourself" className='w-6 ' />
                        </button>

                        <button className="end">
                            <img src={endCallImg} alt="Mute Yourself" className='w-6 ' />
                        </button>

                        <button className="camera">
                            <img src={stopCamera} alt="Mute Yourself" className='w-6 ' />
                        </button>

                    </div>
                </div>
                <GroupChat />
            </div>
        </div>
    )
}

export default VideoCall