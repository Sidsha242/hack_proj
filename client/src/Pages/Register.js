import Axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
const Register = () => {

    const [usernameReg, setUsernameReg] = useState('');  //for register
    const [passwordReg, setPasswordReg] = useState('');
    const [phonenumReg, setPhonenumReg] = useState('');

    const [isSuccessfull, setisSuccessful] = useState(false);
    const [registerMessage, setRegisterMessage] = useState('');


    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReg,                              //sending to backend
            password: passwordReg,
            phonenum: phonenumReg,

        }).then((response) => {
            if (response.data === 'Username already taken') {
                console.log(response);
                setRegisterMessage(response.data);
            }
            else if (response.data === 'SignUp successful') {
                setRegisterMessage(response.data);
                setisSuccessful(true);
                setTimeout(() => {
                    window.location.href = 'http://localhost:3000/login';
                }, 1000)

            }

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='bg-[#F2EEDB] min-h-screen'>
    <br></br>
    <br></br>
        <div className="registration text-center container max-w-sm mx-auto bg-white rounded-xl shadow border">
            <h1 className="text-3xl text-gray-700 font-bold mb-5 mt-5">SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='usernameReg' className='block mb-3 items-start'>Username</label>
                    <input type="text" className="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6" required id="usernameReg" name="usernameReg" placeholder='Username...' value={usernameReg} onChange={(e) => setUsernameReg(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='passwordReg' className='block mb-3 items-start'>Password</label>
                    <input type="text" className="shadow appearance-none border border-grey-500 rounded w-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mb-6" required id="passwordReg" name="passwordReg" placeholder='Password...' value={passwordReg} onChange={(e) => setPasswordReg(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='phonenumReg' className='block mb-3 items-start'>Phone Number</label>
                    <input type="text" className="rounded-xl box-border h-11 w-150 pl-2 mt-2 shadow" required id="phonenumReg" name="phonenumReg" placeholder='Phone number...' value={phonenumReg} onChange={(e) => setPhonenumReg(e.target.value)} />
                </div>
                <button type="submit" className="h-12 px-6 mt-3 text-lg bg-black text-white rounded-lg hover:bg-sky-700 font-bold mb-5" onClick={register}>Sign Up</button>
            </form>
        </div>

        {isSuccessfull && <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span class="font-medium">SignUp successfull!</span> </div>}
        <br></br>
        <br></br>
    </div>
    )
}

export default Register