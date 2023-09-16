import React, { useEffect, useState } from 'react'
import rectangle from '../src/assets/Rectangle.jpg'
import List from '../src/assets/List.svg'

const Load = () => {
  const [favMovie, setfavMovie] = useState(null);
  const [movieYear, setmovieYear] = useState(null)
  const [Rating, setRating] = useState(null)

  useEffect(() => {
    const serializedMovieData = localStorage.getItem("clickedMovie");
    if (serializedMovieData) {
      const movieData = JSON.parse(serializedMovieData);
      const releaseYear = new Date(movieData.release_date).getFullYear();
      const rate = movieData.vote_count / movieData.vote_average;
      setRating(rate)
      setmovieYear(releaseYear)
      setfavMovie(movieData);
    }
  }, [])
  
  return (
    <>
      {favMovie ? (
        <div className="display">
          <img
            src={`https://image.tmdb.org/t/p/w500${favMovie.poster_path}`}
            alt=""
            className="displayImg"
          />
          <div className="info">
            <div className="d-left">
              <div className="titleItem">
                <div className="title">
                  <h4 data-testid="movie-title">{favMovie.title}</h4>
                  <li data-testid="movie-release-date">{movieYear}</li>
                  <li>PG-13</li>
                  <li data-testid="movie-runtime">2h 10m</li>
                  <button className="gens">Action</button>
                  <button className="gens">Drama</button>
                </div>
                <p data-testid='movie-overview'>{favMovie.overview}</p>
              </div>
              <div className="crew">
                <div>
                  <span>Director:</span>
                  <span className="name"> Joseph Kosinski</span>
                </div>
                <div>
                  <span>Writers: </span>
                  <span className="name">
                    Jim Cash, Jack Epps Jr, Peter Craig
                  </span>
                </div>
                <div>
                  <span>Stars: </span>
                  <span className="name">
                    Tom Cruise, Jennifer Connelly, Miles Teller
                  </span>
                </div>
                <div className="ratedBtn">
                  <button className="show rated">Top rated movie #65</button>
                  <select id="mySelect" name="fruit" className="award">
                    <option value="apple">Awards 9 nominations</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="d-right">
              <div className="favTop">
                <div className="favShow">
                  <img src="" alt="" />
                  <span>{favMovie.vote_average}</span>
                  <span>| {Rating.toFixed(0)}k</span>
                </div>
                <button className="show">
                  <img src="" alt="" />
                  <span>See Showtimes</span>
                </button>
                <button className="btnMore">
                  <img src="" alt="" />
                  <span>More watch options</span>
                </button>
              </div>
              <div className="arrContain">
                <div>
                  <img
                    src={rectangle}
                    alt="an array of movies"
                    className="rec"
                  />
                </div>
                <div className="tray">
                  <img src={List} alt="List Icon" />
                  <span>The Best Movies and Shows in September</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No movie data found.</p>
      )}
    </>
  );
}

export default Load