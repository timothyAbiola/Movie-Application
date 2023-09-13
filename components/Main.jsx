import React, { useState, useEffect } from "react";

const Main = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = () => {
      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=c93129978548f701bad37e7b5fc1e919"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovieData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchMovieData();
  }, []);

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
              <div key={movie.id} className="card" data-testid="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="cardImg"
                />
                <div>
                  <h4>{movie.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
