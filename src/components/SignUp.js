import '../firebaseConfig'; 
import "./signUp.css"


import { startLoginEmailPassw } from '../action/auth';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { Loading } from '../helpers/Loading';
import { loadingShow } from '../action/load';


export const SignUp = () => {

        const dispatch = useDispatch()

        return (
                <div className="signUp_screen">
                        <h1>Inicia sesión</h1>

                        <Formik
                                initialValues={{email:"",password:""}}
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
                                                dispatch(startLoginEmailPassw(values))

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
                                                                type="submit" 
                                                                
                                                        >
                                                                Iniciar sesión
                                                        </button>
                                                </Form>

                                        )}
                        </Formik>
                        <Loading/>
                </div>
        )
}
