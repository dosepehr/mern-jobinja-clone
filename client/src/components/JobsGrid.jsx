import React from 'react';
import JobBox from './JobBox';

const JobsGrid = ({ title, grid_cols }) => {
    return (
        <div className='border border-[#999] rounded-md'>
            <div className='bg-[#ebebeb] p-4'>
                <p>{title}</p>
            </div>
            <div
                className={`grid grid-cols-1 gap-4 lg:grid-cols-${grid_cols} px-3 my-5`}
            >
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
