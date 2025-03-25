import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { loading, user } = useAuth();

    if (loading) {
        return <div className='h-screen flex items-center justify-center'>
            <span className="loading loading-spinner w-[40px]"></span>
        </div>

    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default PrivateRoute;