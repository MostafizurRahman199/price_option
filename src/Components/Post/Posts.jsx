import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SinglePost from './SinglePost';

export default function Posts() {
    let posts = useLoaderData() ;
    posts = posts.posts
  return (
    <div className='flex flex-col gap-4'>
       {posts.map((post)=><SinglePost post={post}/>)}
    </div>
  )
}
