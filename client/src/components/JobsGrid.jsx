import React from 'react';
import JobBox from './JobBox';

const JobsGrid = () => {
    return (
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
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
    );
};

export default JobsGrid;
