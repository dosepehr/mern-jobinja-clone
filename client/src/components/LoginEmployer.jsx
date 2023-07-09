import React from 'react';

const LoginEmployer = () => {
    return (
        <div className='min-h-screen bg-[#f5f5f5] pb-10'>
            <nav className='bg-darkBlue h-20 flex justify-between items-center px-4 py-2 lg:px-32 shadow-lg'>
                <div className='flex text-white text-sm font-semibold'>
                    <p>حساب کارفرمایی دارید؟</p>
                    <p className='border-b-2 border-mainLightBlue h-fit mx-3'>
                        وارد شوید
                    </p>
                </div>
                <p className='text-2xl'>JOBINJA</p>
            </nav>
            <div className=' mt-10'>
                <p className='text-mainDarkGray text-3xl text-[#595f66] font-semibold text-center'>
                    ثبت نام کارفرمایان
                </p>
                <form className='bg-white shadow-xl mx-auto w-[400px] max-w-[90%] mt-10 p-8 space-y-5 rounded-lg'>
                    <div className='flex flex-col justify-start'>
                        <p className='mb-3 text-lightGray'>
                            نام و نام خانوادگی
                        </p>
                        <input
                            type='text'
                            name=''
                            id=''
                            placeholder='مثلا: علی محمدی'
                            className='border border-[#e5e5e5] px-3 py-2 rounded-sm'
                        />
                    </div>
                    <div className='flex flex-col justify-start'>
                        <p className='mb-3 text-lightGray'>ایمیل</p>
                        <input
                            type='email'
                            placeholder='example@gmail.com'
                            className='border border-[#e5e5e5] px-3 py-2 rounded-sm'
                        />
                    </div>
                    <div className='flex flex-col justify-start'>
                        <p className='mb-3 text-lightGray'>شماره موبایل</p>
                        <input
                            type='number'
                            placeholder='09123456789'
                            className='border border-[#e5e5e5] px-3 py-2 rounded-sm'
                        />
                    </div>
                    <div className='flex flex-col justify-start'>
                        <p className='mb-3 text-lightGray'>
                            انتخاب رمز عبور
                        </p>
                        <input
                            type='password'
                            placeholder='حداقل 8 کاراکتر'
                            className='border border-[#e5e5e5] px-3 py-2 rounded-sm'
                        />
                    </div>
                    <div className='flex flex-col justify-start'>
                        <p className='mb-3 text-lightGray'>
                            تکرار رمز عبور
                        </p>
                        <input
                            type='text'
                            name=''
                            id=''
                            className='border border-[#e5e5e5] px-3 py-2 rounded-sm'
                        />
                    </div>
                    <button className='w-full py-2 bg-darkBlue text-white rounded'>
                        ثبت نام
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginEmployer;
