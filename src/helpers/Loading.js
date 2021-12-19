import React from 'react'
import { useSelector } from 'react-redux'
import "./spinner.css"

export const Loading = () => {
        
        
        const {loading} = useSelector(state => state.load)
        return (

                <>
                {
                        (loading)&&
                
                        <div className='spinnerContent'>
                                <div className="spinner"></div>
                                
                        </div>
                
                }
                </>
        )
}