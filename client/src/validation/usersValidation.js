import * as Yup from 'yup';
export const loginUserSchema = Yup.object().shape({
    password: Yup.string()
        .required('رمز عبور را وارد کنید')
        .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد'),
    email: Yup.string()
        .email('آدرس وارد شده صحیح نمیباشد')
        .required('ایمیل را وارد کنید'),
});

export const signUpUserSchema = Yup.object().shape({
    name: Yup.string().required('نام و نام خانوادگی را وارد کنید'),
    password: Yup.string()
        .required('رمز عبور را وارد کنید')
        .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد'),
    email: Yup.string()
        .email('آدرس وارد شده صحیح نمیباشد')
        .required('ایمیل را وارد کنید'),
    confirmPassword: Yup.string().required('رمز عبور را تکرار کنید'),
});

export const signUpEmployerSchema = Yup.object().shape({
    name: Yup.string().required('نام و نام خانوادگی را وارد کنید'),
    email: Yup.string()
        .email('آدرس وارد شده صحیح نمیباشد')
        .required('ایمیل را وارد کنید'),
    mobile: Yup.string()
        .required('شماره موبایل را وارد کنید')
        .length(11, 'شماره موبایل معتبر نمیباشد'),
    password: Yup.string()
        .required('رمز عبور را وارد کنید')
        .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد'),
    confirmPassword: Yup.string().required('رمز عبور را تکرار کنید'),
});
