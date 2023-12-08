import React from 'react'

interface Props {
    movie: any
}

const MovieDetails: React.FC<Props> = ({ movie }) => {
    return (
        <div>
            <div>
                <img
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}
                />
                <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.tagline}</p>
                    <p>{movie.overview}</p>
                    <p>{movie.release_date}</p>
                    <p>{movie.runtime}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
