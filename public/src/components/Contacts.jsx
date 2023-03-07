import React, { useEffect, useState} from 'react'
import styled from 'styled-components';
import Logo from "../assets/logo.png";

import BgLogout from './BgLogout';

function Contacts({ contacts, currentUser, changeChat }) {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);

    useEffect(() => {
        
        if (currentUser) {
            setCurrentUserImage(currentUser.avatarImage);
            setCurrentUserName(currentUser.username);
        }
    }, [currentUser]);
    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        changeChat(contact);
     };
        return (
            <>
                {currentUserImage && currentUserImage && (
        <Container>
        <div className="brand">
          <img src={Logo} alt="logo" />
          <h3>YoloChat</h3>
        </div>
        <div className="contacts">
          {contacts.map((contact, index) => {
            return (
              <div
                key={contact._id}
                className={`contact ${
                  index === currentSelected ? "selected" : ""
                }`}
                onClick={() => changeCurrentChat(index, contact)}
              >
                <div className="avatar">
                  <img
                    src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                    alt=""
                  />
                </div>
                <div className="username">
                  <h3>{contact.username}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="current-user">
          <div className="avatar">
            <img
              src={`data:image/svg+xml;base64,${currentUserImage}`}
              alt="avatar"
            />
          </div>
          <div className="username">
            <h2>{currentUserName}</h2>
          </div>
          
        </div>
        <div className="logout">
            
            <BgLogout/>
          </div>
          
        
      </Container>
      )}
            </>
        );  
}

const Container = styled.div`
display: grid;
border-radius: 10px 30px 0px 10px;
border-right: 2px solid #E6E7E9;
grid-template-rows: 10% 70% 15% 5%;
overflow: hidden;
background-color: #F6F6F6;
.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  img {
    height: 3.5rem;
  }
  h3 {
    color: #404040;
    text-transform: uppercase;
  }
}
.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  gap: 0.8rem;
  &::-webkit-scrollbar {
    width: 0.2rem;
    &-thumb {
      background-color: #FFFFFF;
      width: 0.1rem;
      border-radius: 2rem;
    }
  }
  .contact {
    background-color: #e6e7e9;
    min-height: 5rem;
    cursor: pointer;
    width: 90%;
    border-radius: 10px;
    padding: 0.4rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    transition: 0.5s ease-in-out;
    .avatar {
      img {
        height: 3rem;
      }
    }
    .username {
      h3 {
        color: #404040;
        
      }
      
    }
  }
  .selected {
    background-color:#0161FF;
    color: #FFFFFF;
  }
  
}
.current-user {
  border-radius: 0px 0px 0px 0px;
  background-color:#2375FC;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .avatar {
    img {
      height: 4rem;
      max-inline-size: 100%;
    }
  }
  .username {
    h2 {
      color: #FFFFFF;
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    gap: 0.5rem;
    .username {
      h2 {
        font-size: 1rem;
      }
    }
  }
}
.logout {
  color: #404040;
  display: flex;
  
    justify-content: space-between;
    align-items: center;
    
    button {
      width: 100%;
    }
}
  `;

export default Contacts;