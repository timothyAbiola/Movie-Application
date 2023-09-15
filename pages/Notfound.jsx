import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
      Page Not found,
      <Link to='/'>are you lost?</Link>
    </div>
  );
}

export default Notfound