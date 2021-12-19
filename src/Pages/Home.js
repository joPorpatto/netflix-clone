import React from 'react'
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Row } from '../components/Row';
import { requests } from '../helpers/requests';
import { Footer } from '../components/Footer';


export const Home = () => {

        return (
                <div>
                        <Header/>     
                        <Banner/>  
                        <Row title="Solo en Netflix" id="NO" fetchUrl={requests.fetchNetflixOriginal} isLargeRow/> 
                        <Row title="Tendencias" id="TN" fetchUrl={requests.fetchTrending}/> 
                        <Row title="Más populares" id="TR" fetchUrl={requests.fetchTopRated}/>
                        <Row title="Documentales" id="DM" fetchUrl={requests.fetchDocumentaries}/>                        
                        <Row title="Películas de terror" id="HM" fetchUrl={requests.fetchHorrorMovies}/>
                        <Row title="Películas de Acción" id="AM" fetchUrl={requests.fetchActionMovies}/>
                        <Row title="Películas de Comedia" id="CM" fetchUrl={requests.fetchComedyMovies}/>
                        <Row title="Películas de Romace" id="RM" fetchUrl={requests.fetchRomanceMovies}/>
                        <Footer/>
                </div>
        )
}
