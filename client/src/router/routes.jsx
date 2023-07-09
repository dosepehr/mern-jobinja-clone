import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LoginUser from '../components/LoginUser';
import SignupUser from '../components/SignupUser';
// import LoginEmployer from '../components/LoginEmployer';
import SignupEmployer from '../components/signupEmployer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login/user',
        element: <LoginUser />,
    },
    {
        path: '/join/user',
        element: <SignupUser />,
    },
    {
        path: '/employer',
        element: <SignupEmployer />,
    },
]);

export default router;
