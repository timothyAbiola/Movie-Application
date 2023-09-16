import React from 'react'
import logo from '../src/assets/Logo.svg'
import home from '../src/assets/Home.svg'
import movieProject from "../src/assets/MovieProjector.svg";
import tvShow from "../src/assets/TvShow.svg";
import calendar from '../src/assets/Calendar.svg'
import logout from '../src/assets/Logout.svg'
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <>
      <nav className="movienav">
        <div className="navItem ni">
          <img src={logo} alt="Movie Box" />
          {/* <span>MovieBox</span> */}
        </div>
        <div className="bar">
          <Link to="/" className="navItem">
            <img src={home} alt=" Home Icon" />
            <span>Home</span>
          </Link>
          <Link to="/movies" className="navItem">
            <img src={movieProject} alt=" Camera Icon" />
            <span className="movie">Movies</span>
          </Link>
          <Link to="/index" className="navItem">
            <img src={tvShow} alt=" Tv set Icon" />
            <span>Tv Series</span>
          </Link>
          <Link to="/" className="navItem">
            <img src={calendar} alt=" Calender Icon" />
            <span>Upcoming</span>
          </Link>
          <div className="game">
            <p>Play movie quizes and earn free tickets</p>
            <span>50k people are playing now</span>
            <button className="start">Start Playing</button>
          </div>
          <Link to='/' className="navItem log">
            <img src={logout} alt="Logout Icon" />
            <span>Log out</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar