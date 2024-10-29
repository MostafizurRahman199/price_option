import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const routes = [
        { id: 1, routePath: '/home', routeName: 'Home' },
        { id: 2, routePath: '/about', routeName: 'About' },
        { id: 3, routePath: '/service', routeName: 'Services' },
        { id: 4, routePath: '/portfolio', routeName: 'Portfolio' },
        { id: 5, routePath: '/contact', routeName: 'Contact' },
    ];

    return (
        <nav className='w-10/12 mx-auto p-4'>
            <div className='md:hidden text-2xl cursor-pointer' onClick={() => setToggle(!toggle)}>
                {toggle ? <HiXMark /> : <CiMenuBurger />}
            </div>

            <ul className={`absolute z-20 md:bg-transparent text-black md:text-white md:flex justify-center items-center gap-8 transition-all duration-500 m-2 md:static ${toggle ? "top-15 bg-white rounded-xl p-2" : "-top-56 opacity-0"} md:opacity-100`} 
                style={{ overflow: 'hidden' }}>
                
                {
                    routes.map((route) => (
                        <li className='my-1' key={route.id}>
                            <Link to={route.routePath}
                                className='block bg-slate-300 text-blue md:bg-transparent md:text-white md:hover:bg-slate-400 rounded-lg p-2 transition-colors duration-300 ease-in-out hover:text-blue-950'>
                                {route.routeName}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}
