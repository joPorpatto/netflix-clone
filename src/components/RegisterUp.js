import '../firebaseConfig'; 
import "./registerUp.css"


import { startRegisterWithEmailPasswordName } from '../action/auth';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { Loading } from '../helpers/Loading';
import { loadingShow } from '../action/load';


export const RegisterUp = ({correo}) => {

        const dispatch = useDispatch();

        return (
                <div className="signUp_screen">
                        <h1>Crea una cuenta </h1>

                        <Formik
                                initialValues={{email: `${correo}` ,password:""}}
                                validate={(values)=>{
                                         let errores = {};

                                       if (!values.email) {
                                               errores.email = "Ingresar correo"
                                       }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                                               errores.email = "El correo de poseer caracteres válidos"
                                       }

                                       if (!values.password) {
                                               errores.password ="Ingresar contraseña"
                                               
                                       }

                                       return errores;
                                }} 
                                onSubmit={
                                        (values,{resetForm})=>{
                                                resetForm();
                                                dispatch(loadingShow())
                                                dispatch(startRegisterWithEmailPasswordName(values))

                                        }
                                }
                                >
                                        {({values,touched,errors,handleChange,handleSubmit}) =>(
                                                <Form onSubmit={handleSubmit}>
                                                        <Field
                                                                type="email"
                                                                autoComplete="off"
                                                                placeholder="email"
                                                                name="email"
                                                                value={values.email}
                                                                onChange={handleChange}
                                                                className="input_netflix"
                                                        />
                                                        {touched.email && errors.email && <p className="error">{errors.email}</p> }                               

                                                        <Field
                                                                type="password"
                                                                placeholder="password"
                                                                autoComplete="off"
                                                                name="password"
                                                                value={values.password}
                                                                onChange={handleChange}
                                                                className="input_netflix"

                                                        />
                                                         {touched.password 
                                                                        && errors.password 
                                                                        && <p className=" error"> 
                                                                        {errors.password}</p>} 
                                                        <button 
                                                                className='button_netflix'
                                                                // wide="mediumWidth"
                                                                type="submit" 
                                                                
                                                        >
                                                                Registrarse
                                                        </button>

                                                        {/* <h5>¿Primera vez en Netflix? {"  "}
                                                                <span 
                                                                        className="SignUpLink"
                                                                        onClick={register}
                                                                >
                                                                        Suscribe ya.
                                                                </span>

                                                        </h5> */}
                                                                                


                                                </Form>

                                        )}


                        </Formik>
                <Loading/>

                         




{/*                         
                        <form >
                                <input 
                                        placeholder="Email" 
                                        className="input_netflix"
                                        value={email}
                                        type="email"
                                        onChange={(e)=>setEmail(e.target.value)}
                                />
                                <input
                                        placeholder="Contraseña" 
                                        className="input_netflix"
                                        value={password}
                                        type="password"
                                        onChange={(e)=>setPassword(e.target.value)}
                                />
                                
                                <button 
                                        className='button_netflix'
                                        onClick={signIn}
                                        wide="mediumWidth"
                                        type="submit" 
                                >
                                        Iniciar sesión
                                </button>
                                <h5>¿Primera vez en Netflix? {"  "}

                                        <span 
                                                className="SignUpLink"
                                                onClick={register}
                                        >
                                                Suscribe ya.
                                        </span>

                                </h5>
                        </form> */}
                </div>

        )
}
