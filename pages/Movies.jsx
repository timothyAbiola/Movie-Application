import React from 'react'
import Navbar from '../components/Navbar';
import Load from '../components/Load';

const Movies = () => {
  return (
    <>
      <main className='movieMain'>
              <Navbar />
              <Load/>
      </main>
    </>
  );
}

export default Movies