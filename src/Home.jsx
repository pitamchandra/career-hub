import React from 'react';
import Banner from './assets/banner.png'
const Home = () => {
    return (
        <>
            <div className="md:flex justify-between items-center container mx-auto">
                <div className="md:w-1/2">
                    <h1 className='text-4xl md:text-7xl font-bold'>One Step <br /> Closer To Your <br /> <span className='text-violet-500'>Dream Job</span></h1>
                    <p className='text-gray-500 my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-primary'>Get Started</button>
                </div>
                <div>
                    <img className='w-full' src={Banner} alt="banner img" />
                </div>
            </div>
        </>
    );
};

export default Home;