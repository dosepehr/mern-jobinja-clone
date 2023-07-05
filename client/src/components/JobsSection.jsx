import React from 'react';
import JobsGrid from './JobsGrid';

const JobsSection = () => {
    return (
        <div className='flex flex-col lg:flex-row mx-auto px-5 lg:px-16'>
            <div className='lg:w-2/3 w-full ml-10'>
                <JobsGrid title='استخدام های فوری امروز' grid_cols={2} />
            </div>
            <div className='lg:w-1/3 w-full'>
                <JobsGrid title='آخرین آگهی ها' grid_cols={1} />
            </div>
        </div>
    );
};

export default JobsSection;
