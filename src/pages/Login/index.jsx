import React, { useState } from 'react';

const Login = () => {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
    }


    return (
        <>
        <div>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="">Username:</label>
                <input onChange={(e) => {
                    setUsername(e.target.value)
                    console.log(e.target.value);
                }} value={username} type="text" />
                <label htmlFor="">Password:</label>
                <input value={password} onChange={(e) => {
                    setPassword(e.target.value)
                    console.log(e.target.value);
                }} type="password" />

                <button type='submit'>Login</button>
            </form>
        </div>
        </>
    );
}

export default Login;
