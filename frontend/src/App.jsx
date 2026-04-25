import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

export default function App(){
return(
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/product" element={<Product/>}/>
<Route path="/cart" element={<Cart/>}/>
</Routes>
</BrowserRouter>
)
}