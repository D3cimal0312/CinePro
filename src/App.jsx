



import './App.css'

import Navbar from './components/Navbar'
import { Routes,Route, Link } from 'react-router-dom'

import Footer from './components/Footer'
 
import Land from './Pages/Land'
import Detailedcard from './Pages/Detailedcard'
import Filter from './Pages/Filter'
import About from './Pages/About'
import Nodata from './Pages/Nodata'

function App() {
 


  return (
    <div className=''>
      <Navbar/>
      <Routes>
<Route path='/' element={<Land/>}/>
<Route path='/movies/:id' element={<Detailedcard />} />
<Route path='/browse' element={<Filter />} />
<Route path='/about' element={<About />} />


    <Route path='*' element={<Nodata/>}/>




</Routes>

    <Footer/>
    </div>
  )
}

export default App
