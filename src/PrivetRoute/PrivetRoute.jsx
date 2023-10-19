
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import Swal from 'sweetalert2';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext)
    const location = useLocation()

    if(loader){
        return <div className='flex justify-center items-start min-h-[50vh]'><span className="loading loading-bars loading-lg"></span></div>
    }

    if(user){
       return children
    }
    return <>
        {
            Swal.fire(
                "Sorry",
                "please log in and try again",
                "warning"
            )
        }
    </> && <Navigate state={location.pathname} to = "/login"></Navigate>
};

PrivetRoute.propTypes = {
    children: PropTypes.node
};

export default PrivetRoute;