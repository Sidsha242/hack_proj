import { useState, useEffect } from 'react';
import React from 'react'
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import img3 from "../Images/avatar-icon.png";

const DashBoard = () => {

    const [username, setUsername] = useState('');

    const disp = false;


    useEffect(() => {
        console.log("Dash");
        const items = JSON.parse(localStorage.getItem('user'));
        if (items.result === null) {
            setUsername(null);
        }
        else {
            setUsername(items.result[0].username);
        }
    }, []);


    if (username == null) {
        return <UserLog />;
    }
    else {
        return <Dash />;
    }

    function UserLog() {
        return (<div>
            <p>Please Login</p>
            < Link to="/login" >
                <button class=" bg-[#FF0000] hover:bg-red-200 text-white font-bold py-2 px-4 rounded">
                    Log In
                </button>
            </Link >
        </div>
        );
    }

    function Dash(props) {
        return (<>
            <div className='bg-[#F2EEDB] h-full  pt-10 pb-20'>
                <div className='flex justify-center'>
                    <img
                        src={img3}
                        className="rounded-full w-32 mr-5"
                        alt="Avatar"
                    />
                    <p className="text-6xl text-black-800 font-bold mt-6">Hi {username}!</p>
                </div>
                <div className='text-4xl text-black-800 font-bold mt-6 pl-10'>
                    My Shops:
                </div>
                <div className='container mt-5 pb-20 border-2 ml-10 mr-20 rounded-md border-black'>
                    <div className='text-2xl text-black-800 font-bold mt-6 pl-10'>
                        Shop Name:
                    </div>
                </div>
            </div>
        </>
        );
    }

}

export default DashBoard