import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getMe } from '../../redux/reducers/authSlice';
const MainLayout = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    useEffect(() => {
        dispatch(getMe(token));
    }, [token]);
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default MainLayout;
