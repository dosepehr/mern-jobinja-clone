import { Link } from 'react-router-dom';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import { loginUserShema } from '../validation/usersValidation';
const LoginEmployer = () => {
    return (
        <div className='min-h-screen bg-[#f5f5f5] pb-10'>
            <nav className='bg-mainDarkBlue h-20 flex justify-between items-center px-4 py-2 lg:px-32 shadow-lg'>
                <div className='flex text-white text-sm font-semibold'>
                    <p>حساب کارفرمایی ندارید؟</p>
                    <Link
                        to='/employer'
                        className='border-b-2 border-mainLightBlue h-fit mx-3'
                    >
                        ثبت نام کارفرمایان
                    </Link>
                </div>
                <p className='text-2xl'>JOBINJA</p>
            </nav>
            <div className=' mt-10'>
                <p className='text-mainmainDarkGray text-3xl text-[#595f66] font-semibold text-center'>
                    ورود به حساب کارفرمایی
                </p>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={loginUserShema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    <Form className='bg-white shadow-xl mx-auto w-[400px] max-w-[90%] mt-10 p-8 space-y-5 rounded-lg'>
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
                            <p className='mb-3 text-mainLightGray'>رمز عبور</p>
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
                        <button
                            type='submit'
                            className='w-full py-2 bg-mainDarkBlue text-white rounded'
                        >
                            وارد شوید
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default LoginEmployer;
