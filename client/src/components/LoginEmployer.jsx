import React from 'react';
import { signUpEmployer } from '../validation/usersValidation';
import { Formik, Field, ErrorMessage, Form } from 'formik';
const LoginEmployer = () => {
    return (
        <div className='min-h-screen bg-[#f5f5f5] pb-10'>
            <nav className='bg-mainDarkBlue h-20 flex justify-between items-center px-4 py-2 lg:px-32 shadow-lg'>
                <div className='flex text-white text-sm font-semibold'>
                    <p>حساب کارفرمایی دارید؟</p>
                    <p className='border-b-2 border-mainLightBlue h-fit mx-3'>
                        وارد شوید
                    </p>
                </div>
                <p className='text-2xl'>JOBINJA</p>
            </nav>
            <div className=' mt-10'>
                <p className='text-mainmainDarkGray text-3xl text-[#595f66] font-semibold text-center'>
                    ثبت نام کارفرمایان
                </p>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        phone: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    validationSchema={signUpEmployer}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    <Form className='bg-white shadow-xl mx-auto w-[400px] max-w-[90%] mt-10 p-8 space-y-5 rounded-lg'>
                        <div className='flex flex-col justify-start'>
                            <p className='mb-3 text-mainLightGray'>
                                نام و نام خانوادگی
                            </p>
                            <Field
                                type='text'
                                name='username'
                                id=''
                                placeholder='مثلا: علی محمدی'
                                className='border border-[#e5e5e5] px-3 py-2 rounded-sm'
                            />
                            <span className='text-red-600 text-sm'>
                                <ErrorMessage name='username' />
                            </span>
                        </div>
                        <div className='flex flex-col justify-start'>
                            <p className='mb-3 text-mainLightGray'>ایمیل</p>
                            <Field
                                name='email'
                                type='email'
                                placeholder='example@gmail.com'
                                className='border border-[#e5e5e5] px-3 py-2 rounded-sm'
                            />
                            <span className='text-red-600 text-sm'>
                                <ErrorMessage name='email' />
                            </span>
                        </div>
                        <div className='flex flex-col justify-start'>
                            <p className='mb-3 text-mainLightGray'>
                                شماره موبایل
                            </p>
                            <Field
                                name='phone'
                                type='text'
                                placeholder='09123456789'
                                className='border border-[#e5e5e5] px-3 py-2 rounded-sm'
                            />
                            <span className='text-red-600 text-sm'>
                                <ErrorMessage name='phone' />
                            </span>
                        </div>
                        <div className='flex flex-col justify-start'>
                            <p className='mb-3 text-mainLightGray'>
                                انتخاب رمز عبور
                            </p>
                            <Field
                                name='password'
                                type='password'
                                placeholder='حداقل 8 کاراکتر'
                                className='border border-[#e5e5e5] px-3 py-2 rounded-sm'
                            />
                            <span className='text-red-600 text-sm'>
                                <ErrorMessage name='password' />
                            </span>
                        </div>
                        <div className='flex flex-col justify-start'>
                            <p className='mb-3 text-mainLightGray'>
                                تکرار رمز عبور
                            </p>
                            <Field
                                name='confirmPassword'
                                type='password'
                                className='border border-[#e5e5e5] px-3 py-2 rounded-sm'
                            />
                            <span className='text-red-600 text-sm'>
                                <ErrorMessage name='confirmPassword' />
                            </span>
                        </div>
                        <button
                            type='submit'
                            className='w-full py-2 bg-mainDarkBlue text-white rounded'
                        >
                            ثبت نام
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default LoginEmployer;
