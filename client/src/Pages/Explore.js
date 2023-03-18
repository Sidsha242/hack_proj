import React from 'react'
import ExploreCard from '../Components/ExploreCard'
import SearchBar from '../Components/SearchBar'
import data from '../data'
import { useState } from 'react'
import Axios from 'axios';
import { useEffect } from 'react'
import avaimg from '../Images/avatar-icon.png';

const Explore = () => {


    const [exp_arr, set_exp_arr] = useState([]);

    useEffect(() => {

        console.log("inside useffect");

        Axios.get(`http://localhost:3001/exploreinfo`, {
        }).then((response) => {
            console.log("response received");
            set_exp_arr(response.data);
            console.log(response.data);

        });

    }, []);


    let [Filter, setFilter] = useState('')
    const displayedData = Filter ? exp_arr.filter(element => element.bus_nam.toLowerCase().includes(Filter.toLowerCase())) : exp_arr
    return (
        <div className='bg-[#F2EEDB] h-full'>
            <div className='pt-12 pl-20 pr-20'>
                <SearchBar setFilter={setFilter} />
            </div>
            <div className='ml-20 pt-10 pb-20 flex flex-wrap' >
                {displayedData.map((id) => (
                    <ExploreCard key={id.id_business} bus_nam={id.bus_nam} name={id.user_nam} desc={id.descrip} img={avaimg} price={id.price} />
                ))}

            </div>

        </div>
    )
}

export default Explore