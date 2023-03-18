import Axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
const Register = () => {

    const [usernameReg, setUsernameReg] = useState('');  //for register
    const [passwordReg, setPasswordReg] = useState('');
    const [phonenumReg, setPhonenumReg] = useState('');

    const [registerMessage, setRegisterMessage] = useState('');


    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReg,                              //sending to backend
            password: passwordReg,

        }).then((response) => {
            if (response.data === 'Username already taken') {
                console.log(response);
                setRegisterMessage(response.data);
            }
            else if (response.data === 'SignUp successful') {
                setRegisterMessage(response.data);
                setTimeout(() => {
                    window.location.href = 'http://localhost:3000/login';
                }, 1000)

            }

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (<>
        <div className="registration text-center container mx-auto bg-[#F2EEDB] rounded-xl shadow border p-6 m-6">
            <h1 className="text-3xl text-gray-700 font-bold mb-5">SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='usernameReg' className='mr-2'>Enter Username :</label>
                    <input type="text" className="rounded-xl box-border h-11 w-150 pl-2 mt-2" required id="usernameReg" name="usernameReg" placeholder='Username...' value={usernameReg} onChange={(e) => setUsernameReg(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='passwordReg' className='mr-2'>Enter Password :</label>
                    <input type="text" className="rounded-xl box-border h-11 w-150 pl-2 mt-2" required id="passwordReg" name="passwordReg" placeholder='Password...' value={passwordReg} onChange={(e) => setPasswordReg(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='phonenumReg' className='mr-2'>Enter Phone Number :</label>
                    <input type="text" className="rounded-xl box-border h-11 w-150 pl-2 mt-2" required id="phonenumReg" name="phonenumReg" placeholder='Phone number...' value={phonenumReg} onChange={(e) => setPhonenumReg(e.target.value)} />
                </div>
                <button type="submit" className="h-12 px-6 mt-3 text-lg bg-black text-white rounded-lg hover:bg-sky-700 font-bold" onClick={register}>Sign Up</button>
            </form>
        </div>

        <p className="text-2xl text-black-600 font-bold mt-6">{registerMessage}</p>
        <hr></hr>
    </>
    )
}

export default Register