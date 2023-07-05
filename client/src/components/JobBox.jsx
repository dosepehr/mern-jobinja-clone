import React from 'react';

const JobBox = () => {
    return (
        <div className='relative border border-[#999] p-2'>
            <p className='text-mainLightBlue text-base mb-2'>
                استخدام متخصص سئو
            </p>
            <div className='flex text-[#999] text-sm font-semibold'>
                <p className='ml-2'>فارسیان الکتریک</p>
                <p>خراسان رضوی</p>
            </div>
            <p className='absolute top-2 left-2 text-xs bg-red-600 text-white p-1 rounded-sm'>
                فوری
            </p>
        </div>
    );
};

export default JobBox;
