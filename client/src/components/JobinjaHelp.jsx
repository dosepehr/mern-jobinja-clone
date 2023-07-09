import React from 'react';

const JobinjaHelp = () => {
    return (
        <div className='text-lightGray space-y-7'>
            <div className=''>
                <h1 className='text-3xl inline '>
                    جابینجا چه کمکی به من میکنه؟
                </h1>{' '}
                <span className='bg-mainGreen text-white p-1 rounded-sm font-bold'>
                    رایگان
                </span>
            </div>
            <p>
                همین حالا در جابینجا ثبت‌نام کن و رزومه‌ات رو برای آگهی‌های
                استخدام شرکت‌های معتبر بفرست.
            </p>
            <ul className='space-y-3'>
                <li>
                    جستجوی در آگهی‌های استخدام ۱۰,۴۰۹ شرکت معتبر و ارسال رزومه
                    با یک کلیک
                </li>
                <li>
                    دریافت فرصت‌های شغلی جدید مرتبط از طریق ایمیل (Job Alert)
                </li>
                <li>رزومه‌ساز استاندارد</li>
                <li>شناخت محیط کار و فرهنگ سازمانی شرکت‌های در حال استخدام</li>
            </ul>
        </div>
    );
};

export default JobinjaHelp;
