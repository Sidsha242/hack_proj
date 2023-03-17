import { useState, useEffect } from 'react';
import React from 'react'
import Axios from 'axios';

const DashBoard = () => {

    const [username, setUsername] = useState('');


    useEffect(() => {
        console.log("Dash");
        const items = JSON.parse(localStorage.getItem('user'));
        setUsername(items.result[0].username);
    }, []);




    return (
        <div className='flex justify-center mt-12'>
            <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-full w-32 mr-5"
                alt="Avatar"
            />
            <p className="text-6xl text-black-800 font-bold mt-6">Hi {username}!</p>

        </div>
    )
}

export default DashBoard