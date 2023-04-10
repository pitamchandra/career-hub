import React from 'react';

const Categories = () => {
    const categories = [
        {
            id: 1,
            img: "https://i.ibb.co/BVXr4n3/social-media-1.png",
            title: "Software Engineer",
            available_jobs: 87
        },
        {
            id: 2,
            img: "https://i.ibb.co/52fNDzD/Frame-1.png",
            title: "Data Scientist",
            available_jobs: 64
        },
        {
            id: 3,
            img: "https://i.ibb.co/r72kFXJ/accounts-1.png",
            title: "Product Manager",
            available_jobs: 127
        },
        {
            id: 4,
            img: "https://i.ibb.co/Hq3Z3y6/business-1.png",
            title: "UX Designer",
            available_jobs: 123
        }
    ]
    
    return (
        <>
            {
                categories.map(category => <div key={category.id} className='p-4 shadow'>
                    <div className='p-2 bg-slate-300 rounded-md w-fit'>
                        <img className='w-12 h-12' src={category.img} alt="category image" />
                    </div>
                    <h2 className='text-2xl font-semibold mt-3'>{category.title}</h2>
                    <p className='text-gray-600'>{category.available_jobs}+ available jobs</p>
                </div>)
            }
        </>
    );
};

export default Categories;