import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Jobs = ({job}) => {
    const {id, companyName, logo, title,jobType,location,salary, type } = job
    return (
        <div className='border p-8 rounded-md'>
            <img className='mb-4' src= {logo} alt="company logo" />
            <h2 className='text-3xl font-semibold'>{title}</h2>
            <h3 className='text-gray-600 text-xl mb-2'>{companyName}</h3>
            <div className='flex gap-4'>
                <button className='btn-outline'>{type}</button>
                <button className='btn-outline'>{jobType}</button>
            </div>
            <div className="flex my-4">
                <p className='text-gray-500'><MapPinIcon className="h-6 w-6 inline-flex" /> {location}</p>
                <p className='text-gray-500 ml-5'><CurrencyDollarIcon className="h-6 w-6 inline-flex" /> <strong>Salary:</strong>  {salary}</p>
            </div>
            <Link to={`/jobDetails/${id}`} className='btn-primary md:py-3 md:px-4 inline-block'>View Details</Link>
        </div>
    );
};

export default Jobs;