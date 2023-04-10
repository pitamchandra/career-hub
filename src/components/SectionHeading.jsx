import React from 'react';

const SectionHeading = ({title, desc}) => {
    return (
        <div className='text-center mt-16 md:mt-32'>
            <h2 className='text-4xl font-semibold capitalize'>{title}</h2>
            <p className='text-gray-600 mt-4 mb-8'>{desc}</p>
        </div>
    );
};

export default SectionHeading;