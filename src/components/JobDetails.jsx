import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { MapPinIcon, CalendarIcon,PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../utilities/fakebd';

const JobDetails = () => {
    const jobsDetails = useLoaderData();
    const dynamic = useParams()
    const [singleJob, setSingleJob] = useState({});
    useEffect(()=>{
        if(jobsDetails){
            const job = jobsDetails.find(single => single.id == dynamic.id);
            setSingleJob(job)
        }
    },[])
    return (
        <div className='md:flex justify-between gap-7 container mx-auto my-10'>
            <div>
                <h2 className='text-xl font-semibold mb-5'>Job Description: <span className='text-base text-gray-500'>{singleJob.description}</span></h2>
                <h2 className='text-xl font-semibold mb-5'>Job Responsibility: <span className='text-base text-gray-500'>{singleJob.responsibility}</span></h2>
                <h2 className='text-xl font-semibold '>Educational Requirement: </h2>
                <p className='text-gray-500 mb-5'>{singleJob.education}</p>
                <h2 className='text-xl font-semibold'>Experience: </h2>
                <p className='text-gray-500'>{singleJob.experience}</p>
            </div>
            <div className="md:w-1/3">
                { singleJob.contactInfo &&
                    <div className="rounded bg-slate-300 p-7 ">
                    <h2 className='text-2xl capitalize font-semibold'>job details</h2>
                    <hr className='my-4' />
                    <p className='text-gray-800 mb-2'><MapPinIcon className="h-6 w-6 inline-flex text-violet-600" /> <strong>Salary:</strong>  {singleJob.salary}</p>
                    <p className='text-gray-800 mb-2'><CalendarIcon className="h-6 w-6 inline-flex text-violet-600" /> <strong>Job Title:</strong>  {singleJob.title}</p>
                    <h2 className='text-2xl capitalize font-semibold mt-5'>Contact Information</h2>
                    <hr className='my-4' />
                    <p className='text-gray-800 mb-2'><PhoneIcon className="h-6 w-6 inline-flex text-violet-600" /> <strong>Phone:</strong>  {singleJob.contactInfo.phone}</p>
                    <p className='text-gray-800 mb-2'><EnvelopeIcon className="h-6 w-6 inline-flex text-violet-600" /> <strong>Job Title:</strong>  {singleJob.contactInfo.email}</p>
                    <p className='text-gray-800 mb-2'><MapPinIcon className="h-6 w-6 inline-flex text-violet-600" /> <strong>Job Title:</strong>  {singleJob.contactInfo.address}</p>
                </div>
                }
                <button onClick={() => addToDb(singleJob.id)} className='btn-primary mt-4 w-full'>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;