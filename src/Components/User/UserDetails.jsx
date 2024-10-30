import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
<IoMdArrowRoundBack />

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const handleRoute = ()=>{
        navigate(-1);
    }
    const { id } = useParams();

    useEffect(() => {
        fetch('/users.json')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const user = users.find(user => user.id === parseInt(id));

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

    if (!user) {
        return <p>User not found</p>;
    }

    return (
        <div className="relative user-details bg-slate-900 shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 flex flex-col items-center  w-fit mx-auto ">
            <button onClick={handleRoute} className='btn absolute top-3 left-3 bg-transparent duration-300 transition-all transform hover:text-white hover:scale-105 text-slate-500 text-xl '><IoMdArrowRoundBack  /></button>
            <div className={` ${getRandomGradient()} flex justify-center items-center w-fit mx-auto rounded-full p-1`}>
                <img src={user.profilePic} alt={user.name} className="w-32 h-32 rounded-full object-cover" />
            </div>
            <h2 className={`${getRandomGradient()} text-center bg-clip-text text-transparent text-2xl py-2 font-semibold`}>
                {user.name}
            </h2>
            <div className="flex flex-wrap gap-2 lg:grid grid-cols-3 justify-center items-center shadow-lg rounded-lg p-4">
                <p className={`${getRandomGradient()} text-center text-white font-semibold text-base p-2 rounded-md`}>
                    Age: <span className="font-normal">{user.age}</span>
                </p>
                <p className={`${getRandomGradient()} text-center text-white font-semibold text-base p-2 rounded-md`}>
                    Weight: <span className="font-normal">{user.weight} kg</span>
                </p>
                <p className={`${getRandomGradient()} text-center text-white font-semibold text-base p-2 rounded-md`}>
                    Membership: <span className="font-normal">{user.membershipType}</span>
                </p>
                <p className={`${getRandomGradient()} text-center text-white font-semibold text-base p-2 rounded-md`}>
                    Condition: <span className="font-normal">{user.physicalCondition}</span>
                </p>
                <p className={`${getRandomGradient()} text-center text-white font-semibold text-base p-2 rounded-md`}>
                    Join Date: <span className="font-normal">{user.joinDate}</span>
                </p>
                <p className={`${getRandomGradient()} text-center text-white font-semibold text-base p-2 rounded-md`}>
                    Email: <span className="font-normal">{user.email}</span>
                </p>
                <p className={`${getRandomGradient()} text-center text-white font-semibold text-base p-2 rounded-md`}>
                    Profession: <span className="font-normal">{user.profession}</span>
                </p>
            </div>
        </div>
    );
};

export default UserDetails;
