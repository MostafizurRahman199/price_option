import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleUser from './SingleUser';

export default function User() {
    const users = useLoaderData();
    console.log(users);
  return (
    <div className='w-10/12 flex flex-col gap-4 mx-auto p-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
            users.map((user)=><SingleUser user={user}/>)
        }
    </div>
  )
}
