import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { HiOutlineLogout } from "react-icons/hi";

export default function Logout() {
    const navigate = useNavigate();
    const handleClick = async () =>{
        localStorage.clear();
        navigate('/login');
    };
  return (
    <Button onClick={handleClick}>

        <span>Logout</span> <HiOutlineLogout/>
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto;
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 0px 0px;
  background-color: #e6e7e9;
  border: none;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1.2rem;
    color: #2375FC;
    svg {
        font-size: 1.2rem;
        color: #2375FC;
      }
`;