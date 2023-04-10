import React from 'react';
import Banner from './assets/banner.png'
import SectionHeading from './components/SectionHeading';
import { useLoaderData } from 'react-router-dom';
import Jobs from './components/Jobs';
import Categories from './components/Categories';
const Home = () => {
    const jobs = useLoaderData();
    
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
                <Categories></Categories>
            </div>
            <SectionHeading title = "Featured Jobs" desc="Explore thousands of job opportunities with all the information you need. Its your future"></SectionHeading>
            <div className="grid md:grid-cols-2 gap-6">
            {
                jobs.slice(0,4).map(job => <Jobs
                    key={job.id}
                    job = {job}
                ></Jobs>)
            }
            </div>
            <div className='mt-9 text-center'>
                <button className='btn-primary'>See More Jobs</button>
            </div>
            
        </div>
    );
};

export default Home;