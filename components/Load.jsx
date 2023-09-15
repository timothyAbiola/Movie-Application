import React, {useEffect, useState} from 'react'

const Load = () => {
  const [clickedMovie, setclickedMovie] = useState(null);

  useEffect(() => {
    const serializedMovieData = localStorage.getItem("clikedMovie")
    if (serializedMovieData) {
      const movieData = JSON.parse(serializedMovieData);
      setclickedMovie(movieData);
    }
  }, [])
  
  return (
    <>
      {clickedMovie ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${clickedMovie.poster_path}`}
            alt=""
          />
          <div>
            <div>
              <div>
                <div>
                  <h4>Top Gun: Maverick</h4>
                  <li>2022</li>
                  <li>PG-13</li>
                  <li>2h 10m</li>
                  <button>Action</button>
                  <button>Drama</button>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum repudiandae odio excepturi perspiciatis similique
                  accusantium praesentium laboriosam sapiente, explicabo enim
                  possimus, fugiat repellendus voluptas vel qui impedit.
                  Ratione, a possimus?
                </p>
              </div>
              <div>
                <div>
                  <span>Director:</span>
                  <span>Joseph Kosinski</span>
                </div>
                <div>
                  <span>Writers:</span>
                  <span>Jim Cash, Jack Epps Jr, Peter Craig</span>
                </div>
                <div>
                  <span>Stars:</span>
                  <span>Tom Cruise, Jennifer Connelly, Miles Teller</span>
                </div>
                <div>
                  <button>Top rated movie #65</button>
                  <div>Awards 9 nominations</div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img src="" alt="" />
                  <span>8.5</span>
                  <span>| 350k</span>
                </div>
                <button>
                  <img src="" alt="" />
                  <span>See Showtimes</span>
                </button>
                <button>
                  <img src="" alt="" />
                  <span>More watch options</span>
                </button>
              </div>
              <div>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
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