import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import loader from "../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setAvatarRoute } from "../utils/APIRoutes";
import { Buffer } from "buffer";

export default function SetAvatar() {
    const api = "https://api.multiavatar.com/45678945?apikey=CuUvTy0lw6mLJa"; 
    const navigate = useNavigate();
    const [avatars, SetAvatar] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(undefined);

    const toastOptions={
        position: "bottom-right",
        autoClose: 7000,
        pauseOnHold: true,
        draggable: true,
        theme: "dark",
    }

    const setProfilePicture = async () => { };

    useEffect( () => {
        async function fetchData() {
            const data = [];
            for (let i = 0; i < 4; i++) {
              const image = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`);
              const buffer = new Buffer(image.data);
              data.push(buffer.toString("base64"));
            };
            SetAvatar(data);
            console.log("Data Array: ",data);
            setIsLoading(false);
          }
          fetchData();
        
    }, []);
    return (
        <>
            <Container>
                <div className="title-container">
                <h1>Pick an avatar as yourt Profile 😀</h1>
            </div>
                <div className="avatars">
                    {avatars.map((avatar, index) => {
                    
                    return (
                        <div
                            key={index}
                            className={`avatar ${selectedAvatar === index ? "selected" : ""
                                }`}
                        >
                            <img src={`data:image/svg+xml;base64,${avatar}`}
                                alt="avatar"
                            onClick={()=>setSelectedAvatar(index)}
                            />
                            </div>
                    );
                    })}
                </div>
            </Container>
            
            <ToastContainer />
        </>
    )
}

const Container = styled.div``;