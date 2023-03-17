import React from 'react'
import './Home.css'
import img2 from "../Images/title-img.jpg";

const Home = () => {

    return (
        <div className='bg-[#F2EEDB] h-screen'>
            <div className='grid grid-cols-2 p-5'>
                <div className="title-cont pt-28 pl-10 container mx-auto">
                    <h1 className='title text-6xl'>Become a <br></br>working women <br></br>now!</h1>
                </div>
                <div>
                    <img
                        className="h-80 w-92 rounded-full"
                        src={img2}
                        alt="Workflow"
                    />
                </div>
            </div>
        </div>

    )
}

export default Home