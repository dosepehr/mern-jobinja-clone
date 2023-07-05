import React from 'react';

const HeroSection = () => {
    return (
        <div className='mx-auto px-5 lg:px-16 bg-gradient-to-r from-[#3ab0e4] from-10% to-[#1abc9c] to-99% py-10'>
            <div className=''>
                <div className='text-center text-white '>
                    <p className='text-xl font-semibold'>
                        10 آگهی استخدام فعال در 10 شرکت ایرانی
                    </p>
                    <p className='opacity-70 font-medium'>
                        جابینجا:سامانه کاریابی آنلاین با بیشترین تعداد آگهی
                        استخدام در ایران
                    </p>
                </div>
                <div className='flex justify-between hero items-center max-[879px]:flex-col max-[880px]:space-y-5 my-5'>
                    <input
                        type='text'
                        placeholder='عنوان شغلی'
                        className='w-1/4 py-2 px-3 rounded-sm max-[880px]:w-1/2'
                    />
                    <select
                        name=''
                        id=''
                        className='w-1/4 py-2 px-3 rounded-sm hidden min-[880px]:block'
                    >
                        <option value=''>همه استان ها</option>
                    </select>
                    <select
                        name=''
                        id=''
                        className='w-1/4 py-2 px-3 rounded-sm hidden min-[880px]:block'
                    >
                        <option value=''>همه دسته بندی ها</option>
                    </select>
                    <button className='w-1/6 py-2 px-3 rounded-sm bg-[#ffcd70] font-semibold max-[880px]:w-1/2'>
                        جستجو در مشاغل
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
