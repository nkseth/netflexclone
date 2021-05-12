import React, { useEffect, useState } from 'react';
import './banner.css'
import req from './request'
import axios from './axios'

const Banner = () => {

    const [movie, setmovie] = useState([])

    useEffect(() => {
        const fetchdata = async () => {

            const request = await axios.get(req.fetchNetflixOriginals)

            setmovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ])
            return request;
        }
        fetchdata()
    }, [])


    console.log(movie)


    const trankate = (string, n) => {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string
    }
    return (<header className='banner'
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }}
    >
        <div className="banner__content">
            <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.originaln_name}
            </h1>
            <div className="banner__buttons">
                <button
                    className="banner__button">
                    Play
                </button>
                <button
                    className="banner__button">
                    My Playlist
                </button>
            </div>
            <h1
                className="banner__discription">
                {trankate(movie?.overview, 150)}</h1>

        </div>
        <div className="banner__fadebottom"></div>
    </header>
    );
}

export default Banner;