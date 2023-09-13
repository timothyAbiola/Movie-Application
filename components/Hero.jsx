import React from "react";
import Tv from "../src/assets/tv.svg";
import Menu from "../src/assets/Menu.svg";
import Fruit from "../src/assets/fruit.svg"
import Imdb from "../src/assets/IMDB.svg"
import Play from "../src/assets/Play.svg"

const Hero = () => {
  return (
    <>
      <div className="hero">
        <header>
          <nav className="moviebox">
            <img src={Tv} alt="" />
            <span className="movietext">MovieBox</span>
          </nav>
          <nav className="navinput">
            <input
              type="text"
              className="movieinput"
              placeholder="What do you want to watch?"
            />
            <span className="material-symbols-outlined search">search</span>
          </nav>
          <nav className="moviemenu">
            <a href="#" className="signIn">
              Sign in
            </a>
            <img src={Menu} alt="menu bar" className="signicon" />
          </nav>
        </header>
        <aside className="heroAside">
          <h2 className="John">John Wick 3: Parabellum</h2>
          <div className="asiderow2">
            <div className="rating">
              <div className="row">
                <img src={Imdb} alt="Imdb image" />
                <span>86.0/100</span>
              </div>
              <div className="row">
                <img src={Fruit} alt="Fruit image" />
                <span>97%</span>
              </div>
            </div>
            <div className="asidetext">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </div>
            <button className="asidebtn">
              <img src={Play} alt="Play Icon" />
              <span className="playspan">WATCH TRAILER</span>
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Hero;
