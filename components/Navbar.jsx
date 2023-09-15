import React from 'react'
import logo from '../src/assets/Logo.svg'
import home from '../src/assets/Home.svg'
import movieProject from "../src/assets/MovieProjector.svg";
import tvShow from "../src/assets/TvShow.svg";
import calendar from '../src/assets/Calendar.svg'
import logout from '../src/assets/Logout.svg'


const Navbar = () => {
  return (
    <>
      <nav className="movienav">
        <div className="navItem ni">
          <img src={logo} alt="" />
          {/* <span>MovieBox</span> */}
        </div>
        <div>
          <div className="navItem">
            <img src={home} alt="" />
            <span>Home</span>
          </div>
          <div className="navItem">
            <img src={movieProject} alt="" />
            <span className='movie'>Movies</span>
          </div>
          <div className="navItem">
            <img src={tvShow} alt="" />
            <span>Tv Series</span>
          </div>
          <div className="navItem">
            <img src={calendar} alt="" />
            <span>Upcoming</span>
          </div>
          <div className='game'>
            <p>Play movie quizes and earn free tickets</p>
            <span>50k people are playing now</span>
            <button className='start'>Start Playing</button>
          </div>
          <div className="navItem log">
            <img src={logout} alt="" />
            <span>Log out</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar