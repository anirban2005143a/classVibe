import Navbar from '../../components/navbar/Navbar';
import React, { useEffect } from 'react'
import { HfInference } from "@huggingface/inference";
const ImgGen = () => {


    const generateImg = async (prompt) => {


        // const client = new HfInference("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");

        // const response = await client.textToImage({
        //     model: "stabilityai/stable-diffusion-3.5-large",
        //     inputs: "Astronaut riding a horse",
        //     parameters: { num_inference_steps: 5 },
        //     provider: "hf-inference",
        // });
        // /// Use the generated image (it's a Blob)
        // console.log(response)
        // const imageBlob = new Blob([response], { type: "image/png" });
        // const imageUrl = URL.createObjectURL(imageBlob);

        // document.querySelector("img").src = imageUrl;
        // console.log(imageUrl)
        // console.log("Image generated successfully!");


        const API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large";
        const API_KEY = "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";


        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ inputs: prompt })
            });
                console.log(response)
            if (!response.ok) throw new Error("Failed to generate image");

            const blob = await response.blob();

            // Create a downloadable link
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            console.log(url)
            link.href = url;
            link.download = "output.png";
            link.click();

            console.log("Image downloaded");
        } catch (error) {
            console.error("Error:", error.message);
        }


    }


    useEffect(() => {
        generateImg("A futuristic city at sunset with flying cars")
    }, [])

    return (
        <div>
            <Navbar />
            <img alt="" />
        </div>
    )
}

export default ImgGen