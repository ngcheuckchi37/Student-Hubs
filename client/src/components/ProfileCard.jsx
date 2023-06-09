import React from 'react'
import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";



const ProfileCard = () => {
    return (
    
    <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
      <div className="flex justify-between flex-col w-full h-full">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
            <SiEthereum fontSize={21} color="#fff" />
          </div>
          <BsInfoCircle fontSize={17} color="#fff" />
        </div>
        </div>
        </div>
        </div>
        )
}
export default ProfileCard
