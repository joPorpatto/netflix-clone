import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./row.css";
import { Modal } from './modal/Modal';

export const Row = ({title,fetchUrl, isLargeRow,id}) => {

        const [movies, setMovies] = useState([])
        const [modalVisibility, setModalVisibility] = useState(false)
        const [movieSelected, setMovieSelection] = useState({});

        const base_url ="https://image.tmdb.org/t/p/original"

        useEffect(() => {                
                try {                        
                        const fetchData = async () =>{
                                const request = await axios.get(`https://api.themoviedb.org/3/${fetchUrl}`)
                                setMovies(request.data.results)
                                return request
                        };        
                        fetchData()
                } catch (error) {
                        console.log(error)                        
                }
                
        }, [fetchUrl])

        const handleClickMovie = (movie) =>{
                setModalVisibility(true)
                setMovieSelection(movie);
        }

        return (
                <section className="row">
                        <h2 className='title'>{title}</h2>
                        <div className="slider">
                                <div className="slider__arrow-left">
                                        <span 
                                                className="arrow" 
                                                onClick={()=>{document.getElementById(id).scrollLeft-=(window.innerWidth-80)}}
                                                >
                                                 <i className="fas fa-angle-left fa-2x"></i>     
                                        </span>

                                </div>
                                <div   id={id} className='row__posters'>
                                        {
                                                movies.map((movie)=>
                                                ((isLargeRow && movie.poster_path) ||
                                                (!isLargeRow && movie.backdrop_path)) && (
                                                        <img
                                                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                                                key={movie.id}
                                                                src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path }`}
                                                                alt={movie?.name}
                                                                onClick={()=>handleClickMovie(movie)}
                                                        />
                                                )
                                                )
                                        }
                                </div>
                                <div className="slider__arrow-right" >
                                        <span 
                                                className="arrow" 
                                                onClick={()=>{document.getElementById(id).scrollLeft+=(window.innerWidth-80)}}
                                                >
                                                        <i className="fas fa-angle-right fa-2x"></i>
                                        </span>
                                </div>

                        </div>
                        {modalVisibility && <Modal {...movieSelected} setModalVisibility={setModalVisibility}/>}
                </section>
        )
}
