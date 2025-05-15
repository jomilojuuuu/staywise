"use client"

import React from 'react'
import { LiaBedSolid } from "react-icons/lia";
import { IoAirplaneOutline } from "react-icons/io5";
import { LiaCarSolid } from "react-icons/lia";
import { MdOutlineAttractions } from "react-icons/md";
import { PiTaxi } from "react-icons/pi";
import { useState } from "react";
import Stays from "./Stays";

function Navigation() {

    const [activeCard, setActiveCard] = useState("stays");
    const renderCardContent = () => {

        switch (activeCard) {
            case "stays":
                return <Stays />;
            case "flight":
                return <p>Flight content goes here.</p>;
            case "car-rental":
                return <p>Car rental content goes here.</p>;
            case "attraction":
                return <p>Attraction content goes here.</p>;
            case "airport":
                return <p>Airport content goes here.</p>;
        };
    }

    return (
        <div className=' mt-2'>
            <div className='flex gap-1 w-full overflow-x-auto whitespace-nowrap no-scrollbar'>
                <button 
                onClick={() => setActiveCard("stays")} 
                className={`cursor-pointer flex gap-2 px-3 py-2 items-center text-white hover:bg-[#2551837e] hover:rounded-full ${activeCard === "stays" ? "border border-white bg-[#2551837e] rounded-full" : ""}`}><LiaBedSolid className='text-2xl' /> Stays</button>
                <button 
                onClick={() => setActiveCard("flight")} 
                className={`cursor-pointer flex gap-2 px-3 py-2 items-center text-white hover:bg-[#2551837e] hover:rounded-full ${activeCard === "flight" ? "border border-white bg-[#2551837e] rounded-full" : ""}`}><IoAirplaneOutline className='text-2xl' /> Flights</button>
                <button 
                onClick={() => setActiveCard("car-rental")} 
                className={`cursor-pointer flex gap-2 px-3 py-2 items-center text-white hover:bg-[#2551837e] hover:rounded-full ${activeCard === "car-rental" ? "border border-white bg-[#2551837e] rounded-full" : ""}`}><LiaCarSolid className='text-2xl' /> Car rentals</button>
                <button 
                onClick={() => setActiveCard("attraction")} 
                className={`cursor-pointer flex gap-2 px-3 py-2 items-center text-white hover:bg-[#2551837e] hover:rounded-full ${activeCard === "attraction" ? "border border-white bg-[#2551837e] rounded-full" : ""}`}><MdOutlineAttractions className='text-2xl' /> Attractions</button>
                <button 
                onClick={() => setActiveCard("airport")} 
                className={`cursor-pointer flex gap-2 px-3 py-2 items-center text-white hover:bg-[#2551837e] hover:rounded-full ${activeCard === "airport" ? "border border-white bg-[#2551837e] rounded-full" : ""}`}><PiTaxi className='text-2xl' /> Airport taxis</button>
            </div>

            {/* Content Card Below */}
            <div className=" bg-gray-100 mt-2">
                {renderCardContent()}
            </div>
        </div>
    )
}

export default Navigation