import React, { useState,useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (username && password) {
            setUser({username,password})
        }
        else{
            setError("Please fill out all fields.")
        }
        
    }

    return (
        <div>
            <h1>Login</h1>
            <input 
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
            <br/>
            <input 
            type='text'
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <br/>
            <button onClick={handleSubmit}>Login</button>
            <br/>
        </div>
    );
}

export default Login;
