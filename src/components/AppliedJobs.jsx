import React from 'react';
import { getShoppingCart } from '../utilities/fakebd';
import { useLoaderData } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
const AppliedJobs = () => {
    const {jobCart, allJobs} = useLoaderData()
    console.log(jobCart,allJobs);
    return (
        <>
            <div className='w-4/5 mx-auto my-11'>
                {
                    jobCart.map(job => <div className='md:flex items-center justify-between p-4 md:p-8 border rounded-md mb-6'>
                        <div className='md:flex gap-5'>
                            <div className='md:w-40 py-4 md:py-0 rounded bg-slate-300 flex items-center justify-center'>
                                <img className='' src={job.logo} alt="" />
                            </div>
                            <div>
                                <h2 className='text-3xl font-semibold'>{job.title}</h2>
                                <h3 className='text-gray-600 text-xl mb-2'>{job.companyName}</h3>
                                <button className='btn-outline'>{job.jobType}</button>
                                <div className="md:flex my-4">
                                    <p className='text-gray-500'><MapPinIcon className="h-6 w-6 inline-flex" /> {job.location}</p>
                                    <p className='text-gray-500 md:ml-5'><CurrencyDollarIcon className="h-6 w-6 inline-flex" /> <strong>Salary:</strong>  {job.salary}</p>
                                </div>
                            </div>
                        </div>
                        <button className='btn-primary'>View Details</button>
                    </div>)
                }
            </div>  
        </>
    );
};

export default AppliedJobs;