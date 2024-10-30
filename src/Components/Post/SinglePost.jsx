import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = ({ post }) => {
    const { id, title, body } = post;

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

    const randomBgColor = getRandomGradient();
    return (
        <Link to={`/posts/${id}`}>
            <div className={` ${randomBgColor} p-1 h-fit rounded-lg w-fit mx-auto transition-transform duration-300 transform hover:scale-105`}>

          
            <div className={`relative group `}>
                {/* This div will appear on hover */}

                <div className={`absolute inset-0  items-center justify-center bg-black bg-opacity-80 text-white font-semibold text-lg hidden group-hover:flex rounded-lg`}>
                    <h1>Click for See details</h1>
                </div>

                <div className="max-w-2xl mx-auto bg-slate-900 shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
                    <p className="text-white text-base mb-4">{body}</p>
                </div>
            </div>
            </div>
        </Link>
    );
};

export default SinglePost;
