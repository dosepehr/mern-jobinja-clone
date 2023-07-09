import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LoginUser from '../components/LoginUser';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/join/user',
        element: <LoginUser />,
    },
]);

export default router;
