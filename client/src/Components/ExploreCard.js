

import React from 'react'

const ExploreCard = (props) => {
    return (
        <a href="#" className="block container mx-auto rounded-xl mt-5 w-96 max-w-sm pl-10 pr-10 pt-5 pb-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className='flex flex-col'>
                <div>
                    <img
                        className="h-20 w-20 rounded-full"
                        src={props.img}
                        alt="Workflow"
                    />
                </div>
                <div className='mt-5'>
                    <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{props.bus_nam}</h1>
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h3>
                    <p className="font-normal text-lg text-gray-700 dark:text-gray-400">{props.desc}</p>
                    {/* {console.log(genre)} */}
                    {/* {props.tag.map((nam) => (
                            <p className='mr-2 bg-stone-200 rounded-lg p-2'>{nam}</p>
                        ))} */}
                    <p className="font-normal text-gray-700 dark:text-gray-400">₹{props.price}</p>
                </div>
            </div>
        </a>
    )
}

export default ExploreCard