import React, { useState, useEffect } from 'react';
import axios from './axios'
import requests from './request'
import './Banner.css'



export default function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
        const req = await axios.get(requests.fetchTrending);
        setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)])
        return req
        }
        fetchData()
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className='banner'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: "center center"
        }}
        >
            <div className="banner__contents">
            <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner__btns">
                <button className="banner_btn">Play</button>
                <button className="banner_btn">My List</button>
            </div>
            <h1 className='banner__desc'>{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className='banner--fadeBottom' />

        </header>
    )
}