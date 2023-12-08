import React, { useState, useEffect } from 'react'
import MovieList from './MovieList'
import MovieDetails from './MovieDetails'
import SearchBar from './SearchBar'
import { fetchPopularMovies, fetchMovieDetails } from './api'

interface Movie {
    id: number
    title: string
    release_date: string
    poster_path: string
    vote_average: string
}

const App: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

    useEffect(() => {
        fetchPopularMovies().then((data) => setMovies(data.results))
    }, [])

    const handleMovieClick = (movieId: number) => {
        fetchMovieDetails(movieId).then((data) => setSelectedMovie(data))
    }

    return (
        <div>
            <h1>Heimdall Movies</h1>
            <SearchBar />
            <MovieList movies={movies} onMovieClick={handleMovieClick} />
            {selectedMovie && <MovieDetails movie={selectedMovie} />}
        </div>
    )
}

export default App
