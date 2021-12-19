import React from 'react'

import "./MovieModal.css"

export const Modal = ({backdrop_path,title,overview,name,release_date,first_air_date,vote_average,setModalVisibility}) => {
        const base_url ="https://image.tmdb.org/t/p/original/"; 

        return (
                <div className='presentation' role="presentation">
                        <div className= 'wrapper-modal'>
                                <div className='modal'>
                                        <span 
                                                onClick={()=>setModalVisibility(false)}
                                                className='modal-close'
                                        >       
                                                <i className="fas fa-times "></i>
                                        </span>
                                        <img 
                                                src={`${base_url}${backdrop_path}`} 
                                                alt={title}
                                                className='modal__poster-img'
                                        />
                                        <div className='modal__content'>
                                                <p className='modal__title'>{title? title:name}</p>
                                                <p className='modal__overview'>{overview}</p>   
                                                <p className="modal__overview">Vote Average: {vote_average}</p>
                                        </div>

                                </div>

                        </div>
                        
                </div>
        )
}
