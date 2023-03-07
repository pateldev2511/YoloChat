import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { allUsersRoute, host } from "../utils/APIRoutes";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Contacts from '../components/Contacts';
import Welcome from '../components/Welcome';
import ChatContainer from '../components/ChatContainer';
import { io } from "socket.io-client";
import Particles from '../components/Particle'

function Chat() {
  const socket = useRef();
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  

  
  useEffect( () => {
    async function fetchData() {
      if (!localStorage.getItem("yolo-chat-user")) {
        navigate('/login');
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("yolo-chat-user")));
        setIsLoaded(true);
      }
    }
    fetchData();
}, [navigate]);

useEffect(()=>{
  if (currentUser) {
    socket.current= io(host);
    socket.current.emit("add-user", currentUser._id);
  }
},[currentUser])
useEffect(() => {
  async function fetchData() {
    if (currentUser) {
      if (currentUser.isAvatarImageSet) {
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data);
      } else {
        navigate('/setAvatar');
      }
      
    }
    
  }
  fetchData();
}, [currentUser, navigate]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  }
  return (
    <>
  <Particles />
    <Container>
      <div className="container">
      
          <Contacts 
          contacts={contacts} 
          currentUser={currentUser} 
          changeChat={handleChatChange} 
          />
          {isLoaded && currentChat === undefined ? (
          <Welcome currentUser={currentUser}
            /> ): (
            <ChatContainer currentChat={currentChat} currentUser={currentUser} socket={socket}/>
            )}
          
      </div>
      
      </Container>
      </>
  )
  
}

const Container = styled.div`
height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  position: relative;
  z-index: 1;
  gap: 1rem;
  align-items: center;
  .loader{
    max-inline-size:100%;
}
  .container {
    border-radius: 10px 10px 10px 15px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    height: 85vh;
    width: 85vw;
    background-color:#FFFFFF;
    opacity: 0.95;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
  #tsparticles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`
;

export default Chat;