import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LoginUser from '../components/LoginUser';
import SignupUser from '../components/SignupUser';
import LoginEmployer from '../components/LoginEmployer';

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
        element: <LoginEmployer />,
    },
]);

export default router;
