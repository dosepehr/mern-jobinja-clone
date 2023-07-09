import React from 'react';
import JobinjaHelp from './JobinjaHelp';

const LoginUser = () => {
    return (
        <div className='mx-auto px-5 lg:px-16 bg-[#f5f5f5] h-screen'>
            <div className='flex'>
                <div className='text-lightGray border bg-white border-[#d0d0d0] p-8 mx-auto space-y-4 w-[500px] max-w-[90%]'>
                    <div>
                        <p>آدرس ایمیل</p>
                        <input
                            className='border border-[#e5e5e5] p-2 rounded-sm mt-2 focus:shadow-3xl w-full'
                            type='text'
                            placeholder='آدرس ایمیل خود را وارد کنید'
                        />
                    </div>
                    <div>
                        <p>نام و نام خانوادگی</p>
                        <input
                            className='border border-[#e5e5e5] p-2 rounded-sm mt-2 focus:shadow-3xl w-full'
                            type='text'
                            placeholder='مثلا: علی محمدی'
                        />
                    </div>
                    <div>
                        <p>رمز عبور</p>
                        <input
                            className='border border-[#e5e5e5] p-2 rounded-sm mt-2 focus:shadow-3xl w-full'
                            type='text'
                            placeholder='رمز عبور خود را وارد کنید'
                        />
                    </div>
                    <div>
                        <p>تکرار رمز عبور</p>
                        <input
                            className='border border-[#e5e5e5] p-2 rounded-sm mt-2 focus:shadow-3xl w-full'
                            type='text'
                            placeholder='رمز عبور خود را تکرار کنید'
                        />
                    </div>
                </div>
                <div className='hidden lg:block mr-5'>
                    <JobinjaHelp />
                </div>
            </div>
        </div>
    );
};

export default LoginUser;
