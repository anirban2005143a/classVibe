import Navbar from '../../components/navbar/Navbar';
import React, { useEffect } from 'react'

const ImgGen = () => {

    
    const generateImg = async () => {
        const resp = await fetch('https://api.deepai.org/api/text2img', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'ff082801-d932-47f4-a7b8-32fd9d75986f'
            },
            body: JSON.stringify({
                text: "image of a cat",
            })
        });
        
        const data = await resp.json();
        console.log(data);
    }


    useEffect(() => {
        generateImg()
    }, [])
    
    return (
        <div>
            <Navbar/>
        </div>
    )
}

export default ImgGen