import React from 'react';
import Banner from './assets/banner.png'
import SectionHeading from './components/SectionHeading';
import { useLoaderData } from 'react-router-dom';
import Jobs from './components/Jobs';
const Home = () => {
    const categories = useLoaderData();

    return (
        <div className='container mx-auto'>
            <div className="md:flex justify-between items-center">
                <div className="md:w-1/2">
                    <h1 className='text-4xl md:text-7xl font-bold'>One Step <br /> Closer To Your <br /> <span className='text-violet-500'>Dream Job</span></h1>
                    <p className='text-gray-500 my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-primary'>Get Started</button>
                </div>
                <div>
                    <img className='w-full' src={Banner} alt="banner img" />
                </div>
            </div>
            <SectionHeading title = "job category list" desc="Explore thousands of job opportunities with all the information you need. Its your future"></SectionHeading>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    categories.map(category => <div key={category.id} className='p-4 shadow'>
                        <div className='p-2 bg-slate-300 rounded-md w-fit'>
                            <img className='w-12 h-12' src={category.img} alt="category image" />
                        </div>
                        <h2 className='text-2xl font-semibold mt-3'>{category.title}</h2>
                        <p className='text-gray-600'>{category.available_jobs}+ available jobs</p>
                    </div>)
                }
            </div>
            <SectionHeading title = "Featured Jobs" desc="Explore thousands of job opportunities with all the information you need. Its your future"></SectionHeading>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;