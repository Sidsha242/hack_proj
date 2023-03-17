
import img3 from '../Images/about-img.jpg'
import React from 'react'

const About = () => {
    return (
        <div className='bg-[#F2EEDB] h-full'>
            <div className='pt-10 ml-96 container mx-auto pb-20'>
                <img
                    className="h-80 w-92 rounded-full"
                    src={img3}
                    alt="Workflow"
                />
                <div className="title-cont pt-28 pl-10 container mx-auto">
                    <h1 className='title text-6xl ml-8'>Our Vision</h1>
                </div>
                <p className='pt-5 font-semibold text-left text-medium'>
                    India has one of the lowest female participation in the workforce.<br />
                    Our goal is to help in increasing this number as it would not only uplift<br />
                    the lives of several women , but also helps in improving the economy of the nation.<br />
                    EmpowerHer aims to encourage homemakers to open their own side hustle.The services <br />
                    offered could be anything ranging from Painting to Recording an audio book.Anything <br />
                    that can be done from the comfort of ones home.
                </p>
            </div>
        </div>

    )
}

export default About