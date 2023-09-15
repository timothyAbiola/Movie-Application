import { useState } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Landing from '../pages/Landing'
import Movies from '../pages/Movies'
import Notfound from '../pages/Notfound'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
    </>
  );
}

export default App
