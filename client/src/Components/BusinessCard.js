

import React from 'react'

const BusinessCard = (props) => {

    // const Deletebus = () => {

    //     Axios.post('http://localhost:3001/newbus', {
    //         busname: busname,                              //sending to backend
    //         username: username,
    //         desc: desc,
    //         price: price

    //     }).then((response) => {
    //         setbusnmessage(response.data.message);
    //         window.location.href = 'http://localhost:3000/dashboard';
    //     })

    // };

    return (
        <>
            <div className='container mt-5 pb-20 border-4 ml-10 mr-20 rounded-md border-black'>
                <div className='text-2xl text-black-800 font-bold mt-6 pl-10'>
                    Business Name: {props.bus_nam}
                </div>
                <div className='text-1xl text-black-800 font-semibold mt-6 pl-10'>
                    Description: {props.desc}
                </div>
                <div className='text-1xl text-black-800 font-semibold mt-6 pl-10'>
                    Price Range: ₹{props.price}
                </div>
                <div className='pl-10 mt-6'>
                    <button type="submit" className="h-12 px-6 mt-3 text-lg bg-black text-white rounded-lg hover:bg-sky-700 font-bold" >Delete Business</button>
                </div>
            </div>
        </>
    )
}

export default BusinessCard