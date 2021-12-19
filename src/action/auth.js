import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { types } from "../types/types";

export const startLoginEmailPassw = ({email, password}) => {
        return (dispatch) =>{
                const auth = getAuth();
                signInWithEmailAndPassword(auth,email,password )
                .then(  ({user}) => {
                        dispatch(login(user.uid, user.email  ));
                        dispatch({type: types.loadingFinish}) 
                        })
                        .catch((err)=> {
                                dispatch({type: types.loadingFinish})
                                alert("correo o contraseña no válidos")
                        });
        }
}


export const startRegisterWithEmailPasswordName = ({email,password}) =>{
        return ( dispatch ) => {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth,email,password )
                .then(  ({user}) => {{
                        dispatch( login(user.uid, user.email ))
                        dispatch({type: types.loadingFinish})
                }})
                .catch((err)=> {
                        dispatch({type: types.loadingFinish})
                        alert("correo o contraseña no válidos")
                })
        }
}


export const login = (uid,email) => {
        return{
                type: types.login,
                payload: {
                        uid,
                        email
                }
        }
}

export const startLogout = () => {
        return async (dispatch) => {     
                const auth = getAuth();
                await auth.signOut();        
                dispatch( logout() );
        }
};

export const logout = () =>({
        type: types.logout

})