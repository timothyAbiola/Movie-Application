import { useState } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Landing from '../pages/Landing'
import Movies from '../pages/Movies'
import Notfound from '../pages/Notfound'
import Index from '../components/Index'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path='/index' Component={Index}/>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
    </>
  );
}

export default App
