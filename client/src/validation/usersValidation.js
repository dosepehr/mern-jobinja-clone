import * as Yup from 'yup';
// ! validation schema on registering
export const loginUserShema = Yup.object().shape({
    password: Yup.string()
        .required('رمز عبور را وارد کنید')
        .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد'),
    email: Yup.string()
        .email('آدرس وارد شده صحیح نمیباشد')
        .required('ایمیل را وارد کنید'),
});

export const signUpUserShema = Yup.object().shape({
    username: Yup.string().required('نام و نام خانوادگی را وارد کنید'),
    password: Yup.string()
        .required('رمز عبور را وارد کنید')
        .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد'),
    email: Yup.string()
        .email('آدرس وارد شده صحیح نمیباشد')
        .required('ایمیل را وارد کنید'),
    confirmPassword: Yup.string().required('رمز عبور را تکرار کنید'),
});
