import React from 'react'
import ExploreCard from '../Components/ExploreCard'
import SearchBar from '../Components/SearchBar'
import data from '../data'
import { useState } from 'react'

const Explore = () => {
    let [Filter, setFilter] = useState('')
    const displayedData = Filter ? data.filter(element => element.comp_nam.toLowerCase().includes(Filter.toLowerCase())) : data
    return (
        <div className='bg-[#F2EEDB] h-full'>
            <div className='pt-12 pl-20 pr-20'>
                <SearchBar setFilter={setFilter} />
            </div>
            <div className='ml-20 pt-10 pb-20'>
                {displayedData.map((id) => (
                    <ExploreCard key={id.id} comp_nam={id.comp_nam} name={id.nam} desc={id.desc} tag={id.tag} img={id.img} />
                ))}

            </div>

        </div>
    )
}

export default Explore