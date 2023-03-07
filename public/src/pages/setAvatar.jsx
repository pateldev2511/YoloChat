import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import loader from "../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setAvatarRoute } from "../utils/APIRoutes";
import { Buffer } from "buffer";
import Particles from '../components/Particle';
export default function SetAvatar() {
    const api = "https://api.multiavatar.com/"; 
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

    useEffect(() => {
        async function fetchData() {
            if (!localStorage.getItem("yolo-chat-user")) {
                navigate('/login');
            }
        }
        fetchData();
    }, [navigate]);

    const setProfilePicture = async () => { 

        if (selectedAvatar === undefined) {
            toast.error("Please Select a Profile Pic!", toastOptions);
        } else {
            const user = await JSON.parse(localStorage.getItem("yolo-chat-user"));
            const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
                image: avatars[selectedAvatar],
            });

            if (data.isSet) {
                user.isAvatarImageSet = true;
                user.avatarImage = data.image;
                localStorage.setItem("yolo-chat-user", JSON.stringify(user));
                navigate('/');
            } else {
                toast.error("Error setting avatar. Please try again", toastOptions);
            }
        }
    };

    useEffect(() => {
        const data = [];
        async function fetchData() {
            
            for (let i = 0; i < 4; i++) {
                const image = await axios.get(`${api}/${Math.round(Math.random() * 12511)}`);
              const buffer = new Buffer(image.data);
              data.push(buffer.toString("base64"));
            };
            SetAvatar(data);
            
            setIsLoading(false);
          }
          fetchData();
        
    }, []);
    return (
        <>
        <Particles />
            {isLoading ?  <Container>
            <img src={loader} alt="loader" className="loader" />
            </Container> : (
                    
            
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
                <button className="submit-btn" onClick={setProfilePicture()}>Set as Profile!</button>
            </Container>
                    )}
            
            <ToastContainer />
        </>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
backdrop-filter: blur(1px);
position: relative;
opacity: 0.85;
gap: 3rem;
height:100vh;
width: 100vw;
.loader{
    max-inline-size:100%;
}

.title-container{
    h1{
        color: #404040;
    }
}
.avatars{
    display: flex;
    gap: 2rem;
    .avatar{
        border: 0.4rem solid transparent;
        padding: 0.4rem;
        border-radius: 5rem;
        justify-content: center;
        align-items: center;
        transition: 0.5s ease-in-out;
        img{
            height: 6rem;
        }
    }
    .selected{
        border: 0.4rem solid #4e0eff;
    }
    
}
.submit-btn{
        background-color: #007FFF;
        color: white;
        padding: 1rem 2rem;
        border: none;
        font-wieght: bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover{
            background-color: #0161FF;
        }
`;