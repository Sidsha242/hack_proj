import { useState, useEffect } from 'react';
import React from 'react'
import Axios from 'axios';

const NewBusiness = () => {

    const [username, setUsername] = useState('');

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

    const [busname, setbusname] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();    //prevents refresh on submiting
    }

    const [busMessage, setbusnmessage] = useState('');

    const Newbus = () => {
        Axios.post('http://localhost:3001/newbus', {
            busname: busname,                              //sending to backend
            username: username,
            desc: desc,
            price: price

        }).then((response) => {
            setbusnmessage(response.data.message);
            window.location.href = 'http://localhost:3000/dashboard';
        })

    };



    return (
        <div className="login text-center container mx-auto bg-[#F2EEDB] p-6">
            <h1 className="text-3xl text-gray-700 font-bold mb-5">New Business</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='busname' className='mr-1'>Name of Business :</label>
                    <input type="text" className="rounded-xl box-border h-11 w-150 pl-2 mt-2 ml-2" id="busname" name="busname" value={busname} onChange={(e) => setbusname(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='desc' className='mr-2'>Description :</label>
                    <input type="text" className="rounded-xl box-border h-11 w-150 p-10 pl-2 mt-2 ml-4" id="desc" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='price' className='mr-2'>Price :</label>
                    <input type="text" className="rounded-xl box-border h-11 w-150 pl-2 mt-2 ml-12" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <button type="submit" className="h-12 px-6 mt-3 text-lg bg-green-400 text-white rounded-lg hover:bg-sky-700 font-bold" onClick={() => Newbus()}>+ Add</button>
            </form>

            <p className="text-2xl text-black-600 font-bold mt-6">{busMessage}</p>

        </div>
    )
}

export default NewBusiness