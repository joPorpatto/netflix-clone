import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,    
  } from 'react-router-dom';

import { getAuth ,onAuthStateChanged} from 'firebase/auth';
import '../firebaseConfig'; 

import { Login } from '../Pages/Login';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Home } from '../Pages/Home';
import { useDispatch } from 'react-redux';
import { login } from '../action/auth';

export const AppRouter = () => {

        const dispatch = useDispatch()
        const [IsLogginIn, setIsLogginIn] = useState(false)        

        useEffect(() => {
                const auth = getAuth();
                onAuthStateChanged(auth,  async (user) =>{
                        if (user?.uid) {
                                dispatch(login(user.uid, user.email));
                                setIsLogginIn(true)
                        }else {                                
                                setIsLogginIn(false)
                        }
                })
        }, [dispatch] )

        return (
                <div className='root' >
                        <Router>
                                <Routes>
                                        {/* PUBLICA */}
                                        <Route
                                                path='/login'
                                                element={
                                                        <PublicRoute
                                                                isAuthenticated={IsLogginIn}
                                                                element={<Login/>}
                                                        />
                                                }
                                        />
                                        
                                         {/* PRIVADA */}
                                         <Route
                                                path='/*'
                                                element={
                                                        <PrivateRoute
                                                                isAuthenticated={IsLogginIn}
                                                                element={<Home/>}
                                                        />
                                                }
                                        /> 
                                         {/* PRIVADA */}
                                          <Route
                                                path='/home'
                                                element={
                                                        <PrivateRoute
                                                                isAuthenticated={IsLogginIn}
                                                                element={<Home/>}
                                                        />
                                                }
                                        /> 
                                        

                                 </Routes>
                        </Router>
                        
                </div>
        )
}

