import React from 'react'
import './Home.css'
import img2 from "../Images/title-img.jpg";

const Home = () => {

    return (
        <div className='bg-[#F2EEDB] h-full'>
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
            <div className='pl-10 pt-20 pb-10 '>
                <ol class="relative border-l border-black dark:border-gray-700">
                    <li class="mb-10 ml-4">
                        <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <p class="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">Step 1</p>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Sign Up and create your own Shop.</h3>
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 mt-5">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                    </li>
                    <li class="mb-10 ml-4">
                        <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <p class="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">Step 2</p>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Fill in your details regarding what service you are providing</h3>
                    </li>
                    <li class="ml-4">
                        <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <p class="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">Step 3</p>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Start your journey !!</h3>
                    </li>
                </ol>
            </div>
        </div>

    )
}

export default Home