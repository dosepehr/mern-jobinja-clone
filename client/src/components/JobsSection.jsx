import React from 'react';
import JobBox from './JobBox';
import JobsGrid from './JobsGrid';

const JobsSection = () => {
    return (
        <div className='flex mx-auto px-5 lg:px-16'>
            <div className='w-2/3'>
                <JobsGrid />
            </div>
        </div>
    );
};

export default JobsSection;
