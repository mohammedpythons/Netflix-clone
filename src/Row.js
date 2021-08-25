import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

export default function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);


// a snippt of code which runs based on a specific condition
// crate a async function and call it inside the useEffect
// axios here represents the axios call from the axios.js file
    useEffect(() => {
        async function fetchData() {
            // this code is basically doing the follwing
            //fetchURL = requests.fetchOriginal   'http://api.themoviedb.org/3//trending/all/week?api_key=${API_KEY}&language=en-US',
            const request =  await axios.get(fetchURL);
            setMovies(request.data.results);
            return request

        }
        fetchData();
    },[fetchURL]) // the empty brackets tells us that it will run once


const movie = movies.map(movie =>
    <img
        key={movie.id}
        className={`row_poster ${isLargeRow && "row_posterlarge"}`}
        src={`${baseUrl}${isLargeRow?movie.poster_path: movie.backdrop_path}`}
        alt={movie.name}
    />)
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {/* several row_poster(s) */}
                {movie}
            </div>
            {/*  */}

        </div>
    )
}


