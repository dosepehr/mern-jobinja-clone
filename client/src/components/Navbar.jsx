import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='bg-darkGray mx-auto px-5 lg:px-16'>
            <div className=' flex justify-between items-center h-20  mx-auto'>
                <div className='flex text-textGray h-full items-center justify-center'>
                    <p className='h-full flex items-center px-4 hover:bg-lightGray duration-200'>
                        خانه
                    </p>
                    <p className='h-full flex items-center px-4 hover:bg-lightGray duration-200'>
                        جستجوی مشاغل
                    </p>
                    <p className='h-full flex items-center px-4 hover:bg-lightGray duration-200'>
                        رزومه ساز
                    </p>
                    <p className='h-full flex items-center px-4 hover:bg-lightGray duration-200'>
                        50 شرکت برتر
                    </p>
                    <Link
                        className='h-full flex items-center px-4 hover:bg-lightGray duration-200'
                        to='/employer'
                    >
                        بخش کارفرمایان
                    </Link>
                </div>
                <div className='flex text-textGray h-full items-center '>
                    <Link
                        className='h-full flex items-center px-4 hover:bg-lightGray duration-200'
                        to='/join/user'
                    >
                        ثبت نام کارجو
                    </Link>
                    <Link
                        className='h-full flex items-center px-4 hover:bg-lightGray duration-200'
                        to='/login/user'
                    >
                        ورود کارجو
                    </Link>
                    <p className='h-full flex items-center px-4 hover:bg-lightGray duration-200'>
                        jobinja
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
