import { useState, useEffect } from 'react';
import React from 'react'
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import img3 from "../Images/avatar-icon.png";
import BusinessCard from '../Components/BusinessCard';

const DashBoard = () => {

    const [username, setUsername] = useState('');

    const disp = false;

    function Logout() {
        window.localStorage.clear();
        setTimeout(() => {
            window.location.href = 'http://localhost:3000/';
        }, 1000)

    }


    useEffect(() => {
        console.log("Dash");
        const items = JSON.parse(localStorage.getItem('user'));
        if (items === null) {
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
        return (
            <div className='bg-[#F2EEDB] h-screen text-center'>
                <p className='text-3xl text-black-800 font-bold pt-20'>Please Login</p>
                < Link to="/login" >
                    <button class=" bg-[#FF0000] mt-10 hover:bg-red-200 text-white font-bold py-2 px-4 rounded">
                        Log In
                    </button>
                </Link >
            </div>
        );
    }



    function Dash() {

        const [bus_arr, set_bus_arr] = useState([]);

        useEffect(() => {

            console.log("inside useffect");

            Axios.get(`http://localhost:3001/dashinfo/${username}`, {
            }).then((response) => {
                console.log("response received");
                set_bus_arr(response.data);
                console.log(response.data);

            });

        }, []);

        return (<>
            <div className='bg-[#F2EEDB] h-full  pt-10 pb-20 pr-20'>
                <div className='log-out pl-10'>
                    <button class=" bg-black hover:bg-red-200 text-white font-bold py-2 px-4 rounded" onClick={() => Logout()}>
                        Log Out
                    </button>
                </div>
                <div className='flex justify-center'>
                    <img
                        src={img3}
                        className="rounded-full w-32 mr-5"
                        alt="Avatar"
                    />
                    <p className="text-6xl text-black-800 font-bold mt-6">Hi {username}!</p>
                </div>
                <div className='text-4xl text-black-800 font-bold mt-6 pl-10'>
                    My Business:
                </div>
                <div className='add-busin pl-10 mt-6'>
                    < Link to="/newbus" >
                        <button class=" bg-sky-500 hover:bg-red-200 text-white font-bold py-2 px-4 rounded">
                            + Add Business
                        </button>
                    </Link >
                </div>
                {bus_arr.map((id) => (
                    <BusinessCard key={id.id_business} bus_nam={id.bus_nam} desc={id.descrip} price={id.price} />
                ))}
            </div>
        </>
        );
    }

}

export default DashBoard