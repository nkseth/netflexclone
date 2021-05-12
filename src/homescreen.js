import React from 'react';
import Nav from './nav'
import "./homescreen.css";
import Banner from './banner';
import req from './request'
import Row from './row'


const Homescreen = () => {
    return (<div className='home'>
        <Nav />
        <Banner />

        <Row
            title="NETFLEX ORIGINALS"
            fetchUrl={req.fetchNetflixOriginals}
            isLargRow
        />
        <Row
            title="Trending Now"
            fetchUrl={req.fetchTrending}

        />
        <Row
            title="Top Rated"
            fetchUrl={req.fetchTopRated}

        />
        <Row
            title="Action Movies"
            fetchUrl={req.fetchActionMovies}

        />
        <Row
            title="Comedy Movies"
            fetchUrl={req.fetchComedyMovies}

        />

        <Row
            title="Horror Movies"
            fetchUrl={req.fetchHorrorMovies}

        />

        <Row
            title="Romance Movies"
            fetchUrl={req.fetchRomanceMovies}

        />
        <Row
            title="Documentaries"
            fetchUrl={req.fetchDocumantaries}

        />

    </div>);
}

export default Homescreen;