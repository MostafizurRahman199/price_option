import React from 'react'
import { FaHandPointRight } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";


export default function SinglePriceOption({option}) {

    const { priceOption, features, img, price } = option;
  return (
    <div className="bg-slate-600 shadow-md rounded-lg overflow-hidden w-full  mx-auto transition-transform duration-300 transform hover:scale-105 my-8">
   <div className='w-4/6 flex justify-center mx-auto py-2 bg-white rounded-full'>
        <img src={img} alt={priceOption} className="mx-auto   rounded-full h-48 object-contain" />
   </div>
    <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{priceOption}</h2>
        <p className="text-lg text-white font-semibold mb-2">{price}</p>
        <ul className="list-disc list-inside text-gray-700">
            {features.map((feature, index) => (

               <p className='flex  items-center gap-2'>
              <GiCheckMark className='text-green-500 text-bold' />
                 <li key={index} className="mb-1 list-none text-white">{feature}</li>
               </p>
            ))}
        </ul>
        <button className="mt-4 w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
            Get Membership
        </button>
    </div>
</div>
);
};
 