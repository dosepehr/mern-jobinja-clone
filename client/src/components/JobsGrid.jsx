import React from 'react';
import JobBox from './JobBox';

const JobsGrid = () => {
    return (
        <div className='border border-[#999] rounded-md'>
            <div className='bg-[#ebebeb] p-4' >
                <p>استخدام های فوری امروز</p>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 px-3'>
                <JobBox />
                <JobBox />
                <JobBox />
                <JobBox />
                <JobBox />
                <JobBox />
                <JobBox />
                <JobBox />
                <JobBox />
                <JobBox />
                <JobBox />
                <JobBox />
                <JobBox />
                <JobBox />
                <JobBox />
            </div>
        </div>
    );
};

export default JobsGrid;
