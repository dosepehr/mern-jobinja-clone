import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LoginUser from '../components/LoginUser';
import SignupUser from '../components/SignupUser';

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
]);

export default router;
