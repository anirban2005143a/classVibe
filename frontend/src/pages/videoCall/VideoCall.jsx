import Navbar from '../../components/navbar/Navbar'
import React, { useEffect, useRef , useState } from 'react'

const VideoCall = () => {

    const ownerVideoRef = useRef(null)
    const [stream, setstream] = useState(null)
    
    const startVideo = ()=>{
        navigator.mediaDevices.getUserMedia({video : true , audio:true}).
        then((mediaStream)=>{
            document.querySelector("video").srcObject = mediaStream
            setstream(mediaStream)
            console.log(mediaStream)
        })
    }

    useEffect(() => {
        if(ownerVideoRef.current){
            startVideo()
        }
    }, [ownerVideoRef.current])
    

    return (
        <div id='VideoCall'>
            <Navbar/>
            <div className='mx-auto flex justify-center items-center md:w-9/12 sm:w-10/12 w-full p-4 h-screen'>
                <div className="video w-full h-[90%]">
                    <video ref={ownerVideoRef} id='ownerVideo' autoPlay muted className=' w-full max-h-full'></video>
                </div>
                <div className="controlers">
                    <div className="mute"></div>
                    <div className="camera"></div>
                    <div className="end"></div>
                </div>
            </div>
        </div>
    )
}

export default VideoCall