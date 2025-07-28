import { use, useEffect, useState } from "react";

export default function Bg() {
    const [bgImage, setBgImage] = useState("");
    const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

    useEffect(() => {
        const fetchBgImage = async () => {
            try {
                const response = await fetch(
                    `https://api.unsplash.com/photos/random?query=minimalist,summer,nature,morning&orientation=landscape&client_id=${accessKey}`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setBgImage(data.urls.full);
            } catch (error) {
                console.error("Error fetching background image:", error);
            }
        };
        fetchBgImage();
        }, [accessKey]);
    return (
        <div className="bg"
        style ={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "green",
             }}>
                <h1> UNA CITA UN CAFÉ UNA MANZANA</h1>
        </div>
    );
            
         
}