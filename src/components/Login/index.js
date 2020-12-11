import React, { useState } from 'react';
import axios from 'axios';
//import { useDispatch } from 'react-redux';



const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //const dispatch = useDispatch();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        let login = {};

        
        login.username= username;
        login.password= password ;

        console.log(login);

         const response = await axios.post('https://fullstack.exercise.applifting.cz/login', login, {
            headers: {
              'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff'
            }},);


        props.setToken(response.data.access_token)

        localStorage.setItem('token', response.data.access_token)
        console.log(response.data)
            



    }

    return (
        <div>
            Login

            <form onSubmit={handleSubmit}>
                <label name='username'>
                    Username
                    <input type='text' name='username' onChange={ handleUsernameChange }/>
                </label>
                <label name='password'>
                    Password
                    <input type='password' name='password' onChange={ handlePasswordChange }/>
                </label>
                <button>Log In</button>
            </form>
        </div>
        );
}

export default Login;