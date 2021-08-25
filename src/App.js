import React from "react"
import './App.css';
import Row from './Row'
import Banner from './Banner'
import requests from './request'
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      <Nav  />
      <Banner />
      <Row title="NETFLEX ORIGINAL" fetchURL= {requests.fetchNetflexOriginals} isLargeRow />
      <Row title="Trending Now" fetchURL= {requests.fetchTrending} />
      <Row title="Top Rated" fetchURL= {requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL= {requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL= {requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchURL= {requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL= {requests.fetchDocumentaries} />





    </div>
  );
}

export default App;
