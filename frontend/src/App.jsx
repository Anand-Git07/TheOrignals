import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Men from './pages/men'
import Women from './pages/wemen'
import Navbar from './components/Navbar'

export default function App(){
  return(
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        {/* <Route path="/product" element={<Product/>}/> */}
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

    </BrowserRouter>
  )
}