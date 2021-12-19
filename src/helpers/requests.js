//98fb07fc01997f5eb9995c471905d6a4

//https://api.themoviedb.org/3/movie/550?api_key=98fb07fc01997f5eb9995c471905d6a4

const API_KEY = "98fb07fc01997f5eb9995c471905d6a4";

export const requests = {
        fetchNetflixOriginal: `discover/tv?api_key=${API_KEY}&with_networks=213`,
        fetchTrending: `trending/all/week?api_key=${API_KEY}`,

        fetchActionMovies: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=28`,
        
        
        fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchComedyMovies: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=35`,
        fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=27`,
        fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10749`,
        fetchDocumentaries: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=99`,

}
