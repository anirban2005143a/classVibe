import Navbar from '../../components/navbar/Navbar'
import React, { useEffect, useRef, useState } from 'react'
import muteImg from "../../assets/imgs/volume-mute.png"
import stopCamera from "../../assets/imgs/no-video.png"
import endCallImg from "../../assets/imgs/end-call-icon.png"

const VideoCall = () => {

    const ownerVideoRef = useRef(null)
    const [stream, setstream] = useState(null)

    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).
            then((mediaStream) => {
                document.querySelector("video").srcObject = mediaStream
                setstream(mediaStream)
                console.log(mediaStream)
            })
    }

    useEffect(() => {
        if (ownerVideoRef.current) {
            startVideo()
        }
    }, [ownerVideoRef.current])


    return (
        <div id='VideoCall'>
            <Navbar />
            <div className='mx-auto w-full md:p-4 px-2 py-4 h-screen'>
                <div className="video w-full h-[90%]">
                    <video ref={ownerVideoRef} id='ownerVideo' autoPlay muted className=' object-cover w-full h-full'></video>
                </div>
                <div className="controlers w-[80%] mx-auto my-4 py-2 px-6 rounded-lg flex justify-between items-center bg-slate-200">
                    <div className="mute">
                        <button>
                            <img src={muteImg} alt="Mute Yourself" className='w-6 ' />
                        </button>
                    </div>

                    <div className="end">
                        <button>
                            <img src={endCallImg} alt="Mute Yourself" className='w-6 ' />
                        </button>
                    </div>
                    <div className="camera">
                        <button>
                            <img src={stopCamera} alt="Mute Yourself" className='w-6 ' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCall