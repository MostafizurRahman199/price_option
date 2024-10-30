import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleUser from './SingleUser';

export default function User() {
    let users = useLoaderData();
    let data = JSON.parse(users);
    console.log(data);

    
  return (
    <div className='w-10/12 flex flex-col gap-4 mx-auto p-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
            data?.map((user)=><SingleUser user={user}/>)
        }
    </div>
  )
}
