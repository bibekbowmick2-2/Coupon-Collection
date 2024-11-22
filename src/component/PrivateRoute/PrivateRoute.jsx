import React,{ useContext } from 'react'
import { AppContext } from '../contextapi/AppProvider';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const { user } = useContext(AppContext);

    // if (!user) {
    //   // Show a loading state while checking authentication
    //   return (
    //     <div className="flex items-center justify-center h-screen">
    //       <span className="loading loading-spinner loading-lg"></span>
    //       <p>Loading...</p>
    //     </div>
    //   );
    // }

    if(user){
        return children;
    }
  return (

    <Navigate to="/login">

    </Navigate>
  )
}
