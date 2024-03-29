
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'; 
import Navbar from './Navbar';
function App() {
  return (
    <>
<div style={{backgroundColor:'black'}} classname="app">
  <Navbar/>
    <div>
      <Banner></Banner>
    </div>
    <div>
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
   </div>
</div>
</>

  );
}

export default App;
