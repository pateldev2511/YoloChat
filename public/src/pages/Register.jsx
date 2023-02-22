import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRount } from "../utils/APIRountes";
function Register() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        
    });

    const toastOptions={
        position: "bottom-right",
        autoClose: 7000,
        pauseOnHold: true,
        draggable: true,
        theme: "dark",
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submited succesfully!");
        if (handleValidation()) {
            console.log("In Validation", registerRount);
            const { username, email, password, confirmpassword } = values;
            const { data } = await axios.post(registerRount,{username,email,password,});
        }
    };

    const handleValidation = () => {
        const { username, email, password, confirmpassword } = values
        if (password !== confirmpassword) {
            toast.error("🛑Passwords Don't Match!🛑", toastOptions);
            return false;
        } else if (username.length < 3) {
            toast.error(
                "🛑Username should contain more than 3 characters!🛑", toastOptions);
            return false;
        } else if (email ==="") {
            toast.error(
                "🛑 Valid Email is Required!🛑", toastOptions);
            return false;
        }
        else if (password.length < 8) {
            toast.error(
                "🛑 Password should contain at least 8 characters!🛑", toastOptions);
            return false;
        }
        return true;
    };
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    return (
      <>
      <FormContainer>
          
          <form onSubmit={(event) => handleSubmit(event)}>
              <div className='brand'>
                  <img src={Logo} alt="Logo" srcset="" />
                  <h1>Welcome to YoloChat</h1>
              </div>
              <input type="text"
                  name="username"
                  placeholder='Username'
                  id=""
                  onChange={(e) => handleChange(e)} />
              <input type="email"
                  name="email"
                  placeholder='Email'
                  id=""
                  onChange={(e) => handleChange(e)} />
              <input type="password"
                  name="password"
                  placeholder='Password'
                  id=""
                  onChange={(e) => handleChange(e)} />
              <input type="password"
                  name="confirmpassword"
                  placeholder='Confirm Password'
                  id=""
                  onChange={(e) => handleChange(e)} />
              <button type="submit">Create User</button>
              <span>Already have an account? <Link to="/login">LogIn</Link></span>
          </form>
      </FormContainer>
            <ToastContainer />
            </>
  )
}

const FormContainer = styled.div`
height: 100vh;
width:  100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background-color:#121324;
.brand{
    display: flex;
    aligin-item: center;
    gap: 1rem;
    justify-content: center;
    img{
        height:5rem;

    }
    h1{
        color: white;
        text-treasform: uppercase;
    }
    
}
form{
    display:flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input{
        background-color: transparent;
        padding: 1rem;
        border: 0.1rem solid #4e0eff;
        border-radius: 0.4rem;
        color: white;
        width: 100%;
        font-size: 1rem;
        &:focus{
            border: 0.1rem solid #997af0;
            outline: none;
        }
    }
    button{
        background-color: #997af0;
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
            background-color: #4e0eff;
        }
    }
    span{
        color: white;
        text-transform: uppercase;
        text-align: center;
        a {
            color: #4e0eff;
            text-decoration:none;
            font-weight: bold;
        }
    }
}
`;



export default Register