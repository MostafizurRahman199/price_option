import React from 'react'

export default function SingleUser({user}) {

    const {
        id,
        name,
        age,
        weight,
        physicalCondition,
        membershipType,
        joinDate,
        email,
        profession,
        profilePic
    } = user;


    const getRandomGradient = () => {
        const gradients = [
            'bg-gradient-to-r from-purple-400 to-pink-400',
            'bg-gradient-to-r from-blue-400 to-blue-600',
            'bg-gradient-to-r from-green-400 to-green-600',
            'bg-gradient-to-r from-yellow-400 to-yellow-500',
            'bg-gradient-to-r from-red-400 to-red-600',
            'bg-gradient-to-r from-teal-400 to-teal-600',
        ];
        return gradients[Math.floor(Math.random() * gradients.length)];
    };

  return (
    <div className={`bg-slate-900 shadow-lg rounded-lg overflow-hidden  p-4 border border-gray-200`}>
   <div className={` ${getRandomGradient()} flex justify-center items-center w-fit mx-auto rounded-full p-1`}>
        <img src={profilePic} alt={name} className="rounded-full w-32 h-32 object-cover" />
   </div>
   <div>
        <h1 className={`${getRandomGradient()} text-center bg-clip-text text-transparent text-2xl py-2`}>
                        {name}
        </h1>
   </div>
   <div className="flex flex-wrap gap-2 lg:grid grid-cols-3 justify-center items-center  shadow-lg rounded-lg p-4 ">
         
                <p className={`${getRandomGradient()} text-center   text-white font-semibold text-base p-2 rounded-md`}>
                   <span className="font-normal">{age}</span>
                </p>
                <p className={`${getRandomGradient()} text-center text-white font-semibold text-base p-2 rounded-md`}>
                  <span className="font-normal">{weight} kg</span>
                </p>
              
                <p className={`${getRandomGradient()} text-center text-white font-semibold text-base p-2 rounded-md`}>
                    <span className="font-normal">{membershipType}</span>
                </p>
              
             
             
        </div>
</div>
  )
}
