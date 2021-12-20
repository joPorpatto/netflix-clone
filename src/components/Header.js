import React, { useEffect, useState } from 'react'
import logo from "../images/Netflix-logo.png"
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import avatar from "../images/Netflix-avatar.png"
import { startLogout } from '../action/auth';
import "./nav.css"

export const Header = () =>{

        const [show, setShow] = useState(false)
        const navigate = useNavigate();
        const dispatch = useDispatch()
        const {email} = useSelector(state => state.auth)

        useEffect(()=>{
                window.addEventListener("scroll", () =>{
                if(window.scrollY > 100){
                        setShow(true);
                }else{
                        setShow(false);
                }                
                });
                return () => {
                window.removeEventListener("scroll",()=>{})
                }
        }, [])

        const handleClick = (e) =>{
                e.preventDefault();
                dispatch(startLogout())
        }

        return ( 

                <nav className={`nav ${show && "nav_black"}`}>
                        <img 
                                src={logo} 
                                alt="logo_Netflix"
                                className='nav_logo'
                                onClick={()=>navigate({pathname: './home'})}
                                />
                       
                        <img 
                                src={avatar} 
                                alt="avatar"
                                className='nav_avatar'       
                                // onClick={()=>navigate({pathname: './profile'})} 
                                />
                        <div className='menu' >
                                <div className="flecha">        
                                        <i className="fas fa-sort-down "></i>
                                </div>                    
                                <div className='close'>

                                        <span
                                                className='spanClose'
                                                onClick={handleClick}
                                                > Cerrar sesión en Netflix de {email} </span>
                                </div>    
                        </div>

                </nav>


        ) 

}



