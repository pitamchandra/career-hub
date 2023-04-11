import React, { useState } from 'react';
import { getShoppingCart } from '../utilities/fakebd';
import { Link, useLoaderData } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
const AppliedJobs = () => {
    const {jobCart, allJobs} = useLoaderData()
    // const [isClick, setIsClick] = useState(false)
    const [filterJob, setFilterJob] = useState(jobCart)
    const handleOnsideJob = () => {
        const onsideJobs = jobCart.filter(job => job.type !== "Remote")
        setFilterJob(onsideJobs);
    }
    const handleRemoteJob = () => {
        const remoteJobs = jobCart.filter(job => job.type === "Remote")
        setFilterJob(remoteJobs);
    }
    // console.log(filterJob[1].type);
    return (
        <>
            <div className='w-4/5 mx-auto my-11'>
                <div className='flex justify-end gap-4 mb-8'>
                    <button onClick={handleOnsideJob} className={`btn-outline`}>onside job</button>
                    <button  onClick={handleRemoteJob} className='btn-outline'>Remote job</button>
                </div>
                {
                    filterJob.map(job => <div key={job.id} className='md:flex items-center justify-between p-4 md:p-8 border rounded-md mb-6'>
                        <div className='md:flex gap-5'>
                            <div className='md:w-40 py-4 md:py-0 rounded bg-slate-300 flex items-center justify-center'>
                                <img className='' src={job.logo} alt="" />
                            </div>
                            <div>
                                <h2 className='text-3xl font-semibold'>{job.title}</h2>
                                <h3 className='text-gray-600 text-xl mb-2'>{job.companyName}</h3>
                                <div className='flex gap-4'>
                                    <button className='btn-outline'>{job.type}</button>
                                    <button className='btn-outline'>{job.jobType}</button>
                                </div>
                                <div className="md:flex my-4">
                                    <p className='text-gray-500'><MapPinIcon className="h-6 w-6 inline-flex" /> {job.location}</p>
                                    <p className='text-gray-500 md:ml-5'><CurrencyDollarIcon className="h-6 w-6 inline-flex" /> <strong>Salary:</strong>  {job.salary}</p>
                                </div>
                            </div>
                        </div>
                        <Link to={`/jobDetails/${job.id}`}><button className='btn-primary'>View Details</button></Link>
                    </div>)
                }
            </div>  
        </>
    );
};

export default AppliedJobs;