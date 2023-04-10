import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Jobs = () => {
    const jobs = useLoaderData();

    return (
        <div className='grid md:grid-cols-2 gap-6'>
            {
                jobs.map(job => <div key={job.id} className='border p-8'>
                    <h2>{job.title}</h2>
                
                </div>)
            }
            
        </div>
    );
};

export default Jobs;