import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { FaRegEye } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";


export default function PostDetails() {
    const post = useLoaderData();
    const { id, title, body, tags, reactions, views } = post;
    console.log(post);


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
  <div className={` ${getRandomGradient()} p-1 h-fit rounded-lg w-fit mx-auto`}>
      <div className="max-w-2xl mx-auto bg-slate-900 shadow-lg rounded-lg overflow-hidden border border-gray-200  p-6">
    <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
    <p className="text-white text-base mb-4">{body}</p>

    <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-blue-900 text-normal font-semibold px-2 py-1 rounded-lg">
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className="text-white text-sm flex items-center">
                    <span className="font-bold flex items-center gap-1">{reactions.likes} <SlLike className='text-xl ' /></span>
                    <span className="mx-2">|</span>
                    <span className="font-bold flex items-center gap-1">{reactions.dislikes} <SlDislike className='text-xl' /></span>
                    <span className="mx-2">|</span>
                    <span className="font-bold flex items-center gap-1">{views} <FaRegEye className='text-xl' /></span>
                </div>
            </div>
  
</div>
  </div>
  )
}
