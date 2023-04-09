import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return (
        <nav>
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-5">
                    <Link to={`/`} className="text-2xl md:text-4xl">Smart <span className='text-violet-500'>Jobs</span></Link>
                    <ul className='hidden md:flex gap-4'>
                        <li><NavLink className={`text-gray-500 font-semibold ${({ isActive }) =>isActive ? "active" : ""}`} to={`/`}>Home</NavLink></li>
                        <li><NavLink className={`text-gray-500 font-semibold ${({ isActive }) =>isActive ? "active" : ""}`} to={`/statistics`}>Statistics</NavLink></li>
                        <li><NavLink className={`text-gray-500 font-semibold ${({ isActive }) =>isActive ? "active" : ""}`} to={`/jobs`}>Applied Jobs</NavLink></li>
                        <li><NavLink className={`text-gray-500 font-semibold ${({ isActive }) =>isActive ? "active" : ""}`} to={`/blog`}>Blog</NavLink></li>
                    </ul>
                    <button className='btn-primary'>Star Applying</button>
                    <div className='md:hidden' onClick={()=>setIsOpenMenu(!isOpenMenu)}>
                        <Bars3Icon className="h-7 w-7 text-violet-500" />
                    </div>
                    {
                        isOpenMenu && <div className='absolute flex justify-between p-4  shadow top-16 left-0 w-full bg-white'>
                        <ul>
                        <li><NavLink  onClick={()=>setIsOpenMenu(!isOpenMenu)} className={`text-gray-500 font-semibold ${({ isActive }) =>isActive ? "active" : ""}`} to={`/`}>Home</NavLink></li>
                        <li><NavLink  onClick={()=>setIsOpenMenu(!isOpenMenu)} className={`text-gray-500 font-semibold ${({ isActive }) =>isActive ? "active" : ""}`} to={`/statistics`}>Statistics</NavLink></li>
                        <li><NavLink  onClick={()=>setIsOpenMenu(!isOpenMenu)} className={`text-gray-500 font-semibold ${({ isActive }) =>isActive ? "active" : ""}`} to={`/jobs`}>Applied Jobs</NavLink></li>
                        <li><NavLink  onClick={()=>setIsOpenMenu(!isOpenMenu)} className={`text-gray-500 font-semibold ${({ isActive }) =>isActive ? "active" : ""}`} to={`/blog`}>Blog</NavLink></li>
                        </ul>
                        <div >
                        <XMarkIcon onClick={()=>setIsOpenMenu(!isOpenMenu)} className="h-7 w-7 text-violet-500" />
                        </div>
                    </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;