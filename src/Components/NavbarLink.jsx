import React from 'react'

export default function NavbarLink({route}) {
  return (
     
    <li className='my-1'>
    <a
        className='block bg-slate-300 text-blue md:bg-transparent md:text-white md:hover:bg-slate-400 rounded-lg p-2 transition-colors duration-300 ease-in-out hover:text-blue-950'
        href={route.routePath}
    >
        {route.routeName}
    </a>
</li>
   
  )
}
