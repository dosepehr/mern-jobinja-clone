import React from 'react';
import JobinjaHelp from './JobinjaHelp';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signUpUserShema } from '../validation/usersValidation';
const SignupUser = () => {
    return (
        <div className='mx-auto px-5 lg:px-16 bg-[#f5f5f5] h-screen'>
            <div className='flex'>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    validationSchema={signUpUserShema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    <Form className='text-mainLightGray border bg-white border-[#d0d0d0] p-8 mx-auto space-y-4 w-[500px] max-w-[90%]'>
                        <div>
                            <div className='flex justify-between'>
                                <p>آدرس ایمیل</p>
                                <span className='text-red-700 text-base'>
                                    <ErrorMessage name='email' />
                                </span>
                            </div>
                            <Field
                                name='email'
                                className='border border-[#e5e5e5] p-2 rounded-sm mt-2 focus:shadow-3xl w-full'
                                type='email'
                                placeholder='آدرس ایمیل خود را وارد کنید'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <p>نام و نام خانوادگی</p>
                                <span className='text-red-700 text-base'>
                                    <ErrorMessage name='username' />
                                </span>
                            </div>
                            <Field
                                name='username'
                                className='border border-[#e5e5e5] p-2 rounded-sm mt-2 focus:shadow-3xl w-full'
                                type='text'
                                placeholder='مثلا: علی محمدی'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <p>رمز عبور</p>
                                <span className='text-red-700 text-base'>
                                    <ErrorMessage name='password' />
                                </span>
                            </div>
                            <Field
                                name='password'
                                className='border border-[#e5e5e5] p-2 rounded-sm mt-2 focus:shadow-3xl w-full'
                                type='password'
                                placeholder='رمز عبور خود را وارد کنید'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <p>تکرار رمز عبور</p>
                                <span className='text-red-700 text-base'>
                                    <ErrorMessage name='confirmPassword' />
                                </span>
                            </div>
                            <Field
                                name='confirmPassword'
                                className='border border-[#e5e5e5] p-2 rounded-sm mt-2 focus:shadow-3xl w-full'
                                type='password'
                                placeholder='رمز عبور خود را تکرار کنید'
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-mainGreen text-white border-b-2 border-green-900 py-2 rounded-md hover:bg-[#63d0b1]'
                        >
                            ثبت نام
                        </button>
                    </Form>
                </Formik>
                <div className='hidden lg:block mr-5'>
                    <JobinjaHelp />
                </div>
            </div>
        </div>
    );
};

export default SignupUser;
