import React from 'react'
import styled from 'styled-components';
import Robot from "../assets/robot.gif";

export default function Welcome({ currentUser }) {
  return (
      <>
          <Container>
          
          <span className='app-name'>YoloChat</span>
              <img src={Robot} alt="Robot" />
              <h2>Welcome, <span className='currentuser'>{currentUser.username}!😁</span></h2>
              <p>Please Click on the Friend you want to Talk with!</p>
      </Container>
      </>
  )
}


const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  border-radius:10px;
  color: black;
  background-color:#f0f0f0;
  flex-direction: column;
  img {
    height: 30rem;
  }
  .currentuser {
    color: #0161FF;
  }
  .app-name{
    color: #111; font-family: 'Helvetica Neue', sans-serif; font-size: 75px; font-weight: bold; letter-spacing: -1px; line-height: 1; text-align: center;
  }
  
`;