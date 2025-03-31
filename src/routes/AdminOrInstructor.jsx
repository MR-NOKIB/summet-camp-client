import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useIsInstructor from "../hooks/useIsInstructor";

const AdminOrInstructor = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useIsInstructor();
    const location = useLocation();
    if (loading || isAdminLoading || isInstructorLoading) {
        return <div className='h-screen flex items-center justify-center'>
            <span className="loading loading-spinner w-[40px]"></span>
        </div>
    }

    if (user && (isAdmin || isInstructor)){
        return children;
    }
    return <Navigate to="/" state={{from: location}}></Navigate>
};

export default AdminOrInstructor;