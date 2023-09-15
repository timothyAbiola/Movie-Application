import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="social">
          <i className="fa-brands fa-instagram fa"></i>
          <i className="fa-brands fa-square-facebook fa"></i>
          <i className="fa-brands fa-twitter fa"></i>
          <i className="fa-brands fa-youtube fa"></i>
        </div>
        <div className="termOfUse">
          <h4>Conditions of Use</h4>
          <h4>Privacy & Policy</h4>
          <h4>Press Room</h4>
        </div>
        <div className="copyright">
          <a href="https://mongodb.com/" target="_blank" className='right'>
            © 2021 MovieBox by Adriana Eka Prayudha
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer