import { Link } from 'react-router-dom';

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
        </div>
    );
};

export default LoginEmployer;
