import React, { useState } from 'react'
import logo from '../images/Netflix-logo.png';
import { SignUp } from '../components/SignUp';
import "./login.css"
import { RegisterUp } from '../components/RegisterUp';




export const Login = () => {
        const [signIn, setSignIn] = useState(false);
        const [registerIn, setRegisterIn] = useState(false)
        const [correo, setCorreo] = useState("")
        
        return (
                <div className="loginScreen">
                        <div className='background'>                               

                                <img 
                                        src={logo} 
                                        alt="logo_Netflix" 
                                        className="logo"
                                        onClick={()=>setSignIn(false)}
                                />
                                <button
                                        className="session"
                                        onClick={()=>{setSignIn(true)}}
                                >
                                        Iniciar Sesion

                                </button>

                                <div className="">
                                       
                                    {    signIn
                                               ? (<SignUp/>)
                                                : (registerIn) 
                                                        ?(<RegisterUp correo={correo}/>)                                                 
                                                                :
                                                                        <div className='body'>
                                                                               <h1>Películas y series ilimitadas y mucho más.</h1>
                                                                               <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
                                                                                <h3>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h3>
                                                                                <form onSubmit={()=> {setRegisterIn(true)}} >
                                                                                        <input 
                                                                                                type="email"
                                                                                                placeholder='Email'
                                                                                                className='input_comenzar'
                                                                                                value={correo}
                                                                                                onChange={(e)=>setCorreo(e.target.value)}
                                                                                        />
                                                                                        <button
                                                                                                className='btn_comenzar'
                                                                                        >Comenzar</button>
                                                                                </form>
                                                                        </div>

                                     }   
                                </div>
                        </div>

                </div>
        )
}



