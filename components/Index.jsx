import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Fruit from "../src/assets/fruit.svg";
import Imdb from "../src/assets/IMDB.svg";

const Index = () => {
  const [movieData, setMovieData] = useState(null);
   const navigate = useNavigate();
  useEffect(() => {
    const fetchMovieData = () => {
      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=c93129978548f701bad37e7b5fc1e919"
      )
        .then((res) => res.json())
        .then((data) => {
          setMovieData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchMovieData();
  }, []);

  const itemClick = (clickedMovie) => {
    const serializedMoviedata = JSON.stringify(clickedMovie)
    localStorage.setItem("clickedMovie", serializedMoviedata)
    navigate("/movies")
    }
  return (
    <>
      {movieData && (
        <div className="main">
          <div className="mainTop">
            <h2>Featured Movie</h2>
            <div className="more">
              <span>See More</span>
              <i className="fa-solid fa-greater-than greater"></i>
            </div>
          </div>
          <div className="cards">
            {movieData.results.slice(0, 10).map((movie) => (
              <div
                key={movie.id}
                className="card"
                data-testid="movie-card"
                onClick={() => itemClick(movie)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="cardImg"
                  data-testid="movie-poster"
                />
                <div className="asiderow2">
                  <h5 data-testid="movie-release-date">{movie.release_date}</h5>
                  <h4 data-testid="movie-title">{movie.title}</h4>
                  <div className="mainTop">
                    <span className="ratingDetails">
                      <img src={Imdb} alt="Imdb icon" />
                      <span>{movie.vote_average.toFixed(1)}/10</span>
                    </span>
                    <span className="ratingDetails">
                      <img src={Fruit} alt="Fruit icon" />
                      <span>97%</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
