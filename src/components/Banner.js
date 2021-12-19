import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { requests } from '../helpers/requests';
import "./banner.css"
import { Modal } from './modal/Modal';

export const Banner = () => {
        const [movie, setMovie] = useState([])
         const [modalVisibility, setModalVisibility] = useState(false)
        const [movieSelected, setMovieSelection] = useState({});

        const truncate = (string,n) =>{
                return(
                        string?.length > n
                                ? `${string.substr(0,n-1)} ...`
                                : string
                )
        }

        useEffect(() => {
                const fetchData = async() =>{
                        const request = await axios.get(`https://api.themoviedb.org/3/${requests.fetchNetflixOriginal}`)
                        const random = Math.floor(Math.random()* request.data.results.length-1)
                        setMovie(request.data.results[random])
                        return request
                }
                fetchData();
        }, [])
        
        let titleMovie = movie?.title || movie?.name || movie?.original_name
        let titleToUpper = titleMovie?.toUpperCase()


         const handleClickMovie = (movie) =>{
                setModalVisibility(true)
                setMovieSelection(movie);
        }

        return (
                <div className="banner" 
                        style={{
                                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, 
                                backgroundPosition : "top center",
                                backgroundSize: "cover",
                }}>
                        <div className="banner__contents">

                                <h1 className='banner__title'>
                                        {titleToUpper}
                                </h1>
                                
                                <h2 
                                        className='banner__description'
                                        style={{wordWrap: "break-word"}}                                       
                                >
                                        
                                        {
                                                truncate(movie.overview,150)
                                        }
                                </h2>

                                <div className='banner__buttons'>
                                        <button className='banner__button play'>
                                                <i className="fas fa-play"> </i>&nbsp;Reproducir</button>
                                        <button 
                                                className='banner__button information'
                                                onClick={()=>handleClickMovie(movie)}
                                                >
                                                <i className="fas fa-info-circle"></i>
                                               &nbsp;Más información</button>
                                </div>
                        </div>
                        {modalVisibility && <Modal {...movieSelected} setModalVisibility={setModalVisibility}/>}
                </div>
        )
}
